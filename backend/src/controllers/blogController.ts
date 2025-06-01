import { BlogService } from "../services/blogService";
import { Request, Response } from "express";

class BlogController {
    private blogService: BlogService;

    constructor(blogService: BlogService) {
        this.blogService = blogService;
    }

    async createPost(req: Request, res: Response): Promise<void> {
        try {
            const { title, content, author } = req.body;
            const post = await this.blogService.savePost(title, content, author);
            res.status(201).json(post);
        } catch (error) {
            res.status(500).json({ message: 'Error creating post', error });
        }
    }

    async getPosts(req: Request, res: Response): Promise<void> {
        try {
            const posts = await this.blogService.fetchPosts();
            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching posts', error });
        }
    }

    async getPostById(req: Request, res: Response): Promise<void> {
        try {
            const post = await this.blogService.fetchPostById(req.params.id);
            if (post) {
                res.status(200).json(post);
            } else {
                res.status(404).json({ message: 'Post not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error fetching post', error });
        }
    }

    async getPostsByTags(req: Request, res: Response): Promise<void> {
        try {
            const tags = req.query.tags ? (Array.isArray(req.query.tags) ? req.query.tags : [req.query.tags]) : [];
            const stringTags: string[] = tags.map(tag => String(tag));
            const posts = await this.blogService.fetchPostsByTags(stringTags);
            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching posts by tags', error });
        }
    }

    async updatePost(req: Request, res: Response): Promise<void> {
        try {
            const updatedPost = await this.blogService.modifyPost(req.params.id, req.body);
            if (updatedPost) {
                res.status(200).json(updatedPost);
            } else {
                res.status(404).json({ message: 'Post not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error updating post', error });
        }
    }

    async deletePost(req: Request, res: Response): Promise<void> {
        try {
            const deleted = await this.blogService.removePost(req.params.id);
            if (deleted) {
                res.status(204).send();
            } else {
                res.status(404).json({ message: 'Post not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error deleting post', error });
        }
    }
}

export default BlogController;