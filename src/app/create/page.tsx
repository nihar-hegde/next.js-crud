import CreatePostForm from "@/components/CreateBlog";
import React from "react";

const CreateBlogPostPage = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Create New Blog Post</h1>
      <CreatePostForm />
    </div>
  );
};
export default CreateBlogPostPage;
