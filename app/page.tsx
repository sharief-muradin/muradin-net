import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Sectie */}
      <section className="bg-white border-b border-gray-200 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Welkom bij <span className="text-blue-600">Muradin.net</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Het vernieuwde platform voor al onze projecten, diensten en inzichten. Gebouwd voor snelheid en gebruiksgemak.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition"
            >
              Neem contact op
            </Link>
            <Link
              href="/over"
              className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition"
            >
              Lees meer
            </Link>
          </div>
        </div>
      </section>

      {/* Informatiekaarten */}
      <section className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Onze Pijlers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Snelheid</h3>
            <p className="text-gray-600 text-sm">
              Gebouwd met de nieuwste Next.js technologieën voor optimale prestaties.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Design</h3>
            <p className="text-gray-600 text-sm">
              Strak en responsief ontwerp dankzij Tailwind CSS.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Veiligheid</h3>
            <p className="text-gray-600 text-sm">
              Sterke TypeScript-basis voor een betrouwbare werking.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Muradin.net - Alle rechten voorbehouden.</p>
      </footer>
    </main>
  );
}