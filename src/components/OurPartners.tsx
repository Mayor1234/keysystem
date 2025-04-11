import { ourPartnerlogos } from './constants';
import AnimateSections from './shared/AnimateSections';

const OurPartners = () => {
  return (
    <section className="bg-[#030517] text-[#ffffff]">
      <div className="w-full flex flex-col items-center justify-center pt-10 md:pt-20">
        <div className="mb-10">
          <h2 className="text-[30px] sm:text-[38px] md:text-[44.95px] font-bold font-popppins text-center mb-5 max-w-[816px]">
            Our Partners
          </h2>
          <p className="text-base sm:text-[18px] md:text-[24px] font-popppins font-normal max-w-[728px] text-center mb-10">
            Creating a Synergy with global brands
          </p>
        </div>
        <div className="w-full h-full md:h-[161.55px] py-8 md:py-0 bg-[#05071E] border-red-500">
          <div className="flex flex-wrap gap-9 items-center justify-center w-full h-full">
            {ourPartnerlogos.map((logo, i) => (
              <AnimateSections delay={0.8} type="popUp">
                <img
                  key={i}
                  src={logo}
                  alt="Partner logo"
                  className="h-12 sm:h-16 md:h-20 max-w-[150px] object-contain filter grayscale hover:grayscale-0 transition duration-300"
                />
              </AnimateSections>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
