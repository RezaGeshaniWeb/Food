import React from 'react'

export default function notFound() {
  return (
    <div className='w-full h-[80vh] flex flex-col justify-center items-center'>
      <h2 className='text-6xl text-red-600 mb-8 italic'>404</h2>
      <h1 className='text-5xl capitalize'>not found page</h1>
    </div>
  )
}
