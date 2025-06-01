import React, { useEffect, useState } from "react";
import { getPosts, createPost, updatePost, deletePost } from "../api/api";
import BlogForm from "../components/blog-form";
import BlogList from "../components/blog-list";

interface Blog {
  _id: string;
  title: string;
  content: string;
  author: string;
}

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<Blog[]>([]);
  const [editing, setEditing] = useState<Blog | null>(null);

  const fetchPosts = async () => {
    const res = await getPosts();
    setPosts(res.data as Blog[]);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleCreate = async (data: {
    title: string;
    content: string;
    author: string;
  }) => {
    await createPost(data);
    fetchPosts();
  };

  const handleEdit = (post: Blog) => setEditing(post);

  const handleUpdate = async (data: {
    title: string;
    content: string;
    author: string;
  }) => {
    if (editing) {
      await updatePost(editing._id, data);
      setEditing(null);
      fetchPosts();
    }
  };

  const handleDelete = async (id: string) => {
    await deletePost(id);
    fetchPosts();
  };

  return (
    <div>
      <h1>Blog CRUD</h1>
      <BlogForm
        initialData={editing || undefined}
        onSubmit={editing ? handleUpdate : handleCreate}
        submitLabel={editing ? "Update" : "Create"}
      />
      <BlogList posts={posts} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default BlogPage;
