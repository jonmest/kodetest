describe('Full post page', () => {
    let expectedPost
    const postId = 1

    before(async () => {
        fetch(`${Cypress.env('API_URL')}/posts/${postId}`)
            .then(res => res.json())
            .then(post => {
                expectedPost = post
            })
    })

    it('Can get 200 status code', () => {
        // visit first post
        cy.visit(`localhost:3000/${postId}`)
    })

    it('has a correct title', () => {
        cy.get('h1').invoke('text').then(text => {
            // The blog posts title is capitalized
            // unlike the original object
            expect(text.toLowerCase()).to.equal(expectedPost.title)
        })
    })

    it('has a correct post body', () => {
        cy.get('.article').invoke('text').then(text => {
            expect(text.toLowerCase()).to.equal(expectedPost.body)
        })
    })
})