describe('Index page', () => {
    let expectedLastPost
    const postId = 100

    before(async () => {
        fetch(`${Cypress.env('API_URL')}/posts/${postId}`)
            .then(res => res.json())
            .then(post => {
                expectedLastPost = post
            })
    })

    it('Can get 200 status code', () => {
        cy.visit('localhost:3000')
    })

    it('Contains ten blog post summaries', () => {
        cy.visit('localhost:3000')
        cy.get('.card-body')
            .should('have.length', 10)
    })

    it('can click on preview to read full post', () => {
        cy.visit('localhost:3000')
        cy.get('.card-title').first().invoke('text')
            .then(text1 => {
                cy.get('.card-title').first().click()
                cy.get('h1').invoke('text').should(text2 => {
                    expect(text1).to.equal(text2)
                })
            })
    })

    it('pagination works', () => {
        // Navigate to last page of pagination
        // and see if the last post title is correct
        cy.visit('localhost:3000')
        cy.get('.pagination li').last().click()

        cy.get('.card-title').last().invoke('text')
            .then(text => {
                expect(text.toLowerCase()).to.equal(expectedLastPost.title)
            })
    })
})