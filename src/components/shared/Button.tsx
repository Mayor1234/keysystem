const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    // <button className="text-white border-2 border-[#4169E1] outline-none bg-gradient-to-r from-[#000080] via-[#4169E1] to-[#000080] font-popppins font-bold text-2xl px-10 py-[18px] rounded-full hover:bg-white hover:text-black transition-all duration-300 ease-in-out cursor-pointer">
    //   {children}
    // </button>
    <button className="text-[#ffffff] border-2 border-[#4169E1] bg-[#000080] bg-gradient-to-r from-[#000080] via-[#4169E1] to-blue-[#000080] font-popppins font-bold text-2xl px-10 py-[18px] w-fit rounded-full hover:bg-white hover:text-black transition-all duration-300 ease-in-out cursor-pointer">
      {children}
    </button>
  );
};

export default Button;
