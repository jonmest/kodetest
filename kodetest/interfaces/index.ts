export interface IPost {
    title: string;
    body: string;
    userId: number;
    id: number;
}

export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
}

export interface IComment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}