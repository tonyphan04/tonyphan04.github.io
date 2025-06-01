import React, { useState, useEffect } from "react";

interface BlogFormProps {
  initialData?: {
    title: string;
    content: string;
    author: string;
    tags?: string[];
  };
  onSubmit: (data: {
    title: string;
    content: string;
    author: string;
    tags?: string[];
  }) => void;
  submitLabel: string;
}

const BlogForm: React.FC<BlogFormProps> = ({
  initialData,
  onSubmit,
  submitLabel,
}) => {
  const [title, setTitle] = useState(initialData?.title || "");
  const [content, setContent] = useState(initialData?.content || "");
  const [author, setAuthor] = useState(initialData?.author || "");
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setContent(initialData.content);
      setAuthor(initialData.author);
      setTags(initialData.tags || []);
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, content, author, tags });
    setTitle("");
    setContent("");
    setAuthor("");
    setTags([]);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "content":
        setContent(value);
        break;
      case "author":
        setAuthor(value);
        break;
      case "tags":
        setTags(value.split(",").map((tag) => tag.trim()));
        break;
      default:
        break;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        value={title}
        onChange={handleChange}
        required
      />
      <input
        placeholder="Author"
        value={author}
        onChange={handleChange}
        required
      />
      <input
        placeholder="Tags"
        value={tags.join(", ")}
        onChange={handleChange}
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={handleChange}
        required
      />
      <button type="submit">{submitLabel}</button>
    </form>
  );
};

export default BlogForm;
