const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="text-[#ffffff] border-2 border-[#4169E1] bg-[#000080] bg-gradient-to-r from-[#000080] via-[#4169E1] to-blue-[#000080] font-popppins font-bold text-[18px] sm:text-lg md:text-[24px] px-6 py-3 sm:px-10 sm:py-[18px] w-fit rounded-full hover:bg-white hover:text-black transition-all duration-300 ease-in-out cursor-pointer">
      {children}
    </button>
  );
};

export default Button;
