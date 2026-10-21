import React, { useState } from 'react';

export default function ProfileForm() {
  // Stan przechowujący dane z formularza
  const [formData, setFormData] = useState({
    username: '',
    bio: '',
    website: '',
    twitter: '',
  });

  // Funkcja aktualizująca stan przy wpisywaniu tekstu
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Obsługa wysyłania formularza
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dane wysyłane do bazy:', formData);
    alert('Profil został zapisany! (MVP pracuje)');
    // Tutaj w przyszłości wepniemy funkcję z Supabase/Firebase
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
        
        {/* Nagłówek */}
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-purple-600">
            Konfiguracja Profilu Twórcy
          </h2>
          <p className="text-slate-400 mt-2 text-sm">
            Przedstaw się społeczności i graczom. Te dane będą widoczne na Twojej stronie dewelopera.
          </p>
        </div>

        {/* Formularz */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Pole: Nazwa twórcy */}
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2">
              Nazwa Twórcy / Nazwa Studia *
            </label>
            <input
              type="text"
              name="username"
              required
              value={formData.username}
              onChange={handleChange}
              placeholder="np. PixelForge Games"
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
            />
          </div>

          {/* Pole: Bio */}
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2">
              O mnie / Biografia
            </label>
            <textarea
              name="bio"
              rows="4"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Napisz kilka słów o sobie, swoich inspiracjach lub grach, które tworzysz..."
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition resize-none"
            />
          </div>

          {/* Sekcja: Linki */}
          <div className="border-t border-slate-800 pt-6 space-y-4">
            <h3 className="text-md font-bold text-slate-400 uppercase tracking-wider text-xs">
              Linki i Social Media
            </h3>

            {/* Portfolio / Strona www */}
            <div>
              <label className="block text-xs text-slate-400 mb-1">Strona WWW / Portfolio</label>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="https://mojastrona.pl"
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500 text-sm"
              />
            </div>

            {/* Twitter / X */}
            <div>
              <label className="block text-xs text-slate-400 mb-1">Profil Twitter / X</label>
              <input
                type="url"
                name="twitter"
                value={formData.twitter}
                onChange={handleChange}
                placeholder="https://x.com"
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500 text-sm"
              />
            </div>
          </div>

          {/* Przycisk zapisu */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-purple-500/20 transition duration-200 cursor-pointer"
            >
              Zapisz i utwórz profil
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
