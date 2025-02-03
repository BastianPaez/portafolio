import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="min-h-150 w-full bg-black relative flex justify-center mt-3" id='inicio'>
      <div className="text-white absolute inset-0 bg-[radial-gradient(circle,_rgba(128,0,128,0.5)_0%,_rgba(0,0,0,1)_80%)] py-10">
        <div className="md:flex gap-2 mx-auto max-w-3xl px-4">
          <div className="space-y-4">
            <h2 className="text-purple-500 text-4xl">Bastián Páez</h2>
            <p className="text-5xl">Desarrollador fullstack jr.</p>
            <p className="text-xl">
              Hola, un gusto. Soy un ingeniero en informática apasionado por el desarrollo web. Manejo tecnologías como React, Tailwind, Node.js y WordPress.
              Estoy en busca de formar parte de un equipo de trabajo donde pueda aportar mis conocimientos y seguir creciendo profesionalmente.
            </p>
            <div className="flex justify-center gap-5">
              <button className="bg-purple-600 hover:bg-purple-700 transition-colors duration-300 rounded text-center py-3 px-4 font-bold">
                Hablemos
              </button>
              <button className="border-3 border-purple-700 hover:bg-purple-700 transition-colors duration-300 rounded text-center py-3 px-4 font-bold">
                Curriculum
              </button>
            </div>
          </div>
          <div className="hidden md:block w-full">
            <img className="border-4 border-transparent shadow-lg shadow-pink-500/50 " src="/bastian.jpg" alt="imagen bastian paez" />
          </div>
        </div>

        <div className="flex justify-center mt-5 items-center py-4">
          <h3 className="text-white text-lg mr-2">Hecha un vistazo a mi </h3>
          <div className='flex gap-3'>
            <FaGithub
              className="text-white hover:text-purple-500 transition-colors duration-300 cursor-pointer text-4xl" 
            />
            <FaLinkedin
            className="text-white hover:text-purple-500 transition-colors duration-300 cursor-pointer text-4xl" 
            />
          </div>

        </div>
      </div>

    </header>
  )
}
