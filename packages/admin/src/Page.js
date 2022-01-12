import React from 'react';

export default function Page({ title, text, img1, img2, img3 }) {
  return (
    <div>
      <h1 className='border-b-4 border-blue-700 text-4xl font-bold'>{title}</h1>
      <p className='mt-5'>{text}</p>
      <div className='grid grid-cols-3 gap-3 mt-5'>
        {[img1, img2, img3].filter(Boolean).map((img, idx) => (
          <img
            key={idx}
            src={img}
            className='w-full h-full object-center object-cover lg:w-full lg:h-full'
          />
        ))}
      </div>
    </div>
  );
}
