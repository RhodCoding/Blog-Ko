export interface User {
    id: string;
    username: string;
    email: string;
    role: 'user' | 'admin';
    createdAt: Date;
}

export interface UserCredentials {
    email: string;
    password: string;
}
