import React from "react";

interface Blog {
  _id: string;
  title: string;
  content: string;
  author: string;
  tags: string[];
  createdAt: Date;
}

interface BlogListProps {
  posts: Blog[];
  onEdit: (post: Blog) => void;
  onDelete: (id: string) => void;
}

const BlogList: React.FC<BlogListProps> = ({ posts, onEdit, onDelete }) => (
  <div>
    <h2>Blog Posts</h2>
    {posts.map((post) => (
      <div
        key={post._id}
        style={{ border: "1px solid #ccc", margin: 8, padding: 8 }}
      >
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <p>{post.tags}</p>
        <small>By {post.author}</small>
        <p>{post.createdAt.toLocaleString()}</p>
        <br />
        <button onClick={() => onEdit(post)}>Edit</button>
        <button onClick={() => onDelete(post._id)}>Delete</button>
      </div>
    ))}
  </div>
);

export default BlogList;
