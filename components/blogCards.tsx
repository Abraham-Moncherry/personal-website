import * as React from "react";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type BlogPost = {
  title: string;
  preview: string;
  mediumUrl?: string; // Make mediumUrl optional
};

const blogPosts: BlogPost[] = [
  {
    title: "Recursion: the gift that keeps on calling itself",
    preview:
      "I was contemplating which course to take this semester when Declarative Programming caught my eye. It looked interesting… ",
    mediumUrl:
      "https://medium.com/@abraham.m.moncherry/recursion-the-gift-that-keeps-on-calling-itself-4c16ad83ab91",
  },
  {
    title: "Will write more",
    preview: "I promise...",
  },
  {
    title: "Coming Soon",
    preview: "Stay tuned for more exciting content...",
  },
];

export function BlogCards() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {blogPosts.map((post, index) => (
          <CarouselItem key={index}>
            {post.mediumUrl ? (
              <Link
                href={post.mediumUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                  <CardContent className="flex flex-col aspect-square items-center justify-center p-6 text-center">
                    <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {post.preview}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ) : (
              <Card>
                <CardContent className="flex flex-col aspect-square items-center justify-center p-6 text-center">
                  <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {post.preview}
                  </p>
                </CardContent>
              </Card>
            )}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
