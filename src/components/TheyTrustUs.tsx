const logos: string[] = [
  '/images/partner-logos/lapo.png',
  '/images/partner-logos/npf.png',
  '/images/partner-logos/sterling.png',
  '/images/partner-logos/crusader.png',
  '/images/partner-logos/nafc.png',
  '/images/partner-logos/nbf.png',
  '/images/partner-logos/mpb.png',
  '/images/partner-logos/stanbic.png',
  '/images/partner-logos/muscat.png',
  '/images/partner-logos/bananga.png',
  '/images/partner-logos/santander.png',
];

const TheyTrustUs = () => {
  return (
    <div className="bg-[#030517] py-16 text-[#ffffff]">
      <div className="container mx-auto flex items-center justify-center flex-col">
        <div className="mb-16">
          <h2 className="text-[50px] font-popppins font-bold mb-5 text-center">
            They Trust Us
          </h2>
          <p className="text-[24px] font-popppins font-normal text-center">
            And so can you
          </p>
        </div>
        <div>
          <div className="w-full flex flex-wrap items-center justify-center gap-10 rounded-2xl">
            {logos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className="w-[250.85px] h-[99.92px] object-cover object-center aspect-square hover:scale-105 transition-transform duration-300 ease-in-out rounded-lg"
                  width={100}
                  height={100}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheyTrustUs;
