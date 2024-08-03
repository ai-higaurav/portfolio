import React, { useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'

const About: React.FC = () => {
    useEffect(()=>{
        Aos.init({duration:1000})
      },[])
    return (
        <div className='w-full  flex justify-center items-center px-3  py-20' id='aboutme'>
            <section className='max-w-[500px] lg:max-w-[800px] 2xl:max-w-[1000px] '>
                <section className='flex items-center h-16 gap-5 mb-10'>
                    <h1 className='font-firacode text-xl text-textGray' data-aos="fade-right">About me</h1>
                    <div className='h-[1px] bg-textDark w-1/2 max-w-[300px] 'data-aos="fade-left"></div>
                </section>
                <div className='flex flex-col gap-16 xl:flex-row' data-aos="fade-up">
                    <section className='flex flex-col gap-5  flex-1'>
                        <h1 className='font-firacode text-xl text-textGray'>A Bit About Me</h1>
                        <p className='text-textDark'>
                            I'm a mern stack developer building the Front-end & Back-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section. I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
                        </p>
                        <div className='h-14 flex items-center relative  -left-3 '>
                            <button className='border border-neon text-textGray left-3 hover:left-2 absolute  transition-all ease-in-out   duration-200 hover:border-b-4 hover:border-r-4   py-2 px-5 rounded-md xl:w-fit'><a href="#contact">Get in Touch</a>

                            </button>
                        </div>
                    </section>
                    <section className='flex flex-col gap-5  '>
                        <h1 className='font-firacode text-xl text-textGray'>Skills</h1>
                        <section className='text-textDark grid gap-2 lg:gap-5 lg:grid-cols-4 grid-cols-3'>
                            <span>React Js</span>
                            <span>Node Js</span>
                            <span>MongoDB</span>
                            <span>Express Js</span>
                            <span>JavaScript</span>
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>Git</span>
                            <span>GitHub</span>
                            <span>Tailwind CSS</span>
                            <span>Bootstrap</span>
                            <span>Material UI</span>
                            <span>Redux</span>
                            <span>Next Js</span>
                        </section>
                    </section>
                </div>
            </section>
        </div>
    );
};

export default About;