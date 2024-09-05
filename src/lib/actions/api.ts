"use server";

import { Post } from "../types";

export async function getPosts(
  page: number,
  perPage: number
): Promise<{ posts: Post[]; totalPosts: number }> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${perPage}`
  );
  const posts: Post[] = await res.json();
  const totalPosts = Number(res.headers.get("X-Total-Count"));
  return { posts, totalPosts };
}

export async function getPost(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error("Failed to fetch post");
  return res.json();
}

export async function getComments(id: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) throw new Error("Failed to fetch comments");
  return res.json();
}

export async function deletePost(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete post");
  const data = await res.json();
  return data;
}

export async function createPost(title: string, body: string, userId: number) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title,
      body,
      userId,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  if (!res.ok) throw new Error("Failed to create post");
  const data = await res.json();
  console.log("data", data);
  return data;
}

export async function updatePost(id: string, title: string, body: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      id,
      title,
      body,
      userId: 1, // In a real app, you'd get this from the authenticated user
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  if (!res.ok) throw new Error("Failed to update post");
  const data = await res.json();
  return data;
}
