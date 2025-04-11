import { logos } from './constants';
import Button from './shared/Button';

const Compliance = () => {
  return (
    <section className="bg-[#05071E] py-20 text-white">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        {/* Heading Section */}
        <div className="flex items-center justify-center flex-col mb-16 text-center">
          <h1 className="text-[28px] md:text-[42px] lg:text-[50px] font-bold font-popppins mb-6 max-w-[816px]">
            Compliance and Certifications/Standards We Specialize In
          </h1>
          <p className="text-[18px] md:text-[20px] lg:text-[24px] font-popppins font-normal max-w-[728px] mb-8">
            Elevate Your Organization's Security Posture with Our
            Compliance/Standards Consulting Services
          </p>
          <Button>Contact Us</Button>
        </div>

        {/* Logo Grid Section */}
        <div className="bg-white w-full max-w-[1234px] rounded-2xl p-6 md:p-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-10">
            {logos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className="w-[90px] md:w-[110px] h-[90px] md:h-[110px] object-contain object-center aspect-square hover:scale-105 transition-transform duration-300 ease-in-out"
                  width={100}
                  height={100}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compliance;
