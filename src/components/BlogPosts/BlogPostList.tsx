import { Suspense } from "react";
import BlogPostsSkeleton from "./BlogPostsSkeleton";
import BlogPosts from "./BlogPost";

export default function BlogPostList({ page }: { page: number }) {
  return (
    <Suspense fallback={<BlogPostsSkeleton />}>
      <BlogPosts page={page} />
    </Suspense>
  );
}
