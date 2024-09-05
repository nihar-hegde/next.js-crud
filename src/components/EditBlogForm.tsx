"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { updatePost } from "@/lib/actions/api";

interface Post {
  id: string;
  title: string;
  body: string;
}

export default function EditPostForm({ post }: { post: Post }) {
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await updatePost(post.id, title, body);
      router.push(`/`);
      router.refresh(); // This will cause the page to re-render with the new data
    } catch (error) {
      console.error("Error updating post:", error);
      // Here you would typically show an error message to the user
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Title
        </label>
        <Input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="mt-1"
        />
      </div>
      <div>
        <label
          htmlFor="body"
          className="block text-sm font-medium text-gray-700"
        >
          Content
        </label>
        <Textarea
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          className="mt-1"
          rows={5}
        />
      </div>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Updating..." : "Update Post"}
      </Button>
    </form>
  );
}
