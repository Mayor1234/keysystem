import Button from './shared/Button';

const OurOffering = () => {
  return (
    <div className="bg-[#05071E] py-20 md:py-40 px-5">
      <div className="container mx-auto flex items-center justify-center flex-col">
        <div className="text-[#ffffff] text-center w-full md:w-[824px] mb-10">
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
        </div>
        <div className="mb-12 ">
          <Button>Learn More</Button>
        </div>
        <section className="w-full place-items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 sm:gap-10 lg:gap-y-14">
          <div className="flex flex-col gap-3 md:gap-[55px] mb-3">
            <button
              type="button"
              className="px-6 py-4 text-[18px] md:text-[24px] w-full md:w-[288.55px] md:h-[135.3px] font-popppins font-normal rounded-[8093.98px] bg-gradient-to-b from-[#0A3440] to-[#05071E] backdrop-blur-md text-white text-center border-t-2 border-l-1 border-r-1 border-b-0 border-[#DCAEC2]/50 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] transition duration-300 hover:shadow-[0_0_20px_rgba(0,0,255,0.3),0_0_40px_rgba(0,255,255,0.2)] hover:scale-105 hover:border-white/20"
            >
              Core banking services
            </button>
            <button
              type="button"
              className="px-6 py-4 text-[18px] md:text-[24px] w-full md:w-[288.55px] md:h-[135.3px] font-popppins font-normal rounded-full bg-gradient-to-b from-[#0D400a] to-[#05071E] backdrop-blur-md text-white text-center border-t-2 border-l-1 border-r-1 border-b-0 border-[#DCAEC2]/50 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] transition duration-300 hover:shadow-[0_0_20px_rgba(0,0,255,0.3),0_0_40px_rgba(0,255,255,0.2)] hover:scale-105 hover:border-white/20"
            >
              Staff augmentation solutions
            </button>
            <button
              type="button"
              className="px-6 py-4 text-[18px] md:text-[24px] w-full md:w-[288.55px] md:h-[135.3px] font-popppins font-normal rounded-full bg-gradient-to-b from-[#400A04] to-[#05071E] backdrop-blur-md text-white text-center border-t-2 border-l-1 border-r-1 border-b-0 border-[#DCAEC2]/50 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] transition duration-300 hover:shadow-[0_0_20px_rgba(0,0,255,0.3),0_0_40px_rgba(0,255,255,0.2)] hover:scale-105 hover:border-white/20"
            >
              Business intelligence
            </button>
          </div>
          <div className="flex flex-col gap-3 md:gap-[55px] md:mt-30 mb-3">
            <button
              type="button"
              className="px-6 py-4 text-[16px] md:text-[24px] w-full md:w-[288.55px] md:h-[135.3px] font-popppins font-normal rounded-full bg-gradient-to-b from-[#0A0E40] to-[#05071E] backdrop-blur-md text-white text-center border-t-2 border-l-1 border-r-1 border-b-0 border-[#DCAEC2]/50 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] transition duration-300 hover:shadow-[0_0_20px_rgba(0,0,255,0.3),0_0_40px_rgba(0,255,255,0.2)] hover:scale-105 hover:border-white/20"
            >
              Digital Banking & financial inclusion
            </button>
            <button
              type="button"
              className="px-6 py-4 text-[18px] md:text-[24px] w-full md:w-[288.55px] md:h-[135.3px] font-popppins font-normal rounded-full bg-gradient-to-b from-[#40330A] to-[#05071E] backdrop-blur-md text-white text-center border-t-2 border-l-1 border-r-1 border-b-0 border-[#DCAEC2]/50 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] transition duration-300 hover:shadow-[0_0_20px_rgba(0,0,255,0.3),0_0_40px_rgba(0,255,255,0.2)] hover:scale-105 hover:border-white/20"
            >
              Internal audit solutions
            </button>
            <button
              type="button"
              className="px-6 py-4 text-[18px] md:text-[24px] w-full md:w-[288.55px] md:h-[135.3px] font-popppins font-normal rounded-full bg-gradient-to-b from-[#3CA3BA] to-[#05071E] backdrop-blur-md text-white text-center border-t-2 border-l-1 border-r-1 border-b-0 border-[#DCAEC2]/50 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] transition duration-300 hover:shadow-[0_0_20px_rgba(0,0,255,0.3),0_0_40px_rgba(0,255,255,0.2)] hover:scale-105 hover:border-white/20"
            >
              KeySystem software testing
            </button>
          </div>
          <div className="flex flex-col gap-3 md:gap-[55px] mb-3">
            <button
              type="button"
              className="px-6 py-4 text-[18px] md:text-[24px] w-full md:w-[288.55px] md:h-[135.3px] ont-popppins font-normal rounded-full bg-gradient-to-b from-[#400A3A] to-[#05071E] backdrop-blur-md text-white text-center border-t-2 border-l-1 border-r-1 border-b-0 border-[#DCAEC2]/50 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] transition duration-300 hover:shadow-[0_0_20px_rgba(0,0,255,0.3),0_0_40px_rgba(0,255,255,0.2)] hover:scale-105 hover:border-white/20"
            >
              Online/mobile lending Solution
            </button>
            <button
              type="button"
              className="px-6 py-4 text-[18px] md:text-[24px] w-full md:w-[288.55px] md:h-[135.3px] font-popppins font-normal rounded-full bg-gradient-to-b from-[#4A8C2B] to-[#05071E] backdrop-blur-md text-white text-center border-t-2 border-l-1 border-r-1 border-b-0 border-[#DCAEC2]/50 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] transition duration-300 hover:shadow-[0_0_20px_rgba(0,0,255,0.3),0_0_40px_rgba(0,255,255,0.2)] hover:scale-105 hover:border-white/20"
            >
              Data Warehouse
            </button>
            <button
              type="button"
              className="px-6 py-4 text-[18px] md:text-[24px] w-full md:w-[288.55px] md:h-[135.3px] font-popppins font-normal rounded-full bg-gradient-to-b from-[#6012CE]  to-[#05071E] backdrop-blur-md text-white text-center border-t-2 border-l-1 border-r-1 border-b-0 border-[#DCAEC2]/50 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] transition duration-300 hover:shadow-[0_0_20px_rgba(0,0,255,0.3),0_0_40px_rgba(0,255,255,0.2)] hover:scale-105 hover:border-white/20"
            >
              Cybersecurity Solutions
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurOffering;

// import Button from './shared/Button';

// const OurOffering = () => {
//   return (
//     <div className="bg-[#05071E] py-20 px-4 sm:px-6 lg:px-10">
//       <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
//         {/* Header */}
//         <div className="text-white mb-10 w-full max-w-4xl">
//           <h2 className="font-popppins font-bold text-3xl sm:text-4xl lg:text-5xl mb-5">
//             Our Offerings
//           </h2>
//           <p className="text-base sm:text-lg lg:text-2xl font-popppins font-normal leading-relaxed">
//             Leverage KeySystem's cutting-edge expertise to transform your
//             business. Our tailored software and cybersecurity solutions drive
//             efficiency, security, and growth. We empower businesses to thrive in
//             the digital age.
//           </p>
//         </div>

//         {/* CTA Button */}
//         <div className="mb-12">
//           <Button>Learn More</Button>
//         </div>

//         {/* Offering Buttons */}
//         <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 lg:gap-y-14">
//           {[
//             { label: 'Core banking services', gradient: 'from-[#0A3440]' },
//             {
//               label: 'Staff augmentation solutions',
//               gradient: 'from-[#0D400a]',
//             },
//             { label: 'Business intelligence', gradient: 'from-[#400A04]' },
//             {
//               label: 'Digital Banking & financial inclusion',
//               gradient: 'from-[#0A0E40]',
//             },
//             { label: 'Internal audit solutions', gradient: 'from-[#40330A]' },
//             { label: 'KeySystem software testing', gradient: 'from-[#3CA3BA]' },
//             {
//               label: 'Online/mobile lending Solution',
//               gradient: 'from-[#400A3A]',
//             },
//             { label: 'Data Warehouse', gradient: 'from-[#4A8C2B]' },
//             { label: 'Cybersecurity Solutions', gradient: 'from-[#6012CE]' },
//           ].map((item, idx) => (
//             <button
//               key={idx}
//               type="button"
//               className={`w-full px-6 py-6 text-lg sm:text-xl font-popppins font-normal rounded-full
//                 bg-gradient-to-b ${item.gradient} to-[#05071E] backdrop-blur-md text-white text-center
//                 border-t-2 border-l border-r border-b-0 border-[#DCAEC2]/50
//                 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]
//                 transition duration-300 hover:shadow-[0_0_20px_rgba(0,0,255,0.3),0_0_40px_rgba(0,255,255,0.2)]
//                 hover:scale-105 hover:border-white/20`}
//             >
//               {item.label}
//             </button>
//           ))}
//         </section>
//       </div>
//     </div>
//   );
// };

// export default OurOffering;
