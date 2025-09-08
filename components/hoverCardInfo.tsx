"use client";

import { useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Spinner } from "@/components/ui/spinner";

export function HoverCardInfo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HoverCard open={isOpen} onOpenChange={setIsOpen}>
      <HoverCardTrigger asChild>
        <Button
          variant="link"
          className="px-1 font-bold hover:underline focus-visible:ring-2 focus-visible:ring-offset-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <b>Abraham Moncherry</b>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-90">
        <div className="flex justify-between gap-6">
          <Avatar className="h-24 w-24">
            <AvatarImage src="/Abraham.jpeg" alt="Abraham" />
            <AvatarFallback>
              <Spinner />
            </AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">aka: Batman</h4>
            <p className="text-sm">
              Lifts heavy things, runs for fun, and occasionally saves Gotham on
              weekends.
            </p>
            <div className="text-muted-foreground text-xs">
              Established in 2002
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
