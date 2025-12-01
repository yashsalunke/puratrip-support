import React from 'react'
export default function Header(){
  return (
    <header className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950/40 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 flex items-center justify-center shadow-lg">PT</div>
          <div>
            <h1 className="text-lg font-semibold">PuraTrip</h1>
            <p className="text-xs text-gray-600 dark:text-gray-400">Collaborative Travel Companion</p>
          </div>
        </a>

        <nav className="hidden md:flex gap-6 items-center">
          <a href="#features" className="text-sm hover:underline">Features</a>
          <a href="#support" className="text-sm hover:underline">Support</a>
          <a href="https://play.google.com/store/apps/details?id=com.puratrip" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg">Get it on Google Play</a>
        </nav>
      </div>
    </header>
  )
}