const Footer = () => {
  return (
    <footer className="bg-[#0A0C23] text-white py-12 px-5 md:px-10 lg:px-20">
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="max-w-[1440px] mx-auto flex flex-wrap gap-10 lg:gap-20 justify-between mb-5">
          {/* Logo */}
          <div className="w-full lg:w-[300px]">
            <img
              src="/images/keysystem-logo.png"
              alt="KeySystem Logo"
              width={100}
              height={100}
              className="w-40 lg:w-50 object-cover object-center mb-4"
            />
            <p className="text-[10.6px] text-[#ffffff] font-popppins font-normal">
              © 2025 KeySystem Technology Limited. All rights reserved.
            </p>
          </div>
          {/* Services */}
          <div className="w-full lg:w-[878px] flex-grow">
            <h3 className="text-[24px] lg:text-[30px] font-semibold lg:font-bold font-popppins leading-[33.6px] text-[#BBBBBB] mb-3">
              SERVICES
            </h3>

            <div className="w-full grid grid-cols-1 text-base md:grid-cols-2 gap-2 text-[#CFCFCF] md:text-[20px] font-popppins font-normal leading-[33.6px]">
              <ul className="space-y-1 w-fit">
                <li>Core refresh</li>
                <li>Application management services</li>
                <li>Evolution & enhancement services</li>
                <li>Solution Assurance & validation</li>
                <li>Digital Banking & financial inclusion</li>
                <li>Online/mobile lending solution</li>
              </ul>
              <ul className="space-y-1 w-fit">
                <li>Staff augmentation solutions</li>
                <li>Risk management & Internal audit solutions</li>
                <li>Data Warehouse & Business Intelligence (BI)</li>
                <li>Enterprise Document Management Solutions</li>
                <li>KeySystem software testing</li>
                <li>Cybersecurity Solutions</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Quick Links and Contact */}
        <div className="max-w-[1440px] mx-auto flex-wrap flex gap-10 lg:gap-20 justify-between">
          {/* Quick Links */}
          <div className="w-full lg:w-[300px]">
            <h3 className="text-[24px] lg:text-[30px] font-semibold lg:font-bold font-popppins leading-[33.6px] text-[#BBBBBB] mb-3">
              QUICK LINKS
            </h3>
            <ul className="space-y-1 text-[#CFCFCF] text-base lg:text-[20px] font-popppins font-normal leading-[33.6px]">
              <li className="hover:underline cursor-pointer">About U</li>
              <li className="hover:underline cursor-pointer">Sitemap</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="w-full lg:w-[878px] flex-grow">
            <h3 className="text-[24px] lg:text-[30px] font-semibold lg:font-bold font-popppins leading-relaxed lg:leading-[33.6px] text-[#BBBBBB] mb-3">
              CONTACT
            </h3>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 text-[#CFCFCF] text-base lg:text-[20px] font-popppins font-normal leading-[33.6px]">
              <div>
                <p className="font-bold text-[#BBBBBB]">Nigeria</p>
                <p>
                  55G Adebisi Omotola Close,
                  <br />
                  Off Samuel Adedoyin Street,
                  <br />
                  Victoria Island
                </p>
              </div>
              <div>
                <p className="font-bold text-[#BBBBBB]">United Kingdom</p>
                <p>
                  39 Kenyon Lane, Off Moston Lane,
                  <br />
                  Moston, Manchester,
                  <br />
                  United Kingdom, M40 9JG
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
