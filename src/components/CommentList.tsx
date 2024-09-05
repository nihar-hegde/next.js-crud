import { use } from "react";

interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}

export default function CommentsList({
  promise,
}: {
  promise: Promise<Comment[]>;
}) {
  const comments = use(promise);
  return (
    <>
      {comments.map((comment) => (
        <div key={comment.id} className="mb-4 p-4 bg-gray-100 rounded">
          <h3 className="font-bold">{comment.name}</h3>
          <p className="text-sm text-gray-600 mb-2">{comment.email}</p>
          <p>{comment.body}</p>
        </div>
      ))}
    </>
  );
}
