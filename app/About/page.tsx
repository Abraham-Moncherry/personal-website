import { HoverCardInfo } from "@/components/hoverCardInfo";
import TechStackCarousel from "@/components/TechStackCarousel";

export default async function Page() {
  return (
    <div className="flex flex-col min-h-[80vh]">
      <div className="flex-1 flex flex-col items-center justify-center px-4 md:px-8 py-8 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-12">About Me</h1>
        <div className="max-w-2xl text-center space-y-8">
          <section className="space-y-4">
            <p className="text-base md:text-lg leading-relaxed">
              Welcome! Hopefully, you've already had a chat with Selina, my
              professional agent built using RAG. She knows almost everything
              about my professional life (I had to keep some secrets from her).
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              I'm <HoverCardInfo />, a 3rd-year Computer Science student at the
              University of Melbourne and currently working part-time as an AI
              Engineer at Heya Voice AI, where I create voice agents just like
              Selina.
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              I'm thrilled to be in the AI space and love experimenting with new
              technologies and tech stacks that could positively impact society.
            </p>
          </section>

          <div className="text-sm md:text-base text-gray-400 mt-8">
            Feel free to reach out through my socials or email down below.
          </div>
        </div>
      </div>

      <div className="mt-auto pb-8">
        <TechStackCarousel animationDuration={25} />
      </div>
    </div>
  );
}
