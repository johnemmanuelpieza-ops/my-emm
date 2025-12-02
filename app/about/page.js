import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
        {/* Profile Image */}
        <div className="flex justify-center mb-4">
          <Image
            src="/image/1.jpg"
            width={150}
            height={150}nn
            className="rounded-full border-4 border-gray-200 shadow-md"
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-3">About Me</h1>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed">
          Welcome to the About Page. Here you can share more details about yourself, 
          your project, or your company. Add your mission, values, or story to make 
          this section engaging and personal.
        </p>
      </div>
    </div>
  );
}