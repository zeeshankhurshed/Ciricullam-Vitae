
import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import './carosuel.css'

const Carousel = () => {
  const  [text]  = useTypewriter({
    words: ['CIRICULLAM','Next JS Developer', 'MERN Developer', 'WordPress Developer'],
    loop: {},
    typeSpeed:120,
    deleteSpeed:80,
  });

  return (
   <>
     <div className='fs-1 fw-bold py-5'>
      <span className='py-5 free text-white-50' > HI, I'M A FREELANCER</span>  <br />
        <span className=' fw-bold py-5 text' >{text}</span>
        <span className='text-danger cursor' ><Cursor cursorStyle='☻'/></span>
        <p className='location text-white-50'  style={{fontSize:'2rem'}}> <span className='text-lowercase'>based in</span> <span className='text-lowercase text-capitalize'>Islamabad,Pakistan</span></p>
        <button type='button' className="btn fs-3 text-black fw-bold " style={{padding:'2rem 4rem', backgroundColor:'#00fe9c'}}>View My Works</button>
      </div>
      <svg className="arrows">
							<path className="a1" d="M0 0 L30 32 L60 0"></path>
							<path className="a2" d="M0 20 L30 52 L60 20"></path>
							<path className="a3" d="M0 40 L30 72 L60 40"></path>
						</svg>
   </>
    
  );
};

export default Carousel;
