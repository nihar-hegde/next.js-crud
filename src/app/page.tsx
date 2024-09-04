// page.tsx
import BlogPostList from "@/components/BlogPosts/BlogPostList";

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page =
    typeof searchParams.page === "string" ? parseInt(searchParams.page, 10) : 1;

  return (
    <main className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Blog Post Management
      </h1>
      <BlogPostList page={page} />
    </main>
  );
}
