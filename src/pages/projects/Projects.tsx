import React, { useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'
const Projects: React.FC = () => {

  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  return (
    <div
      className="flex w-full justify-center items-center py-20 px-5"
      id="project"
    >
      <section className="w-full max-w-[500px] lg:max-w-[800px] 2xl:max-w-[1000px] flex flex-col gap-20 " >
        <section className="flex items-center gap-5  w-full ">
          <h1 className="font-firacode text-xl text-textGray" data-aos="fade-right" >Projects</h1>
          <div className="h-[1px] bg-textDark w-1/2 max-w-[300px] " data-aos="fade-left"></div>
        </section>

        <section className="flex flex-col gap-5 lg:flex-row" >
          <div className=" flex justify-center items-center flex-1 shadow shadow-neon " data-aos="fade-up" >
            <img
              src="./projects/portfolio.jpg"
              className="object-cover w-full h-auto"
              alt="" 
              
            />
          </div>

          <section className="flex flex-col gap-3 lg:gap-5 flex-1 lg:items-end py-5" data-aos="fade-left" data-aos-delay="200" >
            <h1 className="text-textGray font-medium text-xl">Portfolio Website</h1>
            <div className=" lg:-ml-20 lg:px-5 lg:text-end lg:py-5 lg:bg-bgSecondary lg:rounded-md">
              <p className="text-textDark">
              My portfolio represents the culmination of my experiences and skills as a MERN Stack Developer. Through this platform, I invite you to explore my projects, delvelop into my technical expertise, and witness my passion for creating exceptional web applications.
              </p>
            </div>
            <div className="grid grid-flow-col lg:gap-10 text-textDark">
              <span>React Js</span>
              <span>Node Js</span>
              <span>Express Js</span>
              <span>Mnogo DB</span>
            </div>
          </section>
        </section>

        <section className="flex flex-col gap-5 lg:flex-row-reverse " data-aos="fade-up">
          <div className=" flex justify-center items-center flex-1 shadow shadow-neon" >
            <img
              src="./projects/asthaan.jpg"
              className="object-cover w-full h-auto hover:cursor-pointer"
              alt=""
              onClick={()=> window.open('https://asthaan-xi.vercel.app/')}
            />
          </div>

          <section className="flex flex-col gap-3 lg:gap-5 flex-1 lg:items-start py-5" >
            <h1 className="text-textGray font-medium text-xl hover:cursor-pointer" onClick={()=> window.open('https://asthaan-xi.vercel.app/')}>Asthaan Property</h1>
            <div className=" lg:-mr-20 lg:px-5 lg:text-start lg:py-5 lg:bg-bgSecondary lg:rounded-md z-10">
              <p className="text-textDark">
              Asthaan Your hassle-free solution to selling property online. List your home effortlessly and connect with motivated buyers, all through our user-friendly platform. Get started today and streamline your selling process with Asthaan.
              </p>
            </div>
            <div className="grid grid-flow-col lg:gap-10 text-textDark">
              <span>React</span>
              <span>Node Js</span>
              <span>Mongodb</span>
              <span>Redux</span>
              <span>App Write</span>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
};

export default Projects;