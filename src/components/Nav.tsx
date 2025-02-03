import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-5 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
        <div>
          <h1 className="text-3xl">Desarrollo Web</h1>
        </div>

        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex gap-5 text-lg item-center">
          <a
            href="#inicio"
            className="relative hover:text-purple-600 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-purple-600 after:transition-all after:duration-300 hover:after:w-full"
          >
            Inicio
          </a>
          <a
            href="#proyectos"
            className="relative hover:text-purple-600 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-purple-600 after:transition-all after:duration-300 hover:after:w-full"
          >
            Proyectos
          </a>
          <a
            href="#habilidades"
            className="relative hover:text-purple-600 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-purple-600 after:transition-all after:duration-300 hover:after:w-full"
          >
            Habilidades
          </a>
          <a
            href="#estudios"
            className="relative hover:text-purple-600 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-purple-600 after:transition-all after:duration-300 hover:after:w-full"
          >
            Estudios
          </a>
        </div>

        <div
          className={`lg:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}
        >
          <div className="flex justify-end p-5">
            <button
              onClick={() => setIsOpen(false)}
              className="text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center gap-5 text-lg text-white">
            <a
              href="#inicio"
              className="hover:text-purple-600 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </a>
            <a
              href="#proyectos"
              className="hover:text-purple-600 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Proyectos
            </a>
            <a
              href="#habilidades"
              className="hover:text-purple-600 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Habilidades
            </a>
            <a
              href="#estudios"
              className="hover:text-purple-600 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Estudios
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
