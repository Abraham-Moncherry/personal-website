"use client";

import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";

type FeedItem = {
  title: string;
  link: string;
  pubDate?: string;
  snippet?: string;
};

export function MediumFeedWrapper() {
  const [items, setItems] = useState<FeedItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const response = await fetch("/api/medium-feed");
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        setItems(data.items || []);
      } catch (error) {
        console.error("Failed to fetch Medium RSS feed:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeed();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center">
        <div className="text-center text-muted-foreground">
          Loading articles...
        </div>
      </div>
    );
  }

  if (!items.length) {
    return (
      <div className="flex justify-center">
        <div className="text-center text-muted-foreground">
          Unable to load blog posts at the moment.
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <div className="grid gap-6 md:grid-cols-3 max-w-7xl">
        {items.map((item, i) => (
          <article
            key={i}
            className="rounded-2xl border border-border p-6 flex flex-col hover:border-violet-400/50 transition-colors"
          >
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
              {item.pubDate}
            </p>

            <h3 className="text-xl font-bold leading-snug mb-3 flex-grow">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-violet-400 transition-colors"
              >
                {item.title}
              </a>
            </h3>

            {item.snippet && (
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {item.snippet}
              </p>
            )}

            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors"
            >
              Read more
              <ExternalLink className="w-4 h-4" />
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
