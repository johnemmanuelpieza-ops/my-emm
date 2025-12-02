export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Contact Page</h1>
        <p className="text-gray-600 mb-6">
          This is the contact page. Feel free to reach out!
        </p>

        {/* Example contact info */}
        <div className="space-y-2">
          <p className="text-gray-700">
            📧 Email: <span className="font-medium">contact@example.com</span>
          </p>
          <p className="text-gray-700">
            📞 Phone: <span className="font-medium">+123 456 7890</span>
          </p>
        </div>

        {/* Example button */}
        <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
          Send a Message
        </button>
      </div>
    </div>
  );
}