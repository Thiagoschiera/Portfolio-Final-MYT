const Header = () => (
    <header className="flex justify-between items-center p-8">
      <h1 className="text-2xl font-semibold text-black">Thiago Schiera</h1>
  
      <nav className="flex gap-6 items-center">
        {["About", "Blog", "Projects", "Photos"].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="text-black hover:underline">
            {item}
          </a>
        ))}
        <a href="#contact" className="text-black underline hover:no-underline">
          Schierathiago@gmail.com
        </a>
      </nav>
    </header>
  );
  
  export default Header;
  