import { logos } from './constants';

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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 place-items-center">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="w-50 md:w-[250.85px] md:h-[99.92px] object-contain hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TheyTrustUs;
