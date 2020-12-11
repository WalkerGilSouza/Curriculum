import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='grid grid-cols-3 py-4 sm:py-8 px-8 sm:px-24'>
      <div className='md:flex md:flex-grow-0 text-lg sm:text-3xl md:items-center'>
        <p className='font-bold pr-2'>Walker Gil</p><p> de Souza</p>
      </div>
      <div className='grid grid-cols-3'>
        <div className='md:col-start-2 md:flex md:flex-grow'>
          <Link href=''>
            <a className='text-white pr-1 sm:pr-4 hover:underline'>Work</a>
          </Link>
          <Link href=''>
            <a className='text-white hover:underline'>Contato</a>
          </Link>
        </div>
      </div>
      <div className='grid grid-cols-4 sm:grid-cols-8 md:justify-items-end '>
        <a className='md:flex md:flex-grow col-end-8' href='https://www.linkedin.com/in/walkergil'><img src='/linkedin-official.png' /></a>
        <a className='md:flex md:flex-grow col-end-9 col-span-1' href='https://github.com/WalkerGilSouza'><img src='/github-official.png' /></a>
      </div>
    </div>
  )
}
export default Header