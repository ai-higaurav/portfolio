import { Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import {motion} from 'framer-motion'
const Navbar: React.FC = () => {
  const [isOpen, setOpen] = useState(false);

  const handleResize = () => {
    if (window.innerWidth > 640) {
      setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  const variants = {
    hidden: { y: -2000 },
    visible: { y: 0 },
  };
  
  return (
    <nav className="flex justify-center items-center w-full absolute top-0  z-50">
      <section className="flex justify-between items-center w-full px-5  2xl:px-10 py-7 overflow-hidden">
        <section data-aos="fade-right">
          {/* <img src="./logo/logo.svg" alt="logo"  className="w-[50px] h-[50px]"/> */}
          <img src="./logo/logo.svg" alt="logo" className="w-[30px] h-auto" />
        </section>
        <section
          className="flex sm:hidden hover:cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}>
          <span>
            <Menu size={30} className="text-neon" />
          </span>
        </section>

        <section
          className={`text-[14px] sm:flex  gap-10 items-center w-full justify-end  hidden   transition-all ease-in-out duration-500 text-white`} data-aos="fade-down">
          <button className="hover:text-neon transition-all duration-300 ease-in-out">
            <a href="#home">Home</a>
          </button>
          <button className="hover:text-neon transition-all duration-300 ease-in-out">
            <a href="#project">Work</a>
          </button>
          <button className="hover:text-neon transition-all duration-300 ease-in-out">
            <a href="#aboutme">About</a>
          </button>
          <button className="hover:text-neon transition-all duration-300 ease-in-out">
            <a href="#contact">Contact</a>
          </button>
          <div className=" h-12 flex justify-center items-center w-28">
            <button className="hover:text-neon transition-all duration-100 ease-linear border-neon border py-2 px-5 rounded-md hover:border-b-4 hover:border-r-4 ">
              Login
            </button>
          </div>
        </section>
      </section>

      <motion.div
          variants={variants}
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}

        className={`h-screen w-full bg-gray-900 bg-opacity-90 fixed  flex justify-center  sm:hiden top-0`}>
        <section

          className={`text-[14px]  flex flex-col items-center gap-10 absolute top-20  transition-all ease-in-out duration-500 text-white`}>
          <button className="hover:text-neon transition-all duration-300 ease-in-out">
            <X onClick={() => setOpen(false)} />
          </button>
          <button onClick={()=> setOpen(false)} className="hover:text-neon transition-all duration-300 ease-in-out">
            <a href="#home">Home</a>
          </button>
          <button onClick={()=> setOpen(false)}  className="hover:text-neon transition-all duration-300 ease-in-out">
            <a href="#project">Work</a>
          </button>
          <button onClick={()=> setOpen(false)}  className="hover:text-neon transition-all duration-300 ease-in-out">
            <a href="#aboutme">About</a>
          </button>
          <button onClick={()=> setOpen(false)}  className="hover:text-neon transition-all duration-300 ease-in-out">
            <a href="#contact">Contact</a>
          </button>
          <div className=" h-12 flex justify-center items-center w-28">
            <button onClick={()=> setOpen(false)}  className="hover:text-neon transition-all duration-100 ease-linear border-neon border py-2 px-5 rounded-md hover:border-b-4 hover:border-r-4 ">
              Login
            </button>
          </div>
        </section>
      </motion.div>
    </nav>
  );
};

export default Navbar;
