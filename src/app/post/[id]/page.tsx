import BlogContent from "@/components/BlogContent";
import CommentsList from "@/components/CommentList";
import DeletePostButton from "@/components/DeleteBlogButton";
import { Button } from "@/components/ui/button";
import { getComments, getPost } from "@/lib/actions/api";
import Link from "next/link";
import React, { Suspense } from "react";

const BlogPage = ({ params }: { params: { id: string } }) => {
  const postPromise = getPost(params.id);
  const commentsPromise = getComments(params.id);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Suspense fallback={<div>Loading post...</div>}>
        <BlogContent promise={postPromise} />
      </Suspense>

      <div className="flex space-x-4 mb-8">
        <Link href={`/edit/${params.id}`} passHref>
          <Button variant="outline">Edit Post</Button>
        </Link>
        <DeletePostButton postId={params.id} />
      </div>

      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      <Suspense fallback={<div>Loading comments...</div>}>
        <CommentsList promise={commentsPromise} />
      </Suspense>
    </div>
  );
};

export default BlogPage;
