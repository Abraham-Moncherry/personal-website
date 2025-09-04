import { Conversation } from "@/components/conversation";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="w-full items-center justify-center text-sm">
        <h1 className="text-4xl font-semibold mb-8 text-center">
          Have a chat with Selina
        </h1>
        <Conversation />
      </div>
    </main>
  );
}
