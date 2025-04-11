import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Logo from './Logo';
import { motion, AnimatePresence, useCycle } from 'framer-motion';
import {
  linkItemVariants,
  modalVariants,
  navLinksVariants,
} from '../../utils/motionVariants';
import Menu from './Menu';
import { menuItems } from '../constants';

const Header = () => {
  const [modalOpen, setModalOpen] = useCycle(false, true);

  return (
    <header className="h-20 sticky top-0 left-0 right-0 z-50 bg-linear-to-r from-[#05071E] via-[#000080] to-[#111A89] bg-[length:145%_400%] shadow-md">
      <div className="container mx-auto flex items-center justify-between gap-10 px-10 py-8 h-full w-full md:px-0">
        <Logo />
        <Menu />
        <div className="w-fit flex items-center justify-center md:justify-end">
          <button
            type="button"
            className="border-2 border-[#4169E1] bg-[#000080] bg-gradient-to-r from-[#000080] via-[#4169E1] to-blue-[#000080] font-popppins font-normal text-xs px-[8px] py-[6px] md:text-[16.26px] md:px-[27.1px] md:py-[12.2px] w-fit rounded-full text-[#fff] hover:bg-white hover:text-black transition-all duration-300 ease-in-out  cursor-pointer"
          >
            +234 818 444 1404
          </button>
        </div>
        <div className="flex items-center justify-center flex-col lg:hidden">
          <button
            onClick={() => setModalOpen()}
            className="flex flex-col items-center justify-center w-10 h-10 focus:outline-none absolute right-5 top-0 translate-y-5 z-50 cursor-pointer"
            aria-label="Toggle Menu"
          >
            <span
              className={`absolute block w-6 h-0.5 bg-[#fff] transition-transform duration-300 ease-in-out origin-center ${
                modalOpen ? '-rotate-45' : 'translate-y-1.5'
              }`}
            ></span>
            <span
              className={`absolute block w-6 h-0.5 bg-[#fff] transition-opacity duration-300 ${
                modalOpen ? 'opacity-0' : ' '
              }`}
            ></span>
            <span
              className={`absolute block w-6 h-0.5 bg-[#fff] transition-transform duration-300 ease-in-out origin-center ${
                modalOpen ? 'rotate-45' : '-translate-y-1.5'
              }`}
            ></span>
          </button>
          <AnimatePresence>
            {modalOpen && (
              <motion.div
                className="absolute inset-0 z-40 bg-gradient-to-bl from-[#05071E] via-[#000080] via-30%  to-[#4969E1] bg-[length:160%_400%] py-20 h-screen w-full"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <nav className="w-full h-[80%]">
                  <motion.ul
                    className="flex flex-col gap-10 items-center justify-center h-full w-full px-8"
                    variants={navLinksVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    {menuItems.map((menu, i) => (
                      <div key={i}>
                        <motion.li
                          key={i}
                          className="w-full text-2xl text-[#fff] py-2 hover:text-sec cursor-pointer capitalize flex items-center space-x-2"
                          variants={linkItemVariants}
                        >
                          <p>{menu.title}</p>
                          <i>
                            {menu.icon && (
                              <MdOutlineKeyboardArrowDown className="w-6 h-6" />
                            )}
                          </i>
                        </motion.li>
                      </div>
                    ))}{' '}
                  </motion.ul>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default Header;
