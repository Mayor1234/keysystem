import Button from './shared/Button';

const logos: string[] = [
  '/images/compliance/pci.png',
  '/images/compliance/iso-27001.png',
  '/images/compliance/cybersecurity.png',
  '/images/compliance/gdpr.png',
  '/images/compliance/ndpr.png',
  '/images/compliance/iso-22301.png',
  '/images/compliance/sarbanes.png',
  '/images/compliance/togaf.png',
  '/images/compliance/iso-20000.png',
  '/images/compliance/aicpa.png',
  '/images/compliance/aicpa-big.png',
  '/images/compliance/cobit.png',
  '/images/compliance/ssae.png',
  '/images/compliance/pcaob.png',
  '/images/compliance/coso.png',
  '/images/compliance/ssae-16.png',
  '/images/compliance/iaasb.png',
  '/images/compliance/isae.png',
];

const Compliance = () => {
  return (
    <section className="bg-[#05071E] py-40 text-[#ffffff]">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="flex items-center justify-center flex-col mb-16">
          <h1 className="text-[50px] font-bold font-popppins text-center mb-10 max-w-[816px]">
            Compliance and Certifications/ Standands We Specialize in
          </h1>
          <p className="text-[24px] font-popppins font-normal max-w-[728px] text-center mb-10">
            Elevate Your Organization's Security Posture with Our
            Compliance/Standards Consulting Services
          </p>
          <Button>Contact Us</Button>
        </div>
        <div className="p-10 bg-[#ffffff] w-[1234px] h-[500px] rounded-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10">
            {logos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className="w-[110px] h-[110px] object-contain object-center aspect-square hover:scale-105 transition-transform duration-300 ease-in-out"
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
