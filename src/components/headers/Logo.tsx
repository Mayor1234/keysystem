const Logo = () => {
  return (
    <div className="w-fit max-w-[184px] overflow-hidden">
      <a href="#home" className="block hover:opacity-80 transition">
        <img
          src="/images/keysystem-logo.png"
          alt="KeySystem Logo"
          className="w-24 h-24 md:w-46 md:h-[50.4px] aspect-square object-contain object-center"
        />
      </a>
    </div>
  );
};

export default Logo;
