import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      
      {/* Hero Section */}
      <div className="text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to <span className="text-blue-600">Aray Mo</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          A modern Next.js app styled with Tailwind CSS
        </p>

        {/* Example Image */}
        <div className="relative w-48 h-48 mx-auto mb-6">
          <Image 
            src="/logo.png"   // replace with your image path in /public
            alt="App Logo"
            fill
            className="object-contain rounded-lg shadow-md"
          />
        </div>

        {/* Call to Action */}
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    </main>
  );
}
