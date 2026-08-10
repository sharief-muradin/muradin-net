import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <span className="font-bold text-xl">Muradin.net</span>
        <div className="space-x-6">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/over" className="hover:text-gray-300">
            Over ons
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}