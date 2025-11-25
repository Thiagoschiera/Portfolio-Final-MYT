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
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop" 
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
              <div className="flex items-center gap-4">
                {/* Logo DiHy Care - Corazón con ECG */}
                <div className="relative">
                  <svg width="120" height="120" viewBox="0 0 120 120">
                    {/* Corazón con gradiente azul */}
                    <defs>
                      <linearGradient id="heartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#5B9BD5" />
                        <stop offset="100%" stopColor="#2E5C8A" />
                      </linearGradient>
                    </defs>
                    <path 
                      d="M60,30 C50,20 30,20 30,40 C30,50 40,60 60,80 C80,60 90,50 90,40 C90,20 70,20 60,30 Z" 
                      fill="url(#heartGradient)"
                    />
                    {/* Línea de ECG dentro del corazón */}
                    <path 
                      d="M25,60 L35,50 L40,55 L45,45 L50,50 L55,40 L60,50 L65,40 L70,50 L75,45 L80,50 L85,45 L95,60" 
                      stroke="black" 
                      strokeWidth="3" 
                      fill="none" 
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                {/* Texto DiHy Care */}
                <div className="flex flex-col">
                  <span className="text-[#2E5C8A] text-2xl font-bold">DiHy</span>
                  <span className="text-[#2E5C8A] text-2xl font-bold">Care</span>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-black">Proyecto #1</h3>
            <p className="text-sm text-black leading-relaxed">
              DiHy Care es una aplicación web que permite a los usuarios monitorear su estado en cuanto a la diabetes e Hipertension Arterial.
            </p>
          </div>

          {/* Proyecto 2 - Study Buddy */}
          <div className="w-[400px] flex flex-col gap-4">
            <div className="w-full h-[300px] rounded flex items-center justify-center p-8 relative overflow-hidden" style={{
              background: 'linear-gradient(to right, #4A90E2, #87CEEB)'
            }}>
              <div className="flex items-center gap-6">
                {/* Pingüino con libro */}
                <svg width="140" height="140" viewBox="0 0 140 140">
                  {/* Cuerpo del pingüino */}
                  <ellipse cx="70" cy="90" rx="35" ry="40" fill="black" />
                  <ellipse cx="70" cy="85" rx="30" ry="35" fill="white" />
                  
                  {/* Cabeza */}
                  <circle cx="70" cy="40" r="25" fill="black" />
                  <ellipse cx="70" cy="45" rx="20" ry="22" fill="white" />
                  
                  {/* Pico */}
                  <ellipse cx="70" cy="50" rx="8" ry="6" fill="#FF8C42" />
                  
                  {/* Anteojos */}
                  <circle cx="62" cy="42" r="6" fill="none" stroke="#4A90E2" strokeWidth="2" />
                  <circle cx="78" cy="42" r="6" fill="none" stroke="#4A90E2" strokeWidth="2" />
                  <line x1="68" y1="42" x2="72" y2="42" stroke="#4A90E2" strokeWidth="2" />
                  
                  {/* Patas */}
                  <ellipse cx="60" cy="125" rx="8" ry="6" fill="#FF8C42" />
                  <ellipse cx="80" cy="125" rx="8" ry="6" fill="#FF8C42" />
                  
                  {/* Libro */}
                  <rect x="45" y="70" width="30" height="25" rx="2" fill="#4A90E2" />
                  <rect x="47" y="72" width="26" height="21" fill="white" />
                  <line x1="60" y1="75" x2="60" y2="90" stroke="#4A90E2" strokeWidth="1" />
                </svg>
                
                {/* Texto STUDY BUDDY */}
                <div className="flex flex-col">
                  <span className="text-white text-3xl font-bold">STUDY</span>
                  <span className="text-white text-3xl font-bold">BUDDY</span>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-black">Proyecto #2</h3>
            <p className="text-sm text-black leading-relaxed">
            Study Buddy es una aplicación web que permite a los estudiantes encontrar compañeros de estudio para estudiar de manera mas eficiente.

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
            <div className="w-20 h-20 bg-[#CB3837] rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">npm</span>
            </div>
            <span className="text-sm text-black">npm</span>
          </div>

          {/* C# */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-20 h-20 rounded-lg flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: '#68217A' }}>
              <svg width="50" height="50" viewBox="0 0 50 50">
                {/* Hexágono */}
                <path d="M25,5 L40,12 L40,38 L25,45 L10,38 L10,12 Z" fill="#68217A"/>
                {/* C */}
                <text x="20" y="32" fill="white" fontSize="22" fontWeight="bold" fontFamily="Arial">C</text>
                {/* # con fondo más claro */}
                <rect x="28" y="15" width="12" height="20" fill="#8B4FA8" rx="1"/>
                <text x="34" y="32" fill="white" fontSize="16" fontWeight="bold" fontFamily="Arial">#</text>
              </svg>
            </div>
            <span className="text-sm text-black">C#</span>
          </div>

          {/* Python */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-20 h-20 bg-white rounded flex items-center justify-center border border-gray-200">
              <svg width="50" height="50" viewBox="0 0 50 50">
                {/* Serpiente azul (arriba) */}
                <ellipse cx="18" cy="18" rx="8" ry="6" fill="#3776AB"/>
                <ellipse cx="18" cy="18" rx="6" ry="4" fill="#4A9BD4"/>
                <circle cx="16" cy="17" r="1.5" fill="white"/>
                {/* Cuerpo serpiente azul */}
                <path d="M18,22 Q15,28 20,32 Q25,35 25,30" fill="#3776AB"/>
                {/* Serpiente amarilla (abajo) */}
                <ellipse cx="32" cy="32" rx="8" ry="6" fill="#FFD43B"/>
                <ellipse cx="32" cy="32" rx="6" ry="4" fill="#FFE873"/>
                <circle cx="34" cy="31" r="1.5" fill="white"/>
                {/* Cuerpo serpiente amarilla */}
                <path d="M32,28 Q35,22 30,18 Q25,15 25,20" fill="#FFD43B"/>
              </svg>
            </div>
            <span className="text-sm text-black">Python</span>
          </div>

          {/* Linux */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-20 h-20 bg-white rounded flex items-center justify-center">
              <svg width="50" height="50" viewBox="0 0 50 50">
                {/* Tux el pingüino */}
                <ellipse cx="25" cy="30" rx="12" ry="15" fill="black"/>
                <ellipse cx="25" cy="28" rx="10" ry="12" fill="white"/>
                <circle cx="25" cy="20" r="8" fill="black"/>
                <ellipse cx="25" cy="22" rx="6" ry="7" fill="white"/>
                <ellipse cx="25" cy="25" rx="3" ry="2" fill="#FFD700"/>
                <ellipse cx="22" cy="20" r="1.5" fill="white"/>
                <ellipse cx="28" cy="20" r="1.5" fill="white"/>
                <ellipse cx="20" cy="35" rx="3" ry="2" fill="#FFD700"/>
                <ellipse cx="30" cy="35" rx="3" ry="2" fill="#FFD700"/>
              </svg>
            </div>
            <span className="text-sm text-black">Linux</span>
          </div>

          {/* GitHub */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="white">
                {/* Cabeza del Octocat */}
                <circle cx="25" cy="20" r="9" fill="white"/>
                {/* Ojos */}
                <ellipse cx="21" cy="18" rx="2.5" ry="3" fill="black"/>
                <ellipse cx="29" cy="18" rx="2.5" ry="3" fill="black"/>
                {/* Sonrisa */}
                <path d="M21,23 Q25,26 29,23" stroke="black" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                {/* Tentáculo izquierdo */}
                <path d="M15,25 Q12,28 15,32 Q18,35 20,32" fill="white"/>
                <path d="M15,25 Q12,28 15,32 Q18,35 20,32" stroke="black" strokeWidth="0.5" fill="none"/>
              </svg>
            </div>
            <span className="text-sm text-black">GitHub</span>
          </div>

          {/* HTML5 */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-20 h-20 bg-white rounded flex items-center justify-center">
              <svg width="50" height="50" viewBox="0 0 50 50">
                <path d="M25,5 L40,8 L38,35 L25,40 L12,35 L10,8 Z" fill="#E34F26"/>
                <text x="25" y="30" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">5</text>
              </svg>
            </div>
            <span className="text-sm text-black">HTML5</span>
          </div>

          {/* CSS3 */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-20 h-20 bg-white rounded flex items-center justify-center">
              <svg width="50" height="50" viewBox="0 0 50 50">
                <path d="M25,5 L40,8 L38,35 L25,40 L12,35 L10,8 Z" fill="#1572B6"/>
                <text x="25" y="30" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">3</text>
              </svg>
            </div>
            <span className="text-sm text-black">CSS3</span>
          </div>

          {/* React Native */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-20 h-20 bg-white rounded flex items-center justify-center">
              <svg width="50" height="50" viewBox="0 0 50 50">
                {/* Átomo de React */}
                <circle cx="25" cy="25" r="4" fill="#61DAFB"/>
                <ellipse cx="25" cy="25" rx="20" ry="6" fill="none" stroke="#61DAFB" strokeWidth="2" opacity="0.8"/>
                <ellipse cx="25" cy="25" rx="20" ry="6" fill="none" stroke="#61DAFB" strokeWidth="2" opacity="0.8" transform="rotate(60 25 25)"/>
                <ellipse cx="25" cy="25" rx="20" ry="6" fill="none" stroke="#61DAFB" strokeWidth="2" opacity="0.8" transform="rotate(-60 25 25)"/>
              </svg>
            </div>
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

