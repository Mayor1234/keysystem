const logos: string[] = [
  '/images/our-partners/software-group.png',
  '/images/our-partners/cognizant.png',
  '/images/our-partners/temenos.png',
  '/images/our-partners/netinfo.png',
  '/images/our-partners/techmahindra.png',
];

const OurPartners = () => {
  return (
    <section className="bg-[#030517] text-[#ffffff]">
      <div className="flex flex-col items-center justify-center pt-20">
        <div className="mb-10">
          <h2 className="text-[44.95px] font-bold font-popppins text-center mb-5 max-w-[816px]">
            Our Partners
          </h2>
          <p className="text-[24px] font-popppins font-normal max-w-[728px] text-center mb-10">
            Creating a Synergy with global brands
          </p>
        </div>
        <div className="w-full h-[161.55px] bg-[#05071E] border-red-500">
          <div className="flex flex-wrap gap-9 items-center justify-center w-full h-full">
            {logos.map((logo, idx) => (
              <img
                key={idx}
                src={logo}
                alt={`Partner logo ${idx}`}
                className="h-[91.55px] w-auto filter grayscale transition-all duration-300 ease-in hover:grayscale-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
