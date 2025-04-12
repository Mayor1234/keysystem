import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { menuItems } from '../constants';

const Menu = () => {
  return (
    <nav className="hidden font-popppins font-normal leading-[26.97px] text-[22px] text-[#CFCFCF] md:w-[60%] lg:flex items-center justify-center gap-[55px]">
      {menuItems.map((menu, i) => (
        <li
          key={i}
          className="items-center tracking-wide text-base capitalize cursor-pointer py-2 px-3 hover:text-pry transition duration-300 ease-in-out relative w-fit block after:block after:content-[''] after:absolute after:left-0 after:bottom-0 after:border-b-2 after:border-pry after:bg-pry after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center"
        >
          <p className="flex items-center gap-1">
            <span>{menu.title}</span>
            <i>
              {menu.icon && <MdOutlineKeyboardArrowDown className="w-6 h-6" />}
            </i>
          </p>
        </li>
      ))}
    </nav>
  );
};

export default Menu;
