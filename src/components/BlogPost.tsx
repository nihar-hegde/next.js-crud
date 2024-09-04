"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { Pagination } from "@/components/ui/pagination";

import Link from "next/link";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export default function BlogPost() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const postsPerPage = 8;

  useEffect(() => {
    fetchPosts();
  }, [currentPage]);

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${postsPerPage}`
      );
      const data = await response.json();
      setPosts(data);
      setTotalPosts(Number(response.headers.get("X-Total-Count")));
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const totalPages = Math.ceil(totalPosts / postsPerPage);

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Blog Post Management
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {posts.map((post) => (
          <Card key={post.id} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-lg line-clamp-2">
                {post.title}
              </CardTitle>
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
        ))}
      </div>
      <div className="flex justify-center">
        <Pagination>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <div className="mx-4 flex items-center">
            Page {currentPage} of {totalPages}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              setCurrentPage((page) => Math.min(totalPages, page + 1))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </Pagination>
      </div>
    </div>
  );
}
