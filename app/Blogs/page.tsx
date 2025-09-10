import MediumFeed from "@/components/MediumFeed";

// Revalidate every 5 minutes (300 seconds)
export const revalidate = 300;

export default async function Page() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 md:px-8 py-8 md:py-16">
      <MediumFeed />
    </div>
  );
}
