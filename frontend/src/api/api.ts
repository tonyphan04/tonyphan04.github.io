import axios from "axios";

const API_URL = "http://localhost:3000/api/blog"; // Adjust if needed

export const getPosts = () => axios.get(API_URL);
export const getPost = (id: string) => axios.get(`${API_URL}/${id}`);
export const createPost = (data: { title: string; content: string; author: string }) =>
  axios.post(API_URL, data);
export const updatePost = (id: string, data: { title: string; content: string; author: string }) =>
  axios.put(`${API_URL}/${id}`, data);
export const deletePost = (id: string) => axios.delete(`${API_URL}/${id}`);