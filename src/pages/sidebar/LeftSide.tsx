import { Github, Linkedin, Twitter } from "lucide-react";
import React from "react";

const LeftSide : React.FC = ()=>{
    return(
        <>
            <aside className="fixed bottom-0 left-5 2xl:left-10 hidden md:block" data-aos="fade-up">
                <section className="flex flex-col justify-center items-center">
                    <section className="flex flex-col gap-6 mb-6 text-gray-400 ">
                    <Github onClick={()=> window.open('https://github.com/githigaurav')}  size={20} className="hover:text-neon cursor-pointer hover:-translate-y-2 transition-all ease-in-out duration-500 "/>
                    <Linkedin size={20} className="hover:text-neon cursor-pointer hover:-translate-y-2 transition-all ease-in-out duration-500 "/>
                    <Twitter size={20} className="hover:text-neon cursor-pointer hover:-translate-y-2 transition-all ease-in-out duration-500 "/>
                    </section>
                    <section className="w-[1px] h-24 bg-gray-100">
                    </section>
                </section>
            </aside>
        </>
    )
}

export default LeftSide;