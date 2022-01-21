import React from 'react';

export default function Img({img, city}) {
  return (
    <div className='bg-image' style={{ maxWidth: '24rem' }}>
      <img src={img} className='img-fluid' alt='Sample' />
      <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        <div className='d-flex justify-content-center align-items-center h-100'>
          <p className='text-white mb-0'>{city}</p>
        </div>
      </div>
    </div>
  );
}