import React, { useEffect } from 'react';
import {useFormik} from 'formik'
import formValidate from '../../utils/formValidation';

import Aos from 'aos'
import 'aos/dist/aos.css'

const Form: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      name:'',
      email:'',
      message:'',
    },
    validationSchema:formValidate,
    onSubmit: (val) => {
      console.log(val)
    }
  })

  useEffect(()=>{
    Aos.init({duration:1000})
  },[])

  return (
    <div className="flex justify-center items-center px-3 py-20" data-aos="fade-up">
      <section className="max-w-[500px] lg:max-w-[800px] 2xl:max-w-[1000px] w-full flex flex-col gap-5">
        <section className="flex items-center h-16 gap-5 mb-10 ">
          <h1 className="font-firacode text-xl text-textGray" id='contact'>Contact Us</h1>
          <div className="h-[1px] bg-textDark w-1/2 max-w-[300px] "></div>
        </section>
        <form className="flex flex-col gap-5 " onSubmit={formik.handleSubmit}>
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="name"
            placeholder="Name"
            className={`py-3 px-3 bg-gray-800 text-white placeholder-gray-600 rounded-sm focus:outline-none ${formik.errors.name ? 'focus:outline-red-300':'focus:outline-neon'}`}
          />
          {formik.errors.name && formik.touched.name ? <span className='text-red-300 transition-all ease-out duration-300' data-aos="zoom">{formik.errors.name}</span> : null}

          <input
            type="email"
            name="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="sampl@gmail.com"
            className="py-3 px-3 bg-gray-800 text-white placeholder-gray-600 rounded-sm focus:outline-neon"
          />
          {formik.errors.email && formik.touched.email ? <span className='text-red-300 transition-all ease-out duration-300' data-aos="zoom">{formik.errors.email}</span> : null}

          <textarea
            name="message"
            id="message"
            cols={30}
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            rows={10}
            placeholder="Message"
            className="py-3 px-3 bg-gray-800 text-white  placeholder-gray-600 rounded-sm focus:outline-neonfocus:outline-neon"
          ></textarea>
               {formik.errors.message && formik.touched.message ? <span className='text-red-300 transition-all ease-out duration-300' data-aos="zoom">{formik.errors.message}</span> : null}

          <div className="h-14 w-52 flex justify-center items-center relative -left-4 ">
            <button
              className="border border-neon text-textGray py-2 px-5 rounded-md relative -left-8 transition-all ease-linear duration-50 xl:w-fit hover:border-b-4 hover:border-r-4"
              type='submit'
              
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Form;