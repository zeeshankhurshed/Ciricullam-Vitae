import React, { useEffect } from 'react'
import './resume.css'
import CV from '../../../public/images/CV.pdf'
import Aos from 'aos';
import 'aos/dist/aos.css';
import MarqueeComponent from '../../components/Marquee/MarqueeComponent';

const Resume = () => {
  useEffect(() => {
    Aos.init({duration:2000})
    }, [])
  return (
    <>
       <div className='lead-text s-space '>
        <div className="container text-center " >
        <p className='text-black fs-2 d-inline-block px-3 ' data-aos="fade-up" style={{backgroundColor:'#00fe9c'}}>Resume</p>
        <h2 className='know' data-aos="fade-up">A summary of My Resume</h2>
        </div>
    </div>
    <div className="container" data-aos="fade-up">

    <div className="row p-0 cation">
      <div className="col-md-6 ">
      <h2 className='fw-bold edu pb-5 px-0'>My Education</h2>
        <div className='my ps-3'>
        <div>
          <h3 className=' bach'>Bachelor of Science</h3>
         <h4 className='asgh fw-bold text-muted'>Asghar Mall College / 2005-2007</h4>
          <p className='fs-2 text-muted pt-3 pb-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur quo cupiditate recusandae iste minus modi doloribus possimus voluptate.</p>
          <hr />
      </div>
        <div className='pt-5'>
          <h3 className=' bach'>Intermediate</h3>
         <h4 className='asgh fw-bold text-muted'>F-G H-9 College / 2002-2005</h4>
          <p className='fs-2 text-muted pt-3 pb-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur quo cupiditate recusandae iste minus modi doloribus possimus voluptate.</p>
          <hr />
           </div>
        <div className='pt-5'>
          <h3 className=' bach'>Matric</h3>
         <h4 className='asgh fw-bold text-muted'>Pilot Model High School / 2000-2002</h4>
          <p className='fs-2 text-muted pt-3 pb-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur quo cupiditate recusandae iste minus modi doloribus possimus voluptate.</p>
          <hr />
            </div>
        </div>
      
        </div>

        <div className="col-md-6 exp" >
      <h2 className='fw-bold edu pb-5 px-0'>My Experience</h2>
        <div className='my ps-3 '>
        <div>
          <h3 className=' bach'>Front End Developer</h3>
         <h4 className='asgh fw-bold text-muted'> Super Tech Institute/ 2021-current</h4>
          <p className='fs-2 text-muted pt-3 pb-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur quo cupiditate recusandae iste minus modi doloribus possimus voluptate.</p>
          <hr />
      </div>
        <div className='pt-5'>
          <h3 className=' bach'>Mern Developer </h3>
         <h4 className='asgh fw-bold text-muted'>Super Tech Institute /2023 -current</h4>
          <p className='fs-2 text-muted pt-3 pb-5' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur quo cupiditate recusandae iste minus modi doloribus possimus voluptate.</p>
          <hr />
            </div>
        <div className='pt-5'>
          <h3 className=' bach'>HTML Developer</h3>
         <h4 className='asgh fw-bold text-muted'>Super Tech Institute/ 2021-current</h4>
          <p className='fs-2 text-muted pt-3 pb-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur quo cupiditate recusandae iste minus modi doloribus possimus voluptate.</p>
          <hr />
            </div>
        </div>
      
        </div>
    </div>
      
    </div>
    
    <div className="container s-space">
      <h2 className='fw-bold skill' data-aos="fade-up">My Skills</h2>
      <div className="row p-0" data-aos="fade-up">
        {/* <div className="col-md-6 pt-5">
          <div className='d-flex justify-content-between align-items-center'>
            <h5 className='fw-bold fs-3'>Web Designing</h5>
            <p className='fw-bold fs-3'>90%</p>
          </div>
          <div className="progress ">
        <div className="progress-bar" role="progressbar" style={{width: '90%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
        </div>
        </div> */}

        <div className="col-md-6 pt-5">
          <div className='d-flex justify-content-between align-items-center'>
            <h5 className='fw-bold fs-3'>HTML</h5>
            <p className='fw-bold fs-3'>95%</p>
          </div>
          <div className="progress ">
        <div className="progress-bar" role="progressbar" style={{width: '95%'}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">95%</div>
        </div>
        </div>

        <div className="col-md-6 pt-5">
          <div className='d-flex justify-content-between align-items-center'>
            <h5 className='fw-bold fs-3'>CSS</h5>
            <p className='fw-bold fs-3'>95%</p>
          </div>
          <div className="progress ">
        <div className="progress-bar" role="progressbar" style={{width: '95%'}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">95%</div>
        </div>
        </div>

        <div className="col-md-6 pt-5">
          <div className='d-flex justify-content-between align-items-center'>
            <h5 className='fw-bold fs-3'>Next Js</h5>
            <p className='fw-bold fs-3'>85%</p>
          </div>
          <div className="progress ">
        <div className="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
        </div>
        </div>

        <div className="col-md-6 pt-5">
          <div className='d-flex justify-content-between align-items-center'>
            <h5 className='fw-bold fs-3'>React Js</h5>
            <p className='fw-bold fs-3'>85%</p>
          </div>
          <div className="progress ">
        <div className="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
        </div>
        </div>

        <div className="col-md-6 pt-5">
          <div className='d-flex justify-content-between align-items-center'>
            <h5 className='fw-bold fs-3'>MERN</h5>
            <p className='fw-bold fs-3'>75%</p>
          </div>
          <div className="progress ">
        <div className="progress-bar" role="progressbar" style={{width: '60%'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
        </div>
        </div>

        <div className="col-md-6 pt-5">
          <div className='d-flex justify-content-between align-items-center'>
            <h5 className='fw-bold fs-3'>WordPress</h5>
            <p className='fw-bold fs-3'>75%</p>
          </div>
          <div className="progress ">
        <div className="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
        </div>
        </div>

        <div className="col-md-6 pt-5">
          <div className='d-flex justify-content-between align-items-center'>
            <h5 className='fw-bold fs-3'>Bootstrap</h5>
            <p className='fw-bold fs-3'>95%</p>
          </div>
          <div className="progress ">
        <div className="progress-bar" role="progressbar" style={{width: '95%'}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">95%</div>
        </div>
        </div>

        <div className="col-md-6 pt-5">
          <div className='d-flex justify-content-between align-items-center'>
            <h5 className='fw-bold fs-3'>Tailwind</h5>
            <p className='fw-bold fs-3'>80%</p>
          </div>
          <div className="progress ">
        <div className="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
        </div>
        </div>

        <div className="col-md-6 pt-5">
          <div className='d-flex justify-content-between align-items-center'>
            <h5 className='fw-bold fs-3'>Javascript</h5>
            <p className='fw-bold fs-3'>75%</p>
          </div>
          <div className="progress ">
        <div className="progress-bar" role="progressbar" style={{width: '60%'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
        </div>
        </div>

        <div className="col-md-6 pt-5">
          <div className='d-flex justify-content-between align-items-center'>
            <h5 className='fw-bold fs-3'>TypeScript</h5>
            <p className='fw-bold fs-3'>60%</p>
          </div>
          <div className="progress ">
        <div className="progress-bar" role="progressbar" style={{width: '60%'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
        </div>
        </div>

        </div>
    </div>

    <div className="container d-flex justify-content-center dwn" data-aos="fade-up">
      <a href={CV} download="CV"  className='resume fw-bold fs-4' >Download CV</a>
    </div>

    <div>
      <MarqueeComponent/>
    </div>
    </>
  )
}

export default Resume
