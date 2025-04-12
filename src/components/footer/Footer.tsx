import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdOutlineFacebook } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-[#0A0C23] text-white py-12 px-5 md:px-10 lg:px-20">
      <div className="flex flex-col gap-10">
        <div className="max-w-[1440px] mx-auto flex flex-wrap gap-10 w-full lg:gap-20 justify-between mb-5">
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
          <div className="w-full lg:w-[878px] flex-grow">
            <h3 className="text-[24px] lg:text-[30px] font-semibold lg:font-bold font-popppins leading-[33.6px] text-[#BBBBBB] mb-3">
              SERVICES
            </h3>
            <div className="w-full grid grid-cols-1 text-base lg:grid-cols-2 gap-2 text-[#CFCFCF] md:text-[20px] font-popppins font-normal leading-[33.6px]">
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
        <div className="max-w-[1440px] w-full mx-auto flex flex-wrap gap-10 lg:gap-20 justify-between mb-5">
          {/* Quick Links */}
          <div className="w-full lg:w-[300px]">
            <h3 className="text-[24px] lg:text-[30px] font-semibold lg:font-bold font-popppins leading-[33.6px] text-[#BBBBBB] mb-3">
              QUICK LINKS
            </h3>
            <ul className="space-y-1 text-[#CFCFCF] text-base lg:text-[20px] font-popppins font-normal leading-[33.6px]">
              <li className="hover:underline cursor-pointer">About Us</li>
              <li className="hover:underline cursor-pointer">Sitemap</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="w-full lg:w-[878px] flex-grow">
            <h3 className="text-[24px] lg:text-[30px] font-semibold lg:font-bold font-popppins leading-relaxed lg:leading-[33.6px] text-[#BBBBBB] mb-3">
              CONTACT
            </h3>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 text-[#CFCFCF] text-base lg:text-[20px] font-popppins font-normal leading-[33.6px] mb-16">
              <div className="space-y-1 w-fit">
                <p className="font-bold text-[#BBBBBB]">Nigeria</p>
                <p>
                  55G Adebisi Omotola Close,
                  <br />
                  Off Samuel Adedoyin Street,
                  <br />
                  Victoria Island
                </p>
              </div>
              <div className="space-y-1 w-fit">
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
            <div>
              <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 text-[#CFCFCF] text-base lg:text-[20px] font-popppins font-normal leading-[33.6px">
                <div className="text-[#CFCFCF] space-y-1 w-fit">
                  <p className="font-bold">United Kingdom</p>
                  <p>
                    <span>Tel: +44 161 948 1444</span>
                  </p>
                </div>
                <div className="text-[#CFCFCF] space-y-1 w-fit">
                  <p className="font-bold">United Arab Emirates</p>
                  <p>
                    <span>Tel: +971 50 423 8817</span>
                  </p>
                </div>
                <div className="text-[#CFCFCF] space-y-1 w-fit">
                  <p className="font-bold">Canada</p>
                  <p>
                    <span>Tel: +1 648 977 1435</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1440px] w-full mx-auto flex flex-wrap-reverse  gap-10 lg:gap-20  mb-5">
          <i className="w-full lg:w-[300px] flex gap-5 self-start">
            <FaInstagram className="text-[#CFCFCF] text-2xl mr-4 opacity-30 w-8 h-8" />
            <FaXTwitter className="text-[#CFCFCF] text-2xl mr-4 opacity-30 w-8 h-8" />
            <FaLinkedinIn className="text-[#CFCFCF] text-2xl mr-4 opacity-30 w-8 h-8" />
            <MdOutlineFacebook className="text-[#CFCFCF] text-2xl mr-4 opacity-30 w-8 h-8" />
          </i>
          <div className="w-full lg:w-[878px] grid grid-cols-1 md:grid-cols-3 gap-5 text-base lg:text-[20px] font-popppins font-normal leading-[33.6px]">
            <div className="text-[#CFCFCF] space-y-1 w-fit">
              <p className="font-bold ">Nigeria</p>
              <p>
                <span>Tel: +44 161 948 1444</span>
              </p>
            </div>
            <div className="text-[#CFCFCF] space-y-1 w-fit">
              <p className="font-bold">Email</p>
              <p>
                <span>enquiries@keysystemltd</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
