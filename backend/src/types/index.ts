export interface Blog {
    id: string;
    title: string;
    content: string;
    author: string;
    tags: string[];
    createdAt: Date;
}

export type CreatePostInput = Omit<Blog, 'id' | 'createdAt'>;

export type UpdatePostInput = Partial<Omit<Blog, 'id' | 'createdAt'>>;