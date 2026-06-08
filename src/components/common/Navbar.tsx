import { useState } from "react";
import {
  ChevronDown,
  MessageCircleMore,
  Menu,
  X,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const navLinks = [
    "Home",
    "Blog",
    "Destination",
    "Contact",
  ];

  return (
    <header className="w-full xl:px-30 lg:px-16 md:px-8 px-4 pt-4 bg-transparent relative z-50">
      <nav className="flex items-center justify-between bg-transparent">
        
        <button className="flex items-center gap-2 cursor-pointer">
          <img
            src="https://flagcdn.com/w40/in.png"
            alt="India"
            className="w-5 h-5 rounded-full object-cover"
          />
          <span className="text-sm md:text-base font-medium">
            IND
          </span>
          <ChevronDown size={14} />
        </button>

        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.map((item) => (
            <a
              key={item}
              href="/"
              className="text-[16px] font-medium text-black hover:opacity-70 transition"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 md:gap-4">

          <button className="w-9 h-9 md:w-10 md:h-10 rounded-xl md:rounded-2xl bg-white border border-gray-300 flex items-center justify-center cursor-pointer">
            <MessageCircleMore size={20} className="md:w-6 md:h-6" />
          </button>

          <button className="w-9 h-9 md:w-10 md:h-10 rounded-xl md:rounded-2xl bg-black text-white text-lg md:text-xl font-medium flex items-center justify-center cursor-pointer">
            A
          </button>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="block md:hidden p-1.5 bg-white border border-gray-300 rounded-xl cursor-pointer"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-200 p-6 flex flex-col gap-4 shadow-xl md:hidden mt-2 rounded-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((item) => (
            <a
              key={item}
              href="/"
              onClick={() => setIsOpen(false)} 
              className="text-lg font-medium text-black py-2 border-b border-gray-50 last:border-0 hover:text-gray-600 transition"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
