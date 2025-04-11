import AnimateSections from './shared/AnimateSections';

const OurProcess = () => {
  return (
    <section className="bg-[#030517] py-20 text-white">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        {/* Section Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-[32px] md:text-[40px] lg:text-[44.95px] font-bold font-popppins mb-5 max-w-[816px] mx-auto">
            Our Process
          </h2>
          <p className="text-[18px] md:text-[20px] lg:text-[24px] font-popppins font-normal max-w-[728px] mx-auto mb-10">
            At KeySystem, we leave you with a lasting impression
          </p>
        </div>

        {/* Card 1: Strategic Consultation */}
        <div className="w-full max-w-[1237px] bg-gradient-to-r from-[#04050B] via-[#030517] via-50% to-[#181B4D] p-6 md:p-10 rounded-xl shadow-lg hover:shadow-[0_0_25px_#00c2ff55] relative overflow-hidden flex flex-col md:flex-row items-start md:items-center mb-10 gap-6">
          <div className="z-10 max-w-xs  md:max-w-[615px]">
            <AnimateSections delay={0.5} type="popUp">
              <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold font-popppins mb-4">
                Strategic Consultation
              </h2>
              <p className="text-[16px] md:text-[18px] lg:text-[24px] font-popppins font-normal">
                We kick off with a strategic to understand your{' '}
                <br className="hidden sm:block" />
                brand, goals and audience
              </p>
            </AnimateSections>
          </div>
          <div className="absolute -right-10 md:-right-20 bottom-0 w-[200px] md:w-[385px] h-[150px] md:h-[243px] bg-[url('/images/our-process/strategic.png')] bg-no-repeat bg-contain pointer-events-none" />
        </div>

        {/* Cards 2 & 3 */}
        <div className="w-full flex flex-col lg:flex-row justify-between gap-6">
          {/* Collaboration */}
          <div className="flex-1 bg-gradient-to-r from-[#04050B] via-[#030517] via-50% to-[#181B4D] p-6 md:p-10 rounded-xl shadow-lg hover:shadow-[0_0_25px_#00c2ff55] relative overflow-hidden flex flex-col">
            <div className="z-10 max-w-xs md:max-w-[402px]">
              <AnimateSections delay={0.5} type="slideInLeft">
                <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold font-popppins mb-4">
                  Collaboration
                </h2>
                <p className="text-[16px] md:text-[18px] lg:text-[24px] font-popppins font-normal">
                  At KeySystem, we collaborate closely to ensure the end result
                  meets your expectations and makes you happy
                </p>
              </AnimateSections>
            </div>
            <div className="absolute  -right-10 md:-right-20 bottom-0 w-[200px] md:w-[385px] h-[150px] md:h-full bg-[url('/images/our-process/collaboration.png')] bg-no-repeat bg-contain pointer-events-none" />
          </div>

          {/* Delivery */}
          <div className="flex-1 bg-gradient-to-r from-[#04050B] via-[#030517] via-50% to-[#181B4D] p-6 md:p-10 rounded-xl shadow-lg hover:shadow-[0_0_25px_#00c2ff55] relative overflow-hidden flex flex-col">
            <div className="z-10 max-w-xs md:max-w-[330px]">
              <AnimateSections delay={0.5} type="slideInRight">
                <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold font-popppins mb-4">
                  Delivery
                </h2>
                <p className="text-[16px] md:text-[18px] lg:text-[24px] font-popppins font-normal">
                  Our Delivery rate is 100%; our clients deserve nothing less.
                </p>
              </AnimateSections>
            </div>
            <div className="absolute -right-10 md:-right-20 -bottom-5 w-[180px] md:w-[330.62px] h-[150px] md:h-[206px] bg-[url('/images/our-process/delivery.png')] bg-no-repeat bg-contain pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
