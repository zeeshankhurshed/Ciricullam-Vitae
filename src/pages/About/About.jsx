import React, { useEffect } from 'react';
import './about.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
  Aos.init({duration:2000})
  }, [])
  return (
    <>
      <div className='lead-text sec-space'>
        <div className="container text-center" >
        <p className=' text-black fs-2 d-inline-block px-3 my-5' data-aos="fade-up" style={{backgroundColor:'#00fe9c'}}>About Me</p>
        <h2 className='know' data-aos="fade-up">Know Me More</h2>
        </div>
      </div>
      <div className="container" data-aos="fade-up">
        <div className="row position-relative">
          <div className="col-md-8">
            <h2 className='zee mb-5'>HI, I'm <span className=' fw-bold '>Zeeshan Khursheed</span></h2>
            <p className='intro text-muted fw-bold'>
                🚀 MERN Stack Developer | Frontend Specialist
                Hello! I'm a MERN stack developer, skilled at translating concepts into powerful web applications. Specializing in HTML, CSS, Bootstrap, and Tailwind CSS, I excel in crafting visually striking and responsive interfaces. With a proven track record, I deliver results aligned with your vision and user expectations. Ready to enhance your web presence? Let's craft something extraordinary! 💻🚀✨
            </p>
          </div>
          <div className="col-md-4 py-3">
            <div className='text-center '>
            <h2 className='text-muted three m-0'>03</h2>
            <p className='year '>Years of <span className=''>Experience</span></p>
            </div>
            <div className='circle'></div>
          </div>
        </div>
        <div className="row m-0 pt-5 info">
          <div className="col-md-3 col-sm-6">
            <p className='fs-3 text-black-50 fw-bold'>Name:</p>
            <h2 className='fw-bold fs-2 '>Zeeshan Khursheed</h2>
          </div>
          <div className="col-md-4 col-sm-6">
            <p className='fs-3 text-black-50 fw-bold'>Email:</p>
            <h2 className='fw-bold fs-2 '>zeeshankhursheed680@gmail.com</h2>
          </div>
          <div className="col-md-3 col-sm-6">
            <p className='fs-3 text-black-50 fw-bold'>Date of Birth:</p>
            <h2 className='fw-bold fs-2 '>11 March, 1988</h2>
          </div>
          <div className="col-md-2 col-sm-6">
            <p className='fs-3 text-black-50 fw-bold'>From:</p>
            <h2 className='fw-bold fs-2 '>Islamabad,Pakistan</h2>
          </div>
         
        </div>
      </div>
    </>
  )
}

export default About
