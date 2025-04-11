import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const Header = () => {
  return (
    <header className="h-20 bg-linear-to-r from-[#05071E] via-[#000080] to-[#111A89] bg-[length:145%_400%] shadow-md shadow-[#05071E]">
      <div className="container mx-auto flex items-center justify-between px-10 py-8 h-full">
        <div className="text-white text-2xl font-bold w-[15%]">
          <a href="#home" className="hover:text-gray-300">
            <img
              src="/images/keysystem-logo.png"
              alt="logo"
              width={100}
              height={100}
              className="w-[184px] h-[50.4px] object-center object-cover"
            />
          </a>
        </div>
        <nav className="space-x-6 font-popppins font-normal leading-[26.97px] text-[22px] text-[#CFCFCF] w-[60%] flex items-center justify-center">
          <a href="#home" className="text-white hover:text-gray-300">
            Home
          </a>
          <a href="#about" className="text-white hover:text-gray-300">
            About Us
          </a>
          <a
            href="#services"
            className="text-white hover:text-gray-300 flex items-center gap-1"
          >
            Services
            <i>
              <MdOutlineKeyboardArrowDown className="" />
            </i>
          </a>
          <a href="#contact" className="text-white hover:text-gray-300">
            Contact
          </a>
        </nav>
        <div className="w-[20%] flex items-center justify-end">
          <button
            type="button"
            className="border-2 border-[#4169E1] bg-[#000080] bg-gradient-to-r from-[#000080] via-[#4169E1] to-blue-[#000080] font-popppins font-bold text-[16.26px] px-[27.1px] py-[12.2px] w-fit rounded-full text-[#fff] hover:bg-white hover:text-black transition-all duration-300 ease-in-out  cursor-pointer"
          >
            +234 818 444 1404
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
