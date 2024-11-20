export interface Post {
    id: string;
    title: string;
    summary: string;
    content: string;
    authorId: string;
    authorName: string;
    createdAt: Date;
    updatedAt: Date;
    tags: string[];
}
