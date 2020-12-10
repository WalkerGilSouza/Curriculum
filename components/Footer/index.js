import React from 'react'

const Footer = () => {
  return (
    <div className='grid grid-cols-3 py-4 sm:py-8 px-8 sm:px-24'>
      <div className='md:flex md:flex-grow-0 text-lg sm:text-3xl md:items-center'>
        <p className='font-bold pr-2'>Walker Gil</p><p> de Souza</p>
      </div>
      <div className='md:flex md:flex-grow text-xs text-white md:items-center'>
        <p className='text-center sm:pl-12'>@ 2020 produzido por Walker Gil de Souza</p>
      </div>
      <div className='grid grid-cols-4 sm:grid-cols-8 md:justify-items-end'>
        <img className='md:flex md:flex-grow col-end-8' src='/linkedin-official.png' />
        <img className='md:flex md:flex-grow col-end-9 col-span-1' src='/github-official.png' />
      </div>
    </div>
  )
}
export default Footer