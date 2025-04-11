const OurProcess = () => {
  return (
    <section className="bg-[#030517] py-20 text-[#ffffff]">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="mb-10">
          <h2 className="text-[44.95px] font-bold font-popppins text-center mb-5 max-w-[816px]">
            Our Process
          </h2>
          <p className="text-[24px] font-popppins font-normal max-w-[728px] text-center mb-10">
            At KeySystem, we leave you with a lasting impression
          </p>
        </div>
        <div>
          <div className="w-[1237px] h-[243px] bg-linear-to-r from-[#04050B] via-[#030517] via-50% to-[#181B4D] p-10 rounded-xl shadow-lg transition-all duration-300 hover:shadow-[0_0_25px_#00c2ff55] relative overflow-hidden flex items-center mb-10">
            <div className="w-[615px] h-[148.9px]">
              <h2 className="text-[40px] font-bold font-popppins mb-5 max-w-[816px]">
                Strategic Consultation
              </h2>
              <p className="text-[24px] font-popppins font-normal max-w-[728px] mb-10">
                We kick off with a strategic to understand your brand, goals and
                audience
              </p>
            </div>
            <div className="absolute -right-20 bottom-0 rounded-xl pointer-events-none bg-[url('/images/our-process/strategic.png')] w-[385px] h-[243px] bg-no-repeat p-px"></div>
          </div>

          <div className="w-full h-full flex justify-between gap-10">
            <div className="w-[598px] h-[302px] bg-linear-to-r from-[#04050B] via-[#030517] via-50% to-[#181B4D] p-10 rounded-xl shadow-lg transition-all duration-300 hover:shadow-[0_0_25px_#00c2ff55] relative overflow-hidden">
              <div className="w-[402px] h-[220px]">
                <h2 className="text-[40px] font-bold font-popppins mb-5 max-w-[816px]">
                  Collaboration
                </h2>
                <p className="text-[24px] font-popppins font-normal max-w-[728px] mb-10">
                  At KeySystem, we collaborate closely to ensure the end result
                  meets your expectations and makes you happy
                </p>
              </div>
              <div className="absolute -right-20 bottom-0 rounded-xl pointer-events-none bg-[url('/images/our-process/collaboration.png')] w-[385px] h-full bg-no-repeat p-px"></div>
            </div>
            <div className="w-[598px] h-[302px] bg-linear-to-r from-[#04050B] via-[#030517] via-50% to-[#181B4D] p-10 rounded-xl shadow-lg transition-all duration-300 hover:shadow-[0_0_25px_#00c2ff55] relative overflow-hidden">
              <div className="w-[330px] h-[148.9px]">
                <h2 className="text-[40px] font-bold font-popppins mb-5 max-w-[816px]">
                  Delivery
                </h2>
                <p className="text-[24px] font-popppins font-normal max-w-[728px] mb-10">
                  Our Delivery rate is 100%; our clients deserves nothing less.
                </p>
              </div>
              <div className="absolute -right-20 -bottom-5 rounded-xl pointer-events-none bg-[url('/images/our-process/delivery.png')] w-[330.62px] h-[206px] bg-no-repeat p-px"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
