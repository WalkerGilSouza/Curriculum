import React from 'react'

const Index = () => {
  return (
    <div className='px-8 sm:px-52 pt-10 sm:pt-20'>
      <div className='grid md:grid-cols-2 gap-2 '>
        <div>
          <div className='box-border border-2 h-8 w-52 border-black bg-green-500 border-green-500 rounded-lg'>
            <p className='font-fonTexto  text-center'>Desenvolvedor FullStack</p>
          </div>
          <div>
            <p className='font-body text-2xl sm:text-3xl sm:text-5xl py-8'>
              Codificando ideias,<br />
              Renderizando Sonhos.
            </p>
            <p className='font-body1 text-lg sm:text-3xl text-gray-300'>
              Olá! Meu nome é Walker,<br />
              Sou desenvolvedor FullStack.
            </p>
            <p className='font-body1 text-base sm:text-2xl text-gray-400 py-4'>
              Comecei minha jornada como desenvolvedor<br />
              recentemente, buscando desenvolvimento<br />
              pleno nos estudos de tecnologias que estao<br />
              em alta no mercado como React, JavaScrypt,<br />
              NextJs, Css3, HTML5.
        </p>
          </div>
        </div>
        <div className='static'>
          <img className='absolute w-20 sm:w-36 right-12 bottom-0 sm:bottom-0 sm:left-3/4 bg-indigo-600 rounded-full' src='/react-logo.png' />
          <img className='absolute w-28 sm:w-48 bottom-0 sm:inset-y-2/4' src='/javaScript-logo.png' />
          <img className='md:flex' src='/fotoWalker.png' />
        </div>
      </div>
      <div className='font-body'><p className='text-2xl sm:text-4xl py-8 text-center'>Minha Formaçao</p></div>
      <div className='font-body grid grid-rows-2 sm:grid-rows-none sm:grid-col-6 gap-4 pb-8 '>
        <div className='pl-2 col-start-1 md:col-end-3 col-span-3 bg-gray-600 rounded-lg border-gray-600'>
          <p>GRADUAÇAO</p><br />
          <p>CIÊNCIA DA COMPUTAÇÃO - (trancado)</p>
          <p>CEUNSP-CENTRO UNIVERSITÁRIO N. Sra. DO PATROCÍNIO</p>
        </div>
        <div className='pl-2 font-body sm:col-end-7 col-span-3 bg-gray-600 rounded-lg border-gray-600'>
          <p>CURSOS</p><br />
          <p>FULLSTACK MASTER & DEV REACTJS</p>
          <p>DEV PLENO - devpleno.com</p>
        </div>
      </div>
    </div>
  )
}
export default Index
