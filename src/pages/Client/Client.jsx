import React, { useEffect } from "react";
import "./client.css";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa";
import { IoLogoBehance } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Client = () => {
  useEffect(() => {
    Aos.init({duration:2000})
    }, [])
  return (
    <>
      <div className="" style={{ backgroundColor: "#939597" }}>
        <div className="lead-text space mt-5">
          <div className="container text-center ">
            <p 
              className="text-black fs-2 d-inline-block px-3"
              style={{ backgroundColor: "#00fe9c" }}
            >
              Client Speak
            </p>
            <h2 className="know text-white say" >What Some of my client say</h2>
          </div>
        </div>

        <div className="carosuel-wrapper" data-aos="fade-up">
          <div className="container">

          
          <div
            id="carouselExampleDark"
            className="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="5000">
                <p className="fs-2 text-white text-center">"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga necessitatibus iure quis quasi praesentium nisi eius, nihil enim quae modi. Architecto obcaecati ad provident pariatur natus odit quisquam blanditiis".</p>
              <div className="d-flex justify-content-center align-items-center" style={{paddingTop:'2rem', paddingBottom:'16rem'}}>
              <img src="https://picsum.photos/800/400?random=1" className="d-block"  alt="First Slide"/>
              </div>
                
                <div className="carousel-caption  "  >
                  <h3 className="text-white fw-bold">Jay Shah</h3>
                  <p className="text-white fs-3">
                    Some representative placeholder content for the first slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000" >
              <p className="fs-2 text-white text-center">"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga necessitatibus iure quis quasi praesentium nisi eius, nihil enim quae modi. Architecto obcaecati ad provident pariatur natus odit quisquam blanditiis." </p>
              <div className="d-flex justify-content-center align-items-center" style={{paddingTop:'2rem', paddingBottom:'16rem'}}>
              <img src="https://picsum.photos/800/400?random=1" className="d-block"  alt="Second Slide"/>
              </div>
                <div className="carousel-caption ">
                  <h3 className="text-white fw-bold">Patrick Carry</h3>
                  <p className="text-white fs-3">
                    Some representative placeholder content for the second
                    slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
              <p className="fs-2 text-white text-center">"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga necessitatibus iure quis quasi praesentium nisi eius, nihil enim quae modi. Architecto obcaecati ad provident pariatur natus odit quisquam blanditiis." </p>
              <div className="d-flex justify-content-center align-items-center" style={{paddingTop:'2rem', paddingBottom:'16rem'}}>
              <img src="https://picsum.photos/800/400?random=1" className="d-block"  alt="Three Slide"/>
              </div>

                <div className="carousel-caption " >
                <h3 className="text-white fw-bold">Dennis Jeques</h3>
                  <p className="text-white fs-3">
                    Some representative placeholder content for the third slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
              <p className="fs-2 text-white text-center">"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga necessitatibus iure quis quasi praesentium nisi eius, nihil enim quae modi. Architecto obcaecati ad provident pariatur natus odit quisquam blanditiis."</p>
              <div className="d-flex justify-content-center align-items-center" style={{paddingTop:'2rem', paddingBottom:'16rem'}}>
              <img src="https://picsum.photos/800/400?random=1" className="d-block"  alt="Four Slide"/>
              </div>

                <div className="carousel-caption " >
                <h3 className="text-white fw-bold">Chris Tom</h3>
                  <p className="text-white fs-3">
                    Some representative placeholder content for the fourth
                    slide.
                  </p>
                </div>
              </div>
            </div>

            <button className="carousel-control-prev"  type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <div className="prev d-flex justify-content-center align-items-center ">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </div >
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
  <div className="prev d-flex justify-content-center align-items-center ">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    </div>
    <span className="visually-hidden">Next</span>
  </button>
          </div>
        </div>
        </div>
      </div>

      <div className="self" style={{ backgroundColor: "#00fe9c" }} >
        <div className="container " >
          <div className="row m-0">
            <div className="col-md-6" data-aos="fade-up">
              <h2 className="fw-bold pb-5">Let's get in touch</h2>
              <p className="pe-3">
                I enjoy discussing new projects and design challanges.Please
                share as much ifo, as possible so we can get most out of our
                first catch-up.{" "}
              </p>
              <h3 className="pt-5 fw-bold">Living In:</h3>
              <p className="loc">Tarnol Islamabad, Pakistan</p>
              <h3 className="pt-5 fw-bold">Living In:</h3>
              <p className="loc">+(92)345 5231199</p>
              <div className="social-icons">
                <ul className="list-unstyled d-flex pt-5">
                  <li className="">
                    <a href="" className="fs-1 text-black-50">
                      <FaTwitter />
                    </a>
                  </li>
                  <li className="px-4">
                    <a href="" className="fs-1 text-black-50">
                      <FaFacebook />
                    </a>
                  </li>
                  <li className="">
                    <a href="" className="fs-1 text-black-50">
                      <FaInstagram />
                    </a>
                  </li>
                  <li className="px-4">
                    <a href="" className="fs-1 text-black-50">
                      <FaGithub />
                    </a>
                  </li>
                  <li className="">
                    <a href="https://dribbble.com/zeeshankhursheed" className="fs-1 text-black-50">
                      <FaDribbble />
                    </a>
                  </li>
                  <li className="px-4">
                    <a href="https://www.behance.net/zeeshankhurshe1" className="fs-1 text-black-50">
                      <IoLogoBehance />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-up">
              <h2 className="fw-bold pb-5">Estimate your Project?</h2>
              <form className="row g-3">
                <div className="col-md-12">
                  <label
                    for="validationDefault01"
                    className="form-label fs-3 pb-3"
                  >
                    What is Your Name:
                  </label>
                  <input
                    type="text"
                    className="form-control py-3"
                    id="validationDefault01"
                    value=""
                    required
                  />
                </div>
                <div className="col-md-12">
                  <label
                    for="validationDefault02"
                    className="form-label fs-3 py-3"
                  >
                    Your Email Address:
                  </label>
                  <input
                    type="text"
                    className="form-control py-3"
                    id="validationDefault02"
                    value=""
                    required
                  />
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label fs-3 py-3">
                      How can i help you?
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="7"
                    ></textarea>
                  </div>
                </div>

                <div className="col-12 my-5">
                  <button
                    className="btn px-5 py-3 btn-outline-dark fs-3 bg-dark text-white"
                    type="submit"
                  >
                    Send{" "}
                    <span className="px-3">
                      <FaArrowRight />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Client;
