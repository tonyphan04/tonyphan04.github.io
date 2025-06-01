import express from 'express';
import { setBlogRoutes } from './routes/blogRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

setBlogRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});