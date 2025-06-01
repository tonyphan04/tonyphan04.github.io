import { Blog } from '../models/blog';
import { v4 as uuidv4 } from 'uuid';

export class BlogService {
    private posts: Blog[] = [];

    public savePost(title: string, content: string, author: string): Blog {
        const newPost: Blog = {
            id: uuidv4(),
            title,
            content,
            author,
            tags: [],
            createdAt: new Date(),
        };
        this.posts.push(newPost);
        return newPost;
    }

    public fetchPosts(): Blog[] {
        return this.posts;
    }

    public fetchPostById(id: string): Blog | undefined {
        return this.posts.find(post => post.id === id);
    }

    public fetchPostsByTags(tags: string[]): Blog[] {
        return this.posts.filter(post => 
            post.tags.some(tag => tags.includes(tag))
        );
    }

    public modifyPost(id: string, updatedData: Partial<Blog>): Blog | undefined {
        const postIndex = this.posts.findIndex(post => post.id === id);
        if (postIndex !== -1) {
            this.posts[postIndex] = { ...this.posts[postIndex], ...updatedData };
            return this.posts[postIndex];
        }
        return undefined;
    }

    public removePost(id: string): boolean {
        const postIndex = this.posts.findIndex(post => post.id === id);
        if (postIndex !== -1) {
            this.posts.splice(postIndex, 1);
            return true;
        }
        return false;
    }
}