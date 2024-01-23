import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaArrowCircleUp } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div style={{ background: "#333333" }}>
        <div className="container py-5">
          <div className="row m-0 py-5" data-aos="fade-up">
            <div className="col-md-6 ">
              <p className="text-white fs-4 text-center">
                Copywrite @ 2024{" "}
                <a
                  href="#"
                  className="text-capitalize"
                  style={{ color: "#00fe9c", textDecoration: "underline" }}
                >
                  Ciricullam
                </a>
                .All Rights Reserved.
              </p>
            </div>
            <div className="col-md-6 ">
              <p className="text-white fs-4 text-center">
                Designed by{" "}
                <a
                  href="#"
                  className="text-capitalize"
                  style={{ color: "#00fe9c", textDecoration: "underline" }}
                >
                  Zeeshan Khursheed
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {showButton && (
        <FaArrowCircleUp
          id="button"
          className="show"
          onClick={scrollToTop}
          data-aos="fade-up"
        >
          Scroll to Top
        </FaArrowCircleUp>
      )}
    </>
  );
};

export default Footer;
