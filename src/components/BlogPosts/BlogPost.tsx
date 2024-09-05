// BlogPost.tsx
import { getPosts } from "@/lib/actions/api";
import PaginationControls from "./PaginationControls";
import BlogPostCard from "./BlogPostCard";
import { Post } from "@/lib/types";

export default async function BlogPosts({
  page = 1,
  perPage = 9,
}: {
  page: number;
  perPage?: number;
}) {
  const { posts, totalPosts } = await getPosts(page, perPage);
  const totalPages = Math.ceil(totalPosts / perPage);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {posts.map((post: Post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
      <PaginationControls currentPage={page} totalPages={totalPages} />
    </>
  );
}
