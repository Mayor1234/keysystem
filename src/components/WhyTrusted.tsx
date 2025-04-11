const WhyTrusted = () => {
  return (
    <div className="pt-30  bg-[#020412]">
      <div className="relative z-20 flex flex-col items-center justify-center text-center bg-[#020412] bg-[radial-gradient(circle_600px_at_50%_800px,#4969E1,transparent)] min-h-screen text-white overflow-hidden pt-3 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-10">
        <div className="absolute inset-0 -z-10 bg-[url(/Line.svg)] object-cover object-center h-[1068px] w-[1779.65px]"></div>
        <div className="mb-10 px-5 md:px-0">
          <h2 className="text-3xl sm:text-5xl md:text-6xl  lg:text-[50px] font-popppins font-bold mb-3 text-[#ffffff] tracking-wide">
            Why we are your Trusted Consultant
          </h2>
          <p className="text-[24px] font-popppins font-normal text-[#BBBBBB] mb-12">
            Empowering Businesses with Cutting-edge Technology
          </p>

          <p className="text-[18px] md:text-[32px] text-[#D2D2D2] mb-16 font-popppins font-normal">
            Excellence isn't a goal, it's our DNA; our relentless pursuit of{' '}
            <br />
            excellence is the driving force behind our success. Excellence is
            our <br />
            legacy, and we are proud to carry it forward.
          </p>
          <p className="text-sm md:text-[24px] font-popppins font-normal text-[#BBBBBB] mb-1 md:mb-3">
            Watch the video to see how we are innovating to keep businesses on
            top of their games.
          </p>
        </div>
        <div className="absolute inset-0 -z-10 animate-mesh bg-[url('/Line.svg')] bg-repeat bg-[length:40px_40px] opacity-20"></div>

        <div className="w-full h-auto flex items-center justify-center px-4">
          <figure>
            <img
              src="/images/why-img.png"
              alt="why image"
              width={100}
              className="w-full h-auto md:w-[1044px] md:h-[550px] object-cover object-center hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default WhyTrusted;
