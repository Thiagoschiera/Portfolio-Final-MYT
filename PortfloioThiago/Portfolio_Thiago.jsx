import React from 'react';

const Portfolio_Thiago = () => {
  return (
    <div className="overflow-y-scroll bg-[#F5F5DC] min-h-screen">
      {/* Sección Principal - Landing */}
      <section className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center p-8">
          <h1 className="text-2xl font-semibold text-black">Thiago Schiera</h1>
          <nav className="flex gap-6 items-center">
            <a href="#contact" className="text-black underline hover:no-underline">Schierathiago@gmail.com</a>
            <a href="#about" className="text-black hover:underline">About</a>
            <a href="#blog" className="text-black hover:underline">Blog</a>
            <a href="#projects" className="text-black hover:underline">Projects</a>
            <a href="#photos" className="text-black hover:underline">Photos</a>
          </nav>
        </header>

        {/* Contenido Principal */}
        <div className="flex-1 flex items-center justify-center gap-16 px-8 py-12">
          {/* Columna Izquierda - Foto */}
          <div className="w-[400px] h-[500px] bg-gray-200 flex items-center justify-center overflow-hidden rounded-lg">
            <img 
              src="./images/thiago-photo.svg" 
              alt="Thiago Schiera" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Columna Derecha - Texto e Iconos */}
          <div className="flex-1 max-w-2xl">
            {/* Banner Texturado */}
            <div className="w-full h-24 bg-white mb-8 opacity-90" style={{
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.03) 10px, rgba(0,0,0,0.03) 20px)'
            }}></div>

            {/* Texto de Introducción Grande */}
            <h2 className="text-4xl font-bold text-black mb-6 leading-relaxed">
              ¡Hola! soy <span className="font-bold">(Thiago Schiera)</span>, soy un estudiante de ORT Belgrano en la especialidad TIC
            </h2>

            {/* Texto de Introducción Pequeño */}
            <p className="text-lg text-black mb-8 leading-relaxed">
              ¡Hola! soy <span className="font-bold">(Thiago Schiera)</span>, soy un estudiante de ORT Belgrano en la especialidad TIC
            </p>

            {/* Iconos de Redes Sociales */}
            <div className="flex gap-4 items-center">
              <a href="#" className="w-8 h-8 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <circle cx="12" cy="12" r="3"/>
                  <circle cx="12" cy="12" r="1" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <text x="12" y="16" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">in</text>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <text x="12" y="16" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">f</text>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <text x="12" y="16" textAnchor="middle" fontSize="10" fill="currentColor" fontWeight="bold">?</text>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full h-24 bg-gray-200 mt-auto"></div>
      </section>

      {/* Sección de Proyectos */}
      <section id="projects" className="min-h-screen py-20 px-8 bg-[#F5F5DC]">
        <h2 className="text-5xl font-bold text-black mb-16 text-center">My Proyects</h2>
        
        <div className="flex justify-center gap-8 flex-wrap max-w-7xl mx-auto">
          {/* Proyecto 1 - DiHy Care */}
          <div className="w-[400px] flex flex-col gap-4">
            <div className="w-full h-[300px] bg-black rounded flex items-center justify-center p-8">
              <img 
                src="./images/dihy-care-logo.svg" 
                alt="DiHy Care Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-black">Proyecto #1</h3>
            <p className="text-sm text-black leading-relaxed">
              DiHy Care es una aplicación web que permite a los usuarios monitorear su estado en cuanto a la diabetes e Hipertension Arterial.
            </p>
          </div>

          {/* Proyecto 2 - Study Buddy */}
          <div className="w-[400px] flex flex-col gap-4">
            <div className="w-full h-[300px] rounded flex items-center justify-center p-8 relative overflow-hidden">
              <img 
                src="./images/study-buddy-logo.svg" 
                alt="Study Buddy Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-black">Proyecto #2</h3>
            <p className="text-sm text-black leading-relaxed">
            Study Buddy es una aplicación que permite a los estudiantes encontrar metodos de estudio para estudiar de manera mas eficiente.

            </p>
          </div>
        </div>
      </section>

      {/* Sección de Herramientas y Habilidades */}
      <section id="about" className="min-h-screen py-20 px-8 bg-[#F5F5DC]">
        {/* Paleta de Colores Superior */}
        <div className="flex justify-center gap-4 mb-12">
          <div className="w-32 h-32 bg-[#4A7C7E] rounded"></div>
          <div className="w-32 h-32 bg-[#A67C7C] rounded"></div>
          <div className="w-32 h-32 bg-[#6B6B6B] rounded"></div>
          <div className="w-32 h-32 bg-[#87CEEB] rounded"></div>
        </div>

        {/* Título */}
        <h2 className="text-4xl font-bold text-black text-center mb-4">Herramientas y Habilidades</h2>
        
        {/* Texto de Contexto */}
        <p className="text-center text-black mb-16">
            Durante mis años de estudio en ORT Belgrano, he aprendido a utilizar una variedad de herramientas y lenguajes de programación para crear proyectos propios.
        </p>

        {/* Grid de Herramientas */}
        <div className="max-w-4xl mx-auto grid grid-cols-4 gap-8">
          {/* npm */}
          <div className="flex flex-col items-center gap-2">
            <img src="./images/npm-logo.svg" alt="npm" className="w-20 h-20" />
            <span className="text-sm text-black">npm</span>
          </div>

          {/* C# */}
          <div className="flex flex-col items-center gap-2">
            <img src="./images/csharp-logo.svg" alt="C#" className="w-20 h-20" />
            <span className="text-sm text-black">C#</span>
          </div>

          {/* Python */}
          <div className="flex flex-col items-center gap-2">
            <img src="./images/python-logo.svg" alt="Python" className="w-20 h-20" />
            <span className="text-sm text-black">Python</span>
          </div>

          {/* Linux */}
          <div className="flex flex-col items-center gap-2">
            <img src="./images/linux-logo.svg" alt="Linux" className="w-20 h-20" />
            <span className="text-sm text-black">Linux</span>
          </div>

          {/* GitHub */}
          <div className="flex flex-col items-center gap-2">
            <img src="./images/github-logo.svg" alt="GitHub" className="w-20 h-20" />
            <span className="text-sm text-black">GitHub</span>
          </div>

          {/* HTML5 */}
          <div className="flex flex-col items-center gap-2">
            <img src="./images/html5-logo.svg" alt="HTML5" className="w-20 h-20" />
            <span className="text-sm text-black">HTML5</span>
          </div>

          {/* CSS3 */}
          <div className="flex flex-col items-center gap-2">
            <img src="./images/css3-logo.svg" alt="CSS3" className="w-20 h-20" />
            <span className="text-sm text-black">CSS3</span>
          </div>

          {/* React Native */}
          <div className="flex flex-col items-center gap-2">
            <img src="./images/react-native-logo.svg" alt="React Native" className="w-20 h-20" />
            <span className="text-sm text-black">React Native</span>
          </div>
        </div>
      </section>

      {/* Sección de Contacto */}
      <section id="contact" className="min-h-screen py-20 px-8 bg-[#F5F5DC] flex items-center justify-center">
        <div className="max-w-3xl w-full">
          <h2 className="text-4xl font-bold text-black text-center mb-4">¡Manda un mensaje!</h2>
          <p className="text-lg text-black text-center mb-12">
            Tenes alguna pregunta o proposicion? Adelante
          </p>

          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              {/* Nombre */}
              <div>
                <label className="block text-black mb-2 font-medium">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border-b-2 border-black bg-transparent py-2 px-1 focus:outline-none focus:border-[#4A7C7E] text-black placeholder-gray-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-black mb-2 font-medium">Your Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border-b-2 border-black bg-transparent py-2 px-1 focus:outline-none focus:border-[#4A7C7E] text-black placeholder-gray-500"
                />
              </div>
            </div>

            {/* Mensaje */}
            <div>
              <label className="block text-black mb-2 font-medium">Your Message</label>
              <textarea
                rows="6"
                placeholder="Hola, pienso que necesito un diseño o progrmaa ppara nuestra compania X, Que tan temprano podriamos juntarnos para discutirlo?"
                className="w-full border-b-2 border-black bg-transparent py-2 px-1 focus:outline-none focus:border-[#4A7C7E] text-black placeholder-gray-500 resize-none"
              ></textarea>
            </div>

            {/* Botón */}
            <div className="flex justify-center mt-8">
              <button
                type="submit"
                className="bg-gray-300 text-black px-12 py-3 rounded hover:bg-gray-400 transition-colors font-medium"
              >
                Boton
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Portfolio_Thiago;

