const icons = [
    { name: "circle", type: "stroke" },
    { name: "linkedin" },
    { name: "facebook" },
    { name: "github" },
    { name: "help" },
  ];
  
  const SocialIcons = () => (
    <div className="flex gap-4 items-center">
      {icons.map((icon, i) => (
        <button key={i} className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
          {icon.name}
        </button>
      ))}
    </div>
  );
  
  export default SocialIcons;
  