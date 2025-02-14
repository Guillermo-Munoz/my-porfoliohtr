"use client"; // Asegúrate de que este componente sea un Client Component
import React, { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false); // Estado para "Leer más"

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <main>
      {/* Cabecera / Menú */}
      <header className="bg-gray-900 text-white shadow-md fixed top-0 left-0 w-full z-50">
        <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo  */}
          <div className="text-2xl font-semibold">
            <Link href="/" className="hover:text-yellow-300">Mi Portafolio</Link>
          </div>

          {/* Menú para pantallas grandes */}
          <nav className="md:flex space-x-6 hidden">
            <Link href="#sobre-mi" className="hover:text-yellow-300">Sobre mí</Link>
            <Link href="#proyectos" className="hover:text-yellow-300">Proyectos</Link>
            <Link href="#contacto" className="hover:text-yellow-300">Contacto</Link>
          </nav>

          {/* Icono para menú en móvil */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-3xl cursor-pointer">
              ☰
            </button>
          </div>
        </div>

        {/* Menú desplegable para móviles */}
        <div
          className={`md:hidden bg-gray-900 text-white fixed top-16 left-0 w-full transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
        >
          <nav className="flex flex-col space-y-4 p-6">
            <Link href="#sobre-mi" className="hover:text-yellow-300">Sobre mí</Link>
            <Link href="#proyectos" className="hover:text-yellow-300">Proyectos</Link>
            <Link href="#contacto" className="hover:text-yellow-300">Contacto</Link>
          </nav>
        </div>
      </header>

      {/* Fondo de gradiente para toda la página */}
      <div className="flex pt-28  flex-col items-center justify-center h-full bg-no-repeat bg-cover bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        {/* Sección de luces de fondo */}
        <div className="absolute inset-0 z-0 ">
          <div className="absolute top-[30px] left-[300px] w-[500px] h-[500px] bg-cyan-400 rounded-full blur-[100px] opacity-30"></div>
          <div className="absolute top-[200px] left-[1100px] w-[500px] h-[500px] bg-blue-500 rounded-full blur-[100px] opacity-40"></div>
          <div className="absolute bottom-5 top-[200px] left-[300px] w-[500px] h-[500px] bg-blue-400 rounded-full blur-[100px] opacity-10"></div>
        </div>

        {/* Sección con video de fondo */}
        <section className="relative top-20 flex items-center justify-center w-full max-w-screen-xl mx-auto h-[550px] bg-black rounded-3xl overflow-hidden mb-16">
          <video
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover filter brightness-50 bg-opacity-50"
          >
            <source src="/media/bg.mp4" type="video/mp4" />
          </video>
          {/* Foto de portada */}

          <div className="relative max-w-[400px] max-h-[400px] z-10 flex items-center justify-center">
            <img src="/media/fp.png" alt="imagenPortada" className="relative z-10 object-cover w-full h-full rounded-lg filter grayscale" />

            {/* fondo de imagen */}
            <div className="absolute translate-x-12 inset-0 bg-yellow-300 clip-hexagon z-0 "></div>
          </div>
          <div className="relative z-10 flex items-center justify-center min-h-screen text-center text-white ">
            <div className="px-20 translate-x-12 rounded-xl text-left">
              <p className="text-white text-4xl font-bold mb-4 font-[family-name:var(--font-press-start-2p)]">Desarrollador web</p>
              <p className="text-2xl font-bold">
                <span className="text-white">Deja que tu idea cobre vida con un</span>
                <span className="text-yellow-300"> diseño innovador.</span>
              </p>
              <p className="text-white text-lg py-10">Genera valor a través de soluciones web innovadoras,
                fusionando diseño atractivo, tecnología avanzada y una experiencia de usuario superior</p>
            </div>
          </div>
        </section>

        {/* sobre mí */}
        <section id="sobre-mi" className="mt-16 py-16 pt-28 border-t-2 border-gray-700 w-full max-w-screen-xl mx-auto mb-16">
          <div className="text-left text-white bg-cover bg-gradient-to-br from-black-900 via-blue-900 to-black bg-opacity-90 p-6 sm:p-10 rounded-3xl">
            <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
            <p className="text-lg">
              ¡Hola a todos! Soy <span className="text-yellow-300 font-semibold">Guillermo</span>, un <span className="font-semibold">desarrollador web</span> apasionado por la <span className="text-yellow-300">tecnología</span> y el <span className="text-yellow-300">diseño</span>.
            </p>
            <p className="text-lg mt-4">
              Mi primer contacto con el mundo de la informática fue con un <span className="font-bold">amstrad cpc 464</span> y un <span className="font-bold">IBM PS/2</span> con discos de 5.25 pulgadas. Desde entonces, siempre me sentí atraído por la tecnología y el mundo digital. Sin embargo, decidí estudiar <span className="font-semibold">electrónica</span> y trabajé en varios sectores durante varios años, explorando diferentes facetas del mundo profesional.
            </p>

            {/* Contenido adicional: visible en pantallas grandes, condicional en pantallas pequeñas */}
            <div className={`${isExpanded ? 'block' : 'hidden'} md:block`}>
              <p className="text-lg mt-4">
                Después de algún tiempo, decidí retomar mi carrera en el mundo de la informática. Fue entonces cuando me sumergí de lleno en el mundo de la <span className="font-semibold">programación</span> y obtuve mi título de <span className="font-semibold">Desarrollo de Aplicaciones Web (DAW)</span>.
              </p>
              <p className="text-lg mt-4">
                Actualmente, estoy explorando tecnologías avanzadas como <span className="text-yellow-500 font-semibold">React</span>, <span className="text-yellow-500 font-semibold">Next.js</span>, <span className="text-yellow-500 font-semibold">Angular</span>, buscando constantemente maneras de mejorar mis habilidades y mantenerme al día con las últimas tendencias en desarrollo web. Mi objetivo es seguir creciendo como desarrollador y crear experiencias digitales innovadoras.
              </p>
            </div>

            {/* Botón "Leer más" solo en pantallas pequeñas */}
            <div className="md:hidden">
              <button
                onClick={toggleExpand}
                className="mt-4 text-yellow-300 font-semibold hover:underline"
              >
                {isExpanded ? "Leer menos" : "Leer más"}
              </button>
            </div>
          </div>
        </section>

        {/* Porfolio */}
        <section id="proyectos" className="mt-16 pt-28 py-16 border-t-2 border-gray-700 w-full max-w-screen-xl mx-auto mb-16">
          <div className="text-left text-white  p-10 rounded-3xl h-[1200px]">
            <div className="text-center text-white mb-12">
              <h2 className="text-3xl font-bold mb-4">Mis Proyectos</h2>
              <p className="text-lg">Aquí algunos ejemplos de proyectos web que he creado. Cada uno refleja mi enfoque en el diseño y la funcionalidad.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Link href="https://okmovil.net/" className="block">
                  <img src="/media/projects/Okmovil.webp" alt="Proyecto 3" className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110 hover:rotate-3 hover:brightness-90" />
                </Link>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-yellow-300">Proyecto 1</h3>
                  <p className="text-gray-400 mt-2">Traspaso y mantenimiento de web de proveedor de internet y telefonía.</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Link href="https://casapepepuertosherry.es/" className="block">
                  <img src="/media/projects/restaurante.webp" alt="Proyecto 2" className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110 hover:rotate-3 hover:brightness-90" />
                </Link>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-yellow-300">Proyecto 2</h3>
                  <p className="text-gray-400 mt-2">Web para restaurantes con Wordpress. Diseño personalizado y adaptado a móviles. Optimizada para SEO y velocidad de carga.</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Link href="https://asadorvarela.es/" className="block">
                  <img src="/media/projects/asador.webp" alt="Proyecto 3" className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110 hover:rotate-3 hover:brightness-90" />
                </Link>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-yellow-300">Proyecto 3</h3>
                  <p className="text-gray-400 mt-2">Web para asador. Diseño personalizado y adaptado a móviles. Optimizada para SEO y velocidad de carga.</p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Link href="https://protecciondelsur.com/" className="block">
                  <img src="/media/projects/vigilancia.webp" alt="Proyecto 4" className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110 hover:rotate-3 hover:brightness-90" />
                </Link>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-yellow-300">Proyecto 4</h3>
                  <p className="text-gray-400 mt-2">Web para empresa de seguridad. Diseño personalizado y adaptado a móviles. Optimizada para SEO y velocidad de carga.</p>
                </div>
              </div>

              {/* Card 5 */}
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Link href="https://elpuertodistribuciones.es/" className="block">
                  <img src="/media/projects/distribuciones.webp" alt="Proyecto 5" className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110 hover:rotate-3 hover:brightness-90" />
                </Link>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-yellow-300">Proyecto 5</h3>
                  <p className="text-gray-400 mt-2">Web para asador. Diseño personalizado y adaptado a móviles. Optimizada para SEO y velocidad de carga</p>
                </div>
              </div>

              {/* Card 6 */}
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Link href="https://github.com/Guillermo-Munoz/HUERTAONLINE.git" className="block">
                  <img src="/media/projects/huerta.webp" alt="Proyecto 6" className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110 hover:rotate-3 hover:brightness-90" />
                </Link>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-yellow-300">Proyecto 6</h3>
                  <p className="text-gray-400 mt-2">Aplicación ventas de productos hortícolas, creada con Laravel y PHP.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Footer */}
      <footer id="contacto" className="bg-gray-900 text-white py-8 border-t-2 border-gray-700">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Columna 1: Información de contacto */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold mb-4">Contacto</h3>
              <p className="text-gray-400">Email: info@mudev.es</p>
              <p className="text-gray-400">Teléfono: +34 --- --- ---</p>
              <p className="text-gray-400">Ubicación: España</p>
            </div>

            {/* Columna 2: Enlaces rápidos */}
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Enlaces rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#sobre-mi" className="text-gray-400 hover:text-yellow-300">Sobre mí</Link>
                </li>
                <li>
                  <Link href="#proyectos" className="text-gray-400 hover:text-yellow-300">Proyectos</Link>
                </li>
                <li>
                  <Link href="#contacto" className="text-gray-400 hover:text-yellow-300">Contacto</Link>
                </li>
              </ul>
            </div>

            {/* Columna 3: Redes sociales */}
            <div className="text-center md:text-right">
              <h3 className="text-xl font-semibold mb-4">Redes sociales</h3>
              <div className="flex justify-center md:justify-end space-x-4">
                <Link href="https://github.com/Guillermo-Munoz" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.85.832.088-.647.34-1.088.618-1.338-2.14-.243-4.391-1.07-4.391-4.768 0-1.054.375-1.915.993-2.588-.1-.243-.446-1.224.094-2.538 0 0 .812-.258 2.65.986A9.29 9.29 0 0112 6.584c.82.004 1.641.111 2.407.325 1.838-1.244 2.65-.986 2.65-.986.54 1.314.194 2.295.094 2.538.618.673.993 1.534.993 2.588 0 3.707-2.261 4.524-4.415 4.782.347.298.654.692.654 1.393 0 1.011-.01 1.825-.01 2.073 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link href="https://www.linkedin.com/in/guillermoDev-/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </Link>

              </div>
            </div>
          </div>

          {/* Derechos de autor */}
          <div className="text-center mt-8 border-t border-gray-700 pt-6">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Guillermo Muñoz. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}