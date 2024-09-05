"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { deletePost } from "@/lib/actions/api";
import { toast } from "sonner";

export default function DeletePostButton({ postId }: { postId: string }) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const data = await deletePost(postId);
      toast.warning("Post deleted successfully!", {
        description: `Post with ID: ${data.id} deleted successfully!`,
      });
      router.push("/");
    } catch (error) {
      console.error("Error deleting post:", error);
      toast.error("Error deleting post!");
    }
  };

  return (
    <>
      <Button variant="destructive" onClick={() => setIsDeleteModalOpen(true)}>
        Delete Post
      </Button>

      <AlertDialog open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure you want to delete this post?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              post.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
