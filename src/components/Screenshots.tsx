import React from 'react'
export default function Screenshots(){
  return (
    <section id="screenshots" className="mt-12">
      <h3 className="text-2xl font-bold">Screenshots</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-300">A quick visual tour — tap to open fullscreen in the app.</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="rounded-xl overflow-hidden border bg-white p-4"><div className="h-56 bg-gradient-to-br from-indigo-300 to-fuchsia-300 rounded-lg flex items-center justify-center">Mock: Onboarding</div></div>
        <div className="rounded-xl overflow-hidden border bg-white p-4"><div className="h-56 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-lg flex items-center justify-center">Mock: Photos Tab</div></div>
        <div className="rounded-xl overflow-hidden border bg-white p-4"><div className="h-56 bg-gradient-to-br from-green-300 to-teal-300 rounded-lg flex items-center justify-center">Mock: Payments Tab</div></div>
      </div>
    </section>
  )
}