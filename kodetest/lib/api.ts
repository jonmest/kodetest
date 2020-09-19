const API_URL = process.env.API_URL
import { IPost, IUser, IComment } from '../interfaces'

// Post
export async function getAllPosts(): Promise<Array<IPost>> {
    return fetch(`${API_URL}/posts/`)
            .then(res => res.json())
}

export async function getPost (id: number): Promise<IPost> {
    return fetch(`${API_URL}/posts/${id}`)
            .then(res => res.json())
}

// User
export async function getAllUsers():  Promise<Array<IUser>> {
    return fetch(`${API_URL}/users/`)
            .then(res => res.json())
}

export async function getUser (id: number): Promise<IUser> {
    return fetch(`${API_URL}/users/?id=${id}`)
            .then(res => res.json())
            .then(list => list[0])
}

// Comment
export async function getComments (postId: number):  Promise<Array<IComment>> {
    return fetch(`${API_URL}/posts/${postId}/comments`)
            .then(res => res.json())
}