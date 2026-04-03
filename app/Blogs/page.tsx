import MediumFeed from "@/components/MediumFeed";
import { SectionHeader } from "@/components/section-header";
import { ViewportReveal } from "@/components/viewport-reveal";

export const revalidate = 300;

export default async function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-24 md:py-32">
      <div className="w-full max-w-4xl">
        <SectionHeader
          label="Writing"
          title="Thoughts on AI & Technology"
          subtitle="Essays, explorations, and learnings from building in the AI space"
        />

        <ViewportReveal delay={0.3}>
          <MediumFeed />
        </ViewportReveal>
      </div>
    </main>
  );
}
