import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Logo / Home */}
        <Link href="/" className="text-xl font-bold hover:text-gray-300">
          Home
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6">
          <Link href="/about" className="hover:text-gray-300 transition-colors">
            About
          </Link>
          <Link href="/contactt" className="hover:text-gray-300 transition-colors">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}