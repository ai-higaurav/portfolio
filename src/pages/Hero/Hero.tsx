import React from 'react';

const Hero: React.FC = () => {
  return (
    <main className="w-full flex justify-center items-center h-dvh px-5" id="home">
      <section className="max-w-[500px] lg:max-w-[800px] 2xl:max-w-[1000px] w-full flex flex-col gap-6 lg:gap-8 " >
        <p className="font-firacode text-neon ml-0.5 " data-aos="fade-up">Hi , my name is</p>
        <section>
          <h1 className="font-calibre text-4xl lg:text-7xl font-semibold text-textGray" data-aos="fade-up"    data-aos-delay="100">
            Gaurav Kumar
          </h1>
          <h1 className="font-calibre text-4xl  lg:text-7xl font-semibold text-textDark" data-aos="fade-up"    data-aos-delay="150">
            I build things for the web.
          </h1>
        </section>
        <p className="max-w-xl lg:text-xl text-textDark " data-aos="fade-up"    data-aos-delay="200">
          I am a mern stack web developer specializing in building robust, scalable, and
          user-centric web solutions that deliver exceptional user experiences, ensure seamless
          performance, and ultimately drive product success.
        </p>

        <div className=" flex  h-20 relative -left-6 items-center justify-center w-52" data-aos="fade-up"    data-aos-delay="250">
          <button className=" transition-all  px-10 py-2 lg:py-3 text-[1rem] duration-200  ease-in-out border relative  left-0 bottom-0 hover:-left-1 hover:bottom-1 border-neon h-fit   hover:cursor-pointer hover:text-neon hover:border-b-4 hover:border-r-4    rounded-md text-textGray w-fit">
            <a href="#project">Projects</a>
          </button>
        </div>
      </section>
    </main>
  );
};

export default Hero;
