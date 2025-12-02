import SocialIcons from "./SocialIcons";

const Landing = () => (
  <section className="min-h-screen flex flex-col">
    <Header />

    <div className="flex-1 flex items-center justify-center gap-16 px-8 py-12">
      <div className="w-[400px] h-[500px] bg-gray-200 rounded-lg overflow-hidden">
        <img src="./images/thiago-photo.svg" className="w-full h-full object-cover" />
      </div>

      <div className="flex-1 max-w-2xl">
        <div className="w-full h-24 bg-white mb-8 opacity-90 texture-banner" />

        <h2 className="text-4xl font-bold text-black mb-6 leading-relaxed">
          ¡Hola! soy <span className="font-bold">(Thiago Schiera)</span>, estudiante de ORT Belgrano TIC
        </h2>

        <p className="text-lg text-black mb-8 leading-relaxed">
          ¡Hola! soy <span className="font-bold">(Thiago Schiera)</span>, soy un estudiante de ORT Belgrano en la especialidad TIC
        </p>

        <SocialIcons />
      </div>
    </div>
  </section>
);

export default Landing;
