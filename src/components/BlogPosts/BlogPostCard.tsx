import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { Post } from "@/lib/types";

export default function BlogPostCard({ post }: { post: Post }) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {post.body}
        </p>
      </CardContent>
      <CardFooter>
        <Link
          className={buttonVariants({ variant: "outline" })}
          href={`/post/${post.id}`}
        >
          Read More
        </Link>
      </CardFooter>
    </Card>
  );
}
