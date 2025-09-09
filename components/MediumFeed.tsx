import Parser from "rss-parser";
import { div } from "three/tsl";

// Improved FeedItem type
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

// Helper to strip HTML tags
function stripHtml(html: string) {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// Helper to make a snippet
function makeSnippet(item: FeedItem, maxLen = 180) {
  const raw =
    item.contentSnippet ??
    (item.contentEncoded ? stripHtml(item.contentEncoded) : undefined) ??
    (item.content ? stripHtml(item.content) : undefined) ??
    "";
  if (raw.length <= maxLen) return raw;
  return raw.slice(0, maxLen).replace(/\s+\S*$/, "") + "…";
}

export default async function MediumFeed() {
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
  const items = feed.items.slice(0, 5);

  return (
    <div className="flex justify-center">
      <div className="grid gap-6 md:grid-cols-3 max-w-7xl">
        {items.map((item, i) => {
          const date = new Date(item.isoDate ?? item.pubDate ?? "");
          const author = item.creator ?? "Abraham Ming Moncherry";
          const snippet = makeSnippet(item);

          return (
            <article
              key={i}
              className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5"
            >
              <p className="text-neutral-500 mb-2">
                {isNaN(date.getTime())
                  ? ""
                  : date.toLocaleDateString("en-US", {
                      day: "2-digit",
                      month: "short",
                    })}
              </p>

              <h3 className="text-2xl font-semibold leading-snug mb-3">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-inherit"
                >
                  {item.title}
                </a>
              </h3>

              <p className="text-neutral-500 text-sm font-medium mb-3">
                {author}
              </p>

              {snippet && (
                <p className="text-neutral-700 text-sm dark:text-neutral-300 mb-4">
                  {snippet}
                </p>
              )}

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 rounded-xl text-sm font-medium bg-neutral-800 text-white hover:bg-neutral-600 transition"
              >
                Read more
              </a>
            </article>
          );
        })}
      </div>
    </div>
  );
}
