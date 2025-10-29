
import { useState } from 'react';
import { MapPin, Phone, Mail, Home, Search, MessageCircle, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function App() {
  const [query, setQuery] = useState('');
  const properties = [
    { id: 1, title: 'Villas at just 10 min from KIA Bengaluru', location: 'Bengaluru Airport Area', price: '₹4 Cr', image: 'https://images.unsplash.com/photo-1600585154206-0c4b3f1a1d5f', featured: true, description: 'Luxury living near the airport with world-class amenities.' },
    { id: 2, title: 'Farm Land in Bengaluru Outskirts', location: 'Bengaluru Outskirts', price: '₹50 L', image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae', featured: true, description: 'Perfect investment opportunity surrounded by nature.' }
  ];

  const filtered = properties.filter(
    p => p.title.toLowerCase().includes(query.toLowerCase()) || p.location.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-green-700 text-white p-6 text-center shadow-lg">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-bold">
          Shri Hiranmayee Properties
        </motion.h1>
        <p className="text-lg italic">Building your Intuition</p>
      </header>

      <div className="flex justify-center p-4">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search by title or location..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10 pr-4 py-2 border rounded-full w-full shadow-sm focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>

      <section className="p-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <motion.div key={p.id} whileHover={{ scale: 1.02 }} className="bg-white shadow-lg rounded-2xl overflow-hidden relative">
            {p.featured && (
              <div className="absolute top-3 left-3 bg-yellow-400 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-md">
                <Star size={14}/> Featured
              </div>
            )}
            <img src={p.image} alt={p.title} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-green-700 flex items-center gap-2"><Home size={20}/> {p.title}</h2>
              <p className="text-gray-600 flex items-center gap-2"><MapPin size={16}/> {p.location}</p>
              <p className="text-green-600 font-semibold mt-2">{p.price}</p>
              {p.description && <p className="text-sm text-gray-500 mt-2">{p.description}</p>}
            </div>
          </motion.div>
        ))}
      </section>

      <footer className="bg-green-700 text-white p-6 text-center space-y-2">
        <h3 className="text-xl font-semibold">Contact Us</h3>
        <p className="flex items-center justify-center gap-2"><Phone size={18}/> +91 7019615498</p>
        <p className="flex items-center justify-center gap-2"><Mail size={18}/> mnharishankara@gmail.com</p>
      </footer>

      <motion.a
        href="https://wa.me/917019615498"
        target="_blank"
        rel="noopener noreferrer"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
        className="fixed bottom-5 right-5 bg-green-600 hover:bg-green-500 text-white p-4 rounded-full shadow-lg"
      >
        <MessageCircle size={28} />
      </motion.a>
    </div>
  );
}
