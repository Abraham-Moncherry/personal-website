import { CalendarIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export function HoverCardInfo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">
          <b>Abraham Moncherry</b>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-90">
        <div className="flex justify-between gap-6">
          <Avatar className="h-24 w-24">
            <AvatarImage src="/Abraham.jpeg" alt="Abraham" />
            <AvatarFallback>VC</AvatarFallback>
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
