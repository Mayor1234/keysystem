import { trustedPartnerslogos } from './constants';
import AnimateSections from './shared/AnimateSections';

const TheyTrustUs = () => {
  return (
    <div className="bg-[#030517] py-16 text-white">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-popppins font-bold mb-4">
            They Trust Us
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-popppins font-normal">
            And so can you
          </p>
        </div>

        <div className="grid place-items-center grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {trustedPartnerslogos.map((logo, index) => (
            <div key={index}>
              <AnimateSections delay={0.8} type="popUp">
                <img
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className="w-50 md:w-[250.85px] md:h-[99.92px] object-contain hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </AnimateSections>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TheyTrustUs;
