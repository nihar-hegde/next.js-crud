import React from "react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className=" shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800">
              Logo
            </Link>
          </div>
          <div>
            <Link href="/create" className={buttonVariants()}>
              Create new Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
