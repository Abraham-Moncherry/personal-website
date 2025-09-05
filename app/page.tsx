import { Conversation } from "@/components/conversation";
import Orb from "@/components/ui/Orb";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="w-full items-center justify-center text-sm">
        <div style={{ width: "100%", height: "600px", position: "relative" }}>
          <Orb
            hoverIntensity={1}
            rotateOnHover={true}
            hue={260}
            forceHoverState={false}
          >
            <h2 className="text-xs md:text-3xl mb-4 md:mb-8 text-center">
              Chat with Selina
            </h2>
            <div className="scale-50 md:scale-100">
              <Conversation />
            </div>
          </Orb>
        </div>
      </div>
    </main>
  );
}
