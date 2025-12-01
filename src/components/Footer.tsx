import React from 'react'
export default function Footer(){
  return (
    <footer className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8 pb-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-6">
        <div>
          <div className="font-semibold">PuraTrip</div>
          <div className="text-sm text-gray-600 dark:text-gray-300 mt-2">Collaborative Travel Companion — plan together, travel better.</div>
        </div>

        <div className="text-sm text-gray-600 dark:text-gray-300 flex flex-col md:items-end gap-2">
          <div>© 2025 PuraTrip</div>
          <a href="#privacy" className="hover:underline">Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}