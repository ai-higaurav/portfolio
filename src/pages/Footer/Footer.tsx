import { Github, Linkedin, Twitter } from 'lucide-react';
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className='flex justify-center items-center pt-20 lg:pt-0 pb-5 px-3 bg-[#112240] md:bg-transparent'>
            <section className='w-full max-w-[500px] lg:max-w-[800px] 2xl:max-w-[1000px] '>
                <section className='flex w-full justify-between flex-col gap-10 lg:flex-row md:hidden'>
                    <section className='flex-1 flex flex-col gap-5'>
                        <h1 className='text-textGray font-firacode text-xl font-bold uppercase'>Gaurav Kumar</h1>
                        <p className='max-w-[500px] text-textDark'>A Full Stack focused Web Developer building the Frontend and Backend  of Websites and Web Applications that leads to the success of the overall product</p>
                    </section>
                    <section className=' flex flex-col gap-5'>
                        <h1 className='text-textGray font-firacode text-xl font-bold'>Social</h1>
                        <div className='flex gap-10'>
                            <Github size={25} className="hover:text-neon cursor-pointer hover:-translate-y-2 transition-all ease-in-out duration-500 " />
                            <Linkedin size={25} className="hover:text-neon cursor-pointer hover:-translate-y-2 transition-all ease-in-out duration-500 " />
                            <Twitter size={25} className="hover:text-neon cursor-pointer hover:-translate-y-2 transition-all ease-in-out duration-500 " />
                        </div>
                    </section>
                </section>
                <section className='flex  justify-center items-center mt-20 text-textDark'>
                    <span className='font-firacode text-[12px] '>© Copyright 2024 . Made by Gaurav Kumar</span>
                </section>
            </section>
        </footer>
    );
};

export default Footer;