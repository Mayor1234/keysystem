import AnimateSections from './shared/AnimateSections';
import Button from './shared/Button';

const OurOffering = () => {
  return (
    <div className="bg-[#05071E] py-20 md:py-40 px-5">
      <div className="container mx-auto flex items-center justify-center flex-col">
        <div className="text-[#ffffff] text-center w-full md:w-[824px] mb-10">
          <AnimateSections delay={0.5} type="popUp">
            <h2 className="font-popppins font-bold text-3xl sm:text-4xl lg:text-[50px] mb-5">
              Our Offerings
            </h2>
            <p className="text-base sm:text-lg lg:text-[24px] font-popppins font-normal leading-relaxed">
              Leaverage KeySystem's cutting-edge expertise to transform your{' '}
              <br className="hidden sm:block" />
              business. Our tailored software and cybersecurity solutions drive{' '}
              <br className="hidden sm:block" />
              efficiency, security, and growth. We empower businesses <br />
              to thrive in the digital age
            </p>
          </AnimateSections>
        </div>
        <div className="mb-12 ">
          <Button>Learn More</Button>
        </div>
        <section className="w-full place-items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 sm:gap-10 lg:gap-y-14">
          <div className="flex flex-col gap-3 md:gap-[55px] mb-3">
            <AnimateSections delay={0.8} type="popUp">
              <button
                type="button"
                className="px-6 py-4 text-[18px] md:text-[24px] w-full md:w-[288.55px] md:h-[135.3px] font-popppins font-normal rounded-[8093.98px] bg-gradient-to-b from-[#0A3440] to-[#05071E] backdrop-blur-md text-white text-center border-t-2 border-l-1 border-r-1 border-b-0 border-[#DCAEC2]/50 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] transition duration-300 hover:shadow-[0_0_20px_rgba(0,0,255,0.3),0_0_40px_rgba(0,255,255,0.2)] hover:scale-105 hover:border-white/20"
              >
                Core banking services
              </button>
            </AnimateSections>
            <AnimateSections delay={0.8} type="popUp">
              <button
                type="button"
                className="px-6 py-4 text-[18px] md:text-[24px] w-full md:w-[288.55px] md:h-[135.3px] font-popppins font-normal rounded-full bg-gradient-to-b from-[#0D400a] to-[#05071E] backdrop-blur-md text-white text-center border-t-2 border-l-1 border-r-1 border-b-0 border-[#DCAEC2]/50 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] transition duration-300 hover:shadow-[0_0_20px_rgba(0,0,255,0.3),0_0_40px_rgba(0,255,255,0.2)] hover:scale-105 hover:border-white/20"
              >
                Staff augmentation solutions
              </button>
            </AnimateSections>
            <AnimateSections delay={0.8} type="popUp">
              <button
                type="button"
                className="px-6 py-4 text-[18px] md:text-[24px] w-full md:w-[288.55px] md:h-[135.3px] font-popppins font-normal rounded-full bg-gradient-to-b from-[#400A04] to-[#05071E] backdrop-blur-md text-white text-center border-t-2 border-l-1 border-r-1 border-b-0 border-[#DCAEC2]/50 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] transition duration-300 hover:shadow-[0_0_20px_rgba(0,0,255,0.3),0_0_40px_rgba(0,255,255,0.2)] hover:scale-105 hover:border-white/20"
              >
                Business intelligence
              </button>
            </AnimateSections>
          </div>
          <div className="flex flex-col gap-3 md:gap-[55px] md:mt-30 mb-3">
            <AnimateSections delay={0.8} type="popUp">
              <button
                type="button"
                className="px-6 py-4 text-[16px] md:text-[24px] w-full md:w-[288.55px] md:h-[135.3px] font-popppins font-normal rounded-full bg-gradient-to-b from-[#0A0E40] to-[#05071E] backdrop-blur-md text-white text-center border-t-2 border-l-1 border-r-1 border-b-0 border-[#DCAEC2]/50 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] transition duration-300 hover:shadow-[0_0_20px_rgba(0,0,255,0.3),0_0_40px_rgba(0,255,255,0.2)] hover:scale-105 hover:border-white/20"
              >
                Digital Banking & financial inclusion
              </button>
            </AnimateSections>
            <AnimateSections delay={0.5} type="popUp">
              <button
                type="button"
                className="px-6 py-4 text-[18px] md:text-[24px] w-full md:w-[288.55px] md:h-[135.3px] font-popppins font-normal rounded-full bg-gradient-to-b from-[#40330A] to-[#05071E] backdrop-blur-md text-white text-center border-t-2 border-l-1 border-r-1 border-b-0 border-[#DCAEC2]/50 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] transition duration-300 hover:shadow-[0_0_20px_rgba(0,0,255,0.3),0_0_40px_rgba(0,255,255,0.2)] hover:scale-105 hover:border-white/20"
              >
                Internal audit solutions
              </button>
            </AnimateSections>
            <AnimateSections delay={0.5} type="popUp">
              <button
                type="button"
                className="px-6 py-4 text-[18px] md:text-[24px] w-full md:w-[288.55px] md:h-[135.3px] font-popppins font-normal rounded-full bg-gradient-to-b from-[#3CA3BA] to-[#05071E] backdrop-blur-md text-white text-center border-t-2 border-l-1 border-r-1 border-b-0 border-[#DCAEC2]/50 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] transition duration-300 hover:shadow-[0_0_20px_rgba(0,0,255,0.3),0_0_40px_rgba(0,255,255,0.2)] hover:scale-105 hover:border-white/20"
              >
                KeySystem software testing
              </button>
            </AnimateSections>
          </div>
          <div className="flex flex-col gap-3 md:gap-[55px] mb-3">
            <AnimateSections delay={0.8} type="popUp">
              <button
                type="button"
                className="px-6 py-4 text-[18px] md:text-[24px] w-full md:w-[288.55px] md:h-[135.3px] ont-popppins font-normal rounded-full bg-gradient-to-b from-[#400A3A] to-[#05071E] backdrop-blur-md text-white text-center border-t-2 border-l-1 border-r-1 border-b-0 border-[#DCAEC2]/50 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] transition duration-300 hover:shadow-[0_0_20px_rgba(0,0,255,0.3),0_0_40px_rgba(0,255,255,0.2)] hover:scale-105 hover:border-white/20"
              >
                Online/mobile lending Solution
              </button>
            </AnimateSections>
            <AnimateSections delay={0.8} type="popUp">
              <button
                type="button"
                className="px-6 py-4 text-[18px] md:text-[24px] w-full md:w-[288.55px] md:h-[135.3px] font-popppins font-normal rounded-full bg-gradient-to-b from-[#4A8C2B] to-[#05071E] backdrop-blur-md text-white text-center border-t-2 border-l-1 border-r-1 border-b-0 border-[#DCAEC2]/50 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] transition duration-300 hover:shadow-[0_0_20px_rgba(0,0,255,0.3),0_0_40px_rgba(0,255,255,0.2)] hover:scale-105 hover:border-white/20"
              >
                Data Warehouse
              </button>
            </AnimateSections>
            <AnimateSections delay={0.8} type="popUp">
              <button
                type="button"
                className="px-6 py-4 text-[18px] md:text-[24px] w-full md:w-[288.55px] md:h-[135.3px] font-popppins font-normal rounded-full bg-gradient-to-b from-[#6012CE]  to-[#05071E] backdrop-blur-md text-white text-center border-t-2 border-l-1 border-r-1 border-b-0 border-[#DCAEC2]/50 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] transition duration-300 hover:shadow-[0_0_20px_rgba(0,0,255,0.3),0_0_40px_rgba(0,255,255,0.2)] hover:scale-105 hover:border-white/20"
              >
                Cybersecurity Solutions
              </button>
            </AnimateSections>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurOffering;
