"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createPost } from "@/lib/actions/api";

export default function CreatePostForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const userId = 1; // User id is 1 always on jsonplace holder.
      const newPost = await createPost(title, body, userId);
      router.push(`/`);
    } catch (error) {
      console.error("Error creating post:", error);
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
        {isSubmitting ? "Creating..." : "Create Post"}
      </Button>
    </form>
  );
}
