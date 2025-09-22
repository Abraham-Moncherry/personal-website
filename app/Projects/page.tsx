import { MacWindow } from "@/components/MacWindow";
import Image from "next/image";

export default async function Page() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4 md:p-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        My Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-2 md:gap-y-2 md:gap-x-25 py-1 max-w-6xl w-full justify-items-center">
        <div className="hover:hover:scale-105">
          <a
            href="https://github.com/Abraham-Moncherry/personal-website"
            target="_blank"
            rel="noopener noreferrer"
            className="block space-y-1"
          >
            <MacWindow title={"Personal Website"}>
              <Image
                src="/personal-website.png"
                alt="Description"
                width={600}
                height={300}
              />
            </MacWindow>
            <p className="text-gray-600">
              A Next.js website with AI integration featuring Selina, my
              professional agent.
            </p>
          </a>
        </div>
        <div className="hover:hover:scale-105">
          <a
            href="https://github.com/Abraham-Moncherry/Facial-Recognition-Student-System"
            target="_blank"
            rel="noopener noreferrer"
            className="block space-y-1"
          >
            <MacWindow title={"Facial Recognition Student System"}>
              <Image
                src="/facial-recognition.png"
                alt="Description"
                width={600}
                height={300}
              />
            </MacWindow>
            <p className="text-gray-600 mt-4">
              Facial recognition system that identies students saved in the
              database and display student details.
            </p>
          </a>
        </div>
        <div className="hover:hover:scale-105">
          <a
            href="https://github.com/Abraham-Moncherry/Flapry-Bird"
            target="_blank"
            rel="noopener noreferrer"
            className="block space-y-1"
          >
            <MacWindow title={"Flarpy Bird"}>
              <Image
                src="/flarpyBird.png"
                alt="Flarpy Bird game"
                width={600}
                height={300}
              />
            </MacWindow>
            <p className="text-gray-600 mt-4">
              Flarpy Bird is a Flappy Bird-style game built in Unity.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
