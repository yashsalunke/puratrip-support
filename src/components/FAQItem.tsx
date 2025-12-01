import React from 'react'
export default function FAQItem({question, answer}:{question:string; answer:string}){
  return (
    <div className="p-4 rounded-lg bg-white dark:bg-gray-900/40 border">
      <div className="font-semibold">{question}</div>
      <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">{answer}</div>
    </div>
  )
}