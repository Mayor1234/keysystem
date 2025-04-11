import Button from '../shared/Button';

const HeroBanner = () => {
  return (
    <>
      <div className="relative z-20 flex flex-col items-center justify-center text-center bg-linear-to-r from-[#05071E] via-[#000080] to-[#4969E1] bg-[length:160%_400%] min-h-screen text-white overflow-hidden py-20">
        <div className="absolute -z-20 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_2px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_2px,transparent_1px)] bg-[size:110px_110px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <p className="text-xl mb-8 text-[#ffffff] bg-[#2E6D9C] tracking-wide font-normal border border-cyan-200-300 rounded-4xl px-3 py-2 font-popppins ">
          Welcome to KeySystem
        </p>
        <div className="max-w-[1052px] mb-10">
          <h1 className="text-7xl font-bold mb-4 leading-[108%] tracking-wide font-popppins ">
            IT Consulting for <br /> Forward-thinking <br />
            Businesses
          </h1>
          <p className="text-3xl text-gray-300 mb-6 font-popppins font-normal">
            Driving Digital Transformation, One Solution at a Time
          </p>
        </div>
        <div className="flex z-30 space-x-10 mb-20">
          <Button>Get Started</Button>
          <button className="border-2 border-[#4169E1] outline-none bg-[#000080] font-popppins font-bold text-2xl px-10 py-[18px] w-fit rounded-full hover:bg-white hover:text-black transition-all duration-300 ease-in-out cursor-pointer">
            Learn More
          </button>
        </div>

        <section className="bg-[url('/images/stroke1.png')] bg-cover bg-no-repeat w-full h-[353px] py-10 flex items-center justify-center my-20">
          <div>
            <figure>
              <img
                src="/images/stroke-image.png"
                alt="stroke image"
                width={100}
                height={100}
                className="w-[965px] h-[490px] object-cover object-center hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </figure>
          </div>
        </section>
      </div>
    </>
  );
};

export default HeroBanner;
