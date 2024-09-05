import EditPostForm from "@/components/EditBlogForm";
import { getPost } from "@/lib/actions/api";

export default async function EditBlogPostPage({
  params,
}: {
  params: { id: string };
}) {
  const post = await getPost(params.id);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Edit Blog Post</h1>
      <EditPostForm post={post} />
    </div>
  );
}
