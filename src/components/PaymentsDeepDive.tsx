import React from 'react'
export default function PaymentsDeepDive(){
  return (
    <section className="mt-12 bg-white dark:bg-gray-950/40 rounded-2xl p-8 border">
      <div className="md:flex md:items-start md:gap-8">
        <div className="md:w-1/2">
          <h4 className="text-xl font-bold">Payments — Simple, transparent & fair</h4>
          <p className="mt-3 text-gray-600 dark:text-gray-300">PuraTrip shows each traveler’s balance, who owes what, and provides an easy "Settle Up" flow for recording payments.</p>
          <ul className="mt-4 space-y-3 text-sm text-gray-600 dark:text-gray-300">
            <li>Color-coded balances (green = owed to you; red = you owe)</li>
            <li>Editable expense details for the creator of the expense</li>
            <li>Split with flexible selection, validation and error handling</li>
          </ul>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <div className="rounded-lg overflow-hidden border bg-gray-50 p-4">
            <div className="font-semibold mb-2">November 2025</div>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg bg-white border"><div><div className="text-sm font-semibold">Lunch — Beach Cafe</div><div className="text-xs text-gray-500">Alice • split 3</div></div><div className="font-semibold">₹ 1,260</div></div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-green-50 border"><div><div className="text-sm font-semibold">Train Tickets</div><div className="text-xs text-gray-500">Yash • split 4</div></div><div className="font-semibold">₹ 3,400</div></div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-white border"><div><div className="text-sm font-semibold">Settle Up — Payment</div><div className="text-xs text-gray-500">Bob • settlement</div></div><div className="font-semibold">₹ 2,000</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}