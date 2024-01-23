import React, { useEffect } from 'react'
import './what.css';
import Card from '../../components/Card/Card';
import Aos from 'aos';
import 'aos/dist/aos.css';



const WhatIDo = ({detail}) => {
  useEffect(() => {
    Aos.init({duration:2000})
    }, [])
  return (
    <>
    <div className='bg-light' style={{marginBottom:'3rem!important'}}>
       <div className='lead-text se-space you'>
        <div className="container text-center " >
        <p className='text-black fs-2 d-inline-block px-3' data-aos="fade-up" style={{backgroundColor:'#00fe9c'}}>What I Do?</p>
        <h2 className='' style={{fontSize:'5rem'}} data-aos="fade-up">How i can help your next project</h2>
        </div>
    </div>
    <div className="container bg-light" data-aos="fade-up" >
      <div className="row" >
        {
          detail.map(detail =>{
            return (
              <div key={detail.id} className="col-md-4 mb-5">
                <Card detail={detail}/>
              </div>
            )
          })
        }
      </div>
    </div>
      </div>
    </>
  )
}

export default WhatIDo
