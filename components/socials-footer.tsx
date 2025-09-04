"use client";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SocialsFoooter() {
  return (
    <div className="flex justify-center gap-4 p-4">
      <a
        href="https://github.com/Abraham-Moncherry"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="ghost" className="size-10">
          <Github className="size-7" strokeWidth={1.5} />
        </Button>
      </a>
      <a
        href="https://www.linkedin.com/in/abrahammoncherry/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="ghost" className="size-10">
          <Linkedin className="size-7" strokeWidth={1.5} />
        </Button>
      </a>
      <a href="mailto:abraham.m.moncherry@gmail.com">
        <Button variant="ghost" className="size-10">
          <Mail className="size-7" strokeWidth={1.5} />
        </Button>
      </a>
    </div>
  );
}
