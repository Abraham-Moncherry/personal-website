export default async function Page() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4 md:p-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">My Projects</h1>
      <div className="max-w-2xl w-full text-center mb-8"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        <div className="p-6 border rounded-lg hover:shadow-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-shadow">
          <a
            href="https://github.com/Abraham-Moncherry/personal-website"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <h3 className="text-xl font-semibold mb-2">Personal Website</h3>
            <p className="text-gray-600">
              A Next.js website with AI integration featuring Selina, my
              professional agent.
            </p>
          </a>
        </div>
        <div className="p-6 border rounded-lg hover:shadow-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-shadow">
          <a
            href="https://github.com/Abraham-Moncherry/Facial-Recognition-Student-System"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <h3 className="text-xl font-semibold mb-2">
              Facial Recognition System
            </h3>
            <p className="text-gray-600">
              Facial recognition system that identies students saved in the
              database and display student details.
            </p>
          </a>
        </div>
        <div className="p-6 border rounded-lg hover:shadow-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-shadow">
          <a
            href="https://github.com/Abraham-Moncherry/Flapry-Bird"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <h3 className="text-xl font-semibold mb-2">Flarpy Bird</h3>
            <p className="text-gray-600">
              Flarpy Bird is a Flappy Bird-style game built in Unity.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
