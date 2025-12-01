import React from 'react'
export default function FeatureCard({title, icon, description}:{title:string; icon:string; description:string}){
  return (
    <div className="p-6 rounded-2xl bg-white dark:bg-gray-900/50 border">
      <div className="flex items-center gap-4">
        <div className="text-2xl">{icon}</div>
        <div>
          <div className="font-semibold">{title}</div>
          <div className="text-sm text-gray-600 dark:text-gray-300">{description}</div>
        </div>
      </div>
    </div>
  )
}