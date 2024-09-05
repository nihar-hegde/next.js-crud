import { use } from "react";

interface Post {
  title: string;
  body: string;
}

export default function BlogContent({ promise }: { promise: Promise<Post> }) {
  const post = use(promise);
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="mb-4">{post.body}</p>
    </>
  );
}
