'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    naam: '',
    email: '',
    bericht: '',
  });
  const [verzonden, setVerzonden] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hier verwerk je normaal de data naar een database of e-mailservice
    setVerzonden(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Contact</h1>
        <p className="text-gray-600 mb-6">
          Stuur ons een bericht en we nemen zo snel mogelijk contact met je op.
        </p>

        {verzonden ? (
          <div className="p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg">
            <p className="font-semibold">Bedankt voor je bericht, {formData.naam}!</p>
            <p className="text-sm mt-1">We hebben je inzending ontvangen.</p>
            <button
              onClick={() => {
                setVerzonden(false);
                setFormData({ naam: '', email: '', bericht: '' });
              }}
              className="mt-4 text-sm text-green-700 underline hover:text-green-900"
            >
              Nog een bericht sturen
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="naam" className="block text-sm font-medium text-gray-700 mb-1">
                Naam
              </label>
              <input
                type="text"
                id="naam"
                name="naam"
                required
                value={formData.naam}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="Je naam"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                E-mailadres
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="naam@voorbeeld.nl"
              />
            </div>

            <div>
              <label htmlFor="bericht" className="block text-sm font-medium text-gray-700 mb-1">
                Bericht
              </label>
              <textarea
                id="bericht"
                name="bericht"
                rows={4}
                required
                value={formData.bericht}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="Typ hier je bericht..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition"
            >
              Verstuur bericht
            </button>
          </form>
        )}
      </div>
    </main>
  );
}