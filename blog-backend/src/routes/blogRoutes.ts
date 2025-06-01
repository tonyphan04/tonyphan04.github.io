import { Router } from 'express';
import BlogController from '../controllers/blogController';

const router = Router();
const blogController = new BlogController();

export function setBlogRoutes(app: Router) {
    app.post('/api/blog', blogController.createPost.bind(blogController));
    app.get('/api/blog', blogController.getPosts.bind(blogController));
    app.get('/api/blog/:id', blogController.getPostById.bind(blogController));
    app.put('/api/blog/:id', blogController.updatePost.bind(blogController));
    app.delete('/api/blog/:id', blogController.deletePost.bind(blogController));
}