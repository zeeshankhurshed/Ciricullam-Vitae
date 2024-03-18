import React, { useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import bootstrap from '/images/bootstrap.jpeg'
import css from '/images/css.webp';
import express from '/images/express.png';
import flutter from '/images/flutter.png';
import html from '/images/html.webp';
import js from '/images/js.png';
import mongodb from '/images/mongodb.png';
import next from '/images/next.png';
import node from '/images/node.png';
import react from '/images/react.png';
import tailwind from '/images/tailwind.jpeg';
import typescript from '/images/typescript.png';
import webdesign from '/images/webdesign.jpg';
import wordpress from '/images/wordpress.png';
 import Aos from 'aos';
import 'aos/dist/aos.css';
import './marque.css';

const MarqueeComponent = () => {
    useEffect(() => {
        Aos.init({duration:2000})
        }, [])
  return (
    <>
      <div className='title' style={{ textAlign: 'center', padding: '20px', backgroundColor: '#00fe9c' }} >
        <h2 className='text-center fw-bold my-5' style={{ fontSize: '4.5em' }} data-aos="fade-up">Discover My Technologies</h2>
        <p style={{ fontSize: '2em' }} data-aos="fade-up">Explore the cutting-edge technologies I use to create innovative solutions.</p>
      </div>

      <div className='my-5' data-aos="fade-up">
        <Marquee pauseOnHover speed={200}>
        <div className='px-5 ' >
          <img src={bootstrap} style={{width:'20rem', height:'20rem'}} alt="" />
        </div>
        <div className='px-5 ' >
          <img src={css} style={{width:'20rem', height:'20rem'}} alt="" />
        </div>
        <div className='px-5 ' >
          <img src={express} style={{width:'20rem', height:'20rem'}} alt="" />
        </div>
        <div className='px-5 ' >
          <img src={flutter} style={{width:'20rem', height:'20rem'}} alt="" />
        </div>
        <div className='px-5 ' >
          <img src={html} style={{width:'20rem', height:'20rem'}} alt="" />
        </div>
        <div className='px-5 ' >
          <img src={js} style={{width:'20rem', height:'20rem'}} alt="" />
        </div>
        <div className='px-5 ' >
          <img src={mongodb} style={{width:'20rem', height:'20rem'}} alt="" />
        </div>
        <div className='px-5 ' >
          <img src={next} style={{width:'20rem', height:'20rem'}} alt="" />
        </div>
        <div className='px-5 ' >
          <img src={node} style={{width:'20rem', height:'20rem'}} alt="" />
        </div>
        <div className='px-5 ' >
          <img src={react} style={{width:'20rem', height:'20rem'}} alt="" />
        </div>
        <div className='px-5 ' >
          <img src={tailwind} style={{width:'20rem', height:'20rem'}} alt="" />
        </div>
        <div className='px-5 ' >
          <img src={typescript} style={{width:'20rem', height:'20rem'}} alt="" />
        </div>
        <div className='px-5 ' >
          <img src={webdesign} style={{width:'20rem', height:'20rem'}} alt="" />
        </div>
        <div className='px-5 ' >
          <img src={wordpress} style={{width:'20rem', height:'20rem'}} alt="" />
        </div>
      </Marquee>
    </div>
    </>
  );
}

export default MarqueeComponent;

