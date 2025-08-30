const Header = () => {
  return (
    <header>
      <a href="/">
        <div className="inline-flex items-center gap-4">
          <img
            src="../public/logo-removebg-preview.png"
            alt="Starbucks-Logo"
            className="h-16 transition-transform group-hover:scale-105 group-hover:-rotate-6 md:h-20 lg:h-24"
          />
          <p className="text-lg font-semibold text-white">Starbucks</p>
        </div>
      </a>
      <div className="mt-6">
        <h1 className="text-lg font-bold text-[#FFD580]">
          Celebrate Golden Moments
        </h1>
        <p className="text-[#F8F5F2]">Sip, savor, and stay invigorated</p>
      </div>
    </header>
  );
};
export default Header;
