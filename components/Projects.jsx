const data = [
    {
      title: "Proyecto #1",
      img: "./images/dihy-care-logo.svg",
      desc: "DiHy Care es una aplicación web para monitorear diabetes e hipertensión.",
    },
    {
      title: "Proyecto #2",
      img: "./images/study-buddy-logo.svg",
      desc: "Study Buddy te ayuda a estudiar de manera más eficiente.",
    },
  ];
  
  const Projects = () => (
    <section id="projects" className="min-h-screen py-20 px-8 bg-[#F5F5DC]">
      <h2 className="text-5xl font-bold text-black mb-16 text-center">My Projects</h2>
  
      <div className="flex justify-center gap-8 flex-wrap max-w-7xl mx-auto">
        {data.map((p, i) => (
          <div key={i} className="w-[400px] flex flex-col gap-4">
            <div className="w-full h-[300px] bg-black rounded flex items-center justify-center p-8">
              <img src={p.img} className="w-full h-full object-contain" />
            </div>
            <h3 className="text-xl font-bold text-black">{p.title}</h3>
            <p className="text-sm text-black leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
  
  export default Projects;
  