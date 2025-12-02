const skills = [
    "npm", "C#", "Python", "Linux", "GitHub", "HTML5", "CSS3", "React Native"
  ];
  
  const Skills = () => (
    <section id="about" className="min-h-screen py-20 px-8 bg-[#F5F5DC]">
      <h2 className="text-4xl font-bold text-black text-center mb-4">Herramientas y Habilidades</h2>
      <p className="text-center text-black mb-16">
        Durante mis años de estudio en ORT Belgrano aprendí varias herramientas.
      </p>
  
      <div className="grid grid-cols-4 gap-8 max-w-4xl mx-auto">
        {skills.map((s) => (
          <div key={s} className="flex flex-col items-center gap-2">
            <img src={`./images/${s.toLowerCase()}-logo.svg`} className="w-20 h-20" />
            <span className="text-sm text-black">{s}</span>
          </div>
        ))}
      </div>
    </section>
  );
  
  export default Skills;
  