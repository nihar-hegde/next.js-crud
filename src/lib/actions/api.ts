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
