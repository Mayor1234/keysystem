import AnimateSections from '../shared/AnimateSections';
import Button from '../shared/Button';

const HeroBanner = () => {
  return (
    <div className="relative z-20 flex flex-col items-center justify-center text-center bg-gradient-to-r from-[#05071E] via-[#000080] to-[#4969E1] bg-[length:160%_400%] min-h-screen text-white overflow-hidden py-16">
      {/* Grid Overlay */}
      <div className="absolute -z-20 inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_2px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_2px,transparent_1px)] bg-[size:110px_110px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Welcome Text */}
      <AnimateSections type="fadeIn" delay={0.7}>
        <p className="text-base sm:text-lg md:text-xl mb-6 text-white bg-[#2E6D9C] tracking-wide font-normal border border-cyan-200 rounded-full px-4 py-2 font-popppins">
          Welcome to KeySystem
        </p>
      </AnimateSections>

      {/* Hero Content */}
      <div className="max-w-[1052px] mb-5 md:mb-10 px-2">
        <AnimateSections delay={0.5} type="popUp">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight tracking-wide font-popppins">
            IT Consulting for <br className="hidden sm:block" />{' '}
            Forward-thinking <br className="hidden sm:block" />
            Businesses
          </h1>
        </AnimateSections>

        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 font-popppins font-normal">
          <AnimateSections delay={0.7} type="popUp">
            Driving Digital Transformation, One Solution at a Time
          </AnimateSections>
        </p>
      </div>

      {/* CTA Buttons */}
      <AnimateSections delay={0.9} type="popUp">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-[46px] mb-8 md:mb-16 z-30">
          <Button>Get Started</Button>
          <button className="border-2 border-[#4169E1] outline-none bg-[#000080] font-popppins font-bold text-lg sm:text-xl px-6 py-3 sm:px-10 sm:py-[18px] md:text-[24px] rounded-full hover:bg-white hover:text-black transition-all duration-300 ease-in-out cursor-pointer">
            Learn More
          </button>
        </div>
      </AnimateSections>

      {/* Stroke Section with Image */}
      <section className="w-full h-auto py-5 lg:py-10 flex items-center justify-center my-10 px-4 bg-[url('/images/stroke1.png')] bg-cover bg-no-repeat">
        <div className="w-full max-w-[965px]">
          <figure>
            <img
              src="/images/stroke-image.png"
              alt="stroke image"
              width={965}
              height={490}
              className="w-full h-auto object-cover object-center hover:scale-105 transition-transform duration-300 ease-in-out md:-mt-16"
            />
          </figure>
        </div>
      </section>
    </div>
  );
};

export default HeroBanner;
