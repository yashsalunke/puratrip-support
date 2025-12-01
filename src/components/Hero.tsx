import React from 'react';
export default function Hero(){
  return (
    <section className="grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h2 className="text-4xl md:text-5xl font-extrabold">PuraTrip — The Ultimate Collaborative Travel Companion</h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-xl">Plan, share, and settle expenses with ease. Designed for groups who want to focus on making memories — not managing logistics.</p>
      </div>
      <div className="rounded-2xl overflow-hidden shadow p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
        <div className="text-xs text-gray-500">Welcome, Yash</div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-white dark:bg-gray-900/60 border">Trips<div className="font-bold text-xl">3</div></div>
          <div className="p-4 rounded-lg bg-white dark:bg-gray-900/60 border">Photos<div className="font-bold text-xl">128</div></div>
        </div>
      </div>
    </section>
  )
}