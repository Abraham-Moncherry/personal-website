import { NextResponse } from "next/server";
import Parser from "rss-parser";

type FeedItem = {
  title: string;
  link: string;
  pubDate?: string;
  isoDate?: string;
  content?: string;
  contentSnippet?: string;
  creator?: string;
  contentEncoded?: string;
};

function stripHtml(html: string) {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function makeSnippet(item: FeedItem, maxLen = 180) {
  const raw =
    item.contentSnippet ??
    (item.contentEncoded ? stripHtml(item.contentEncoded) : undefined) ??
    (item.content ? stripHtml(item.content) : undefined) ??
    "";
  if (raw.length <= maxLen) return raw;
  return raw.slice(0, maxLen).replace(/\s+\S*$/, "") + "…";
}

export async function GET() {
  try {
    const parser = new Parser<{ items: FeedItem[] }>({
      customFields: {
        item: [
          ["dc:creator", "creator"],
          ["content:encoded", "contentEncoded"],
        ],
      },
    });

    const feed = await parser.parseURL(
      "https://medium.com/feed/@abraham.m.moncherry"
    );

    const items = feed.items.slice(0, 5).map((item) => {
      const date = new Date(item.isoDate ?? item.pubDate ?? "");
      return {
        title: item.title,
        link: item.link,
        pubDate: isNaN(date.getTime())
          ? ""
          : date.toLocaleDateString("en-US", {
              day: "2-digit",
              month: "short",
            }),
        snippet: makeSnippet(item),
      };
    });

    return NextResponse.json({ items });
  } catch (error) {
    console.error("Failed to fetch Medium RSS feed:", error);
    return NextResponse.json(
      { items: [], error: "Failed to fetch feed" },
      { status: 500 }
    );
  }
}
