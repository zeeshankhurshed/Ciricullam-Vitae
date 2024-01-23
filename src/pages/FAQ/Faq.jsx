import React, { useEffect, useState } from "react";
import "./faq.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Faq = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [isLightOn, setIsLightOn] = useState(false);
  const [isAccordionOpenOne, setIsAccordionOpenOne] = useState(false);
  const [isAccordionOpenTwo, setIsAccordionOpenTwo] = useState(false);
  const [isAccordionOpenThree, setIsAccordionOpenThree] = useState(false);
  const [isAccordionOpenFour, setIsAccordionOpenFour] = useState(false);
  const [isAccordionOpenFive, setIsAccordionOpenFive] = useState(false);

  const toggleLightAndAccordion = (accordionNumber) => {
    const newLightState = !isLightOn;

    let pic;
    if (accordionNumber === 1) {
      setIsAccordionOpenOne(!isAccordionOpenOne);
      setIsAccordionOpenTwo(false);
      pic = newLightState
        ? "https://www.w3schools.com/js/pic_bulbon.gif"
        : "https://www.w3schools.com/js/pic_bulboff.gif";
    } else if (accordionNumber === 2) {
      setIsAccordionOpenTwo(!isAccordionOpenTwo);
      setIsAccordionOpenOne(false);
      pic = newLightState
        ? "https://www.w3schools.com/js/pic_bulbyellow.gif"
        : "https://www.w3schools.com/js/pic_bulboff.gif";
    } else if (accordionNumber === 3)  {
      setIsAccordionOpenThree(!isAccordionOpenThree);
      setIsAccordionOpenTwo(false);
      pic = newLightState
        ? "https://www.w3schools.com/js/pic_bulbyellow.gif"
        : "https://www.w3schools.com/js/pic_bulboff.gif";
    }else if (accordionNumber === 4)  {
      setIsAccordionOpenFour(!isAccordionOpenFour);
      setIsAccordionOpenThree(false);
      pic = newLightState
        ? "https://www.w3schools.com/js/pic_bulbyellow.gif"
        : "https://www.w3schools.com/js/pic_bulboff.gif";
    }else if (accordionNumber === 5)  {
      setIsAccordionOpenFive(!isAccordionOpenFour);
      setIsAccordionOpenFour(false);
      pic = newLightState
        ? "https://www.w3schools.com/js/pic_bulbyellow.gif"
        : "https://www.w3schools.com/js/pic_bulboff.gif";
    }

    setIsLightOn(newLightState);
    document.getElementById("myBulb").src = pic;
  };

  return (
    <>
      <div className="container mb-5">
        <div className="row m-0 faq">
          <div className="col-md-6">
            <div className=" space">
              <div className="container">
                <p
                  className="text-black fs-3 d-inline-block px-3"
                  style={{ backgroundColor: "#00fe9c" }}
                  data-aos="fade-up"
                >
                  FAQ
                </p>
                <h2 className="quest fw-bold" data-aos="fade-up">
                  Have any questions?
                </h2>
              </div>
            </div>

            <div className="acordian-wrapper " data-aos="fade-up">
              <div className="accordion faq" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className={`accordion-button collapsed bg-white fs-3 fw-bold text-black-50 ${
                        isAccordionOpenOne ? "bulb-on" : ""
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded={isAccordionOpenOne ? "true" : "false"}
                      aria-controls="collapseOne"
                      onClick={() => toggleLightAndAccordion(1)}
                    >
                      What is Callum?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className={`accordion-collapse collapse ${
                      isAccordionOpenOne ? "show" : ""
                    }`}
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p className="fs-4">
                        {" "}
                        It is hidden by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element. These classes control the overall appearance,
                        as well as the showing and hiding via CSS transitions.
                        You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just
                        about any HTML can go within the though the transition
                        does limit overflow.
                      </p>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className={`accordion-button collapsed bg-white fs-3 fw-bold text-black-50 ${
                        isAccordionOpenTwo ? "bulb-on" : ""
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded={isAccordionOpenTwo ? "true" : "false"}
                      aria-controls="collapseTwo"
                      onClick={() => toggleLightAndAccordion(2)}
                    >
                      How Can I Help you?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className={`accordion-collapse collapse ${
                      isAccordionOpenTwo ? "show" : ""
                    }`}
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p className="fs-4">
                        {" "}
                        It is hidden by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element. These classes control the overall appearance,
                        as well as the showing and hiding via CSS transitions.
                        You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just
                        about any HTML can go within the though the transition
                        does limit overflow.
                      </p>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                  <button
                      className={`accordion-button collapsed bg-white fs-3 fw-bold text-black-50 ${
                        isAccordionOpenThree ? "bulb-on" : ""
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded={isAccordionOpenThree ? "true" : "false"}
                      aria-controls="collapseThree"
                      onClick={() => toggleLightAndAccordion(3)}
                    >
                      Simple process for workflow?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className={`accordion-collapse collapse ${
                      isAccordionOpenThree ? "show" : ""
                    }`}
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p className="fs-4">
                        {" "}
                        It is hidden by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element. These classes control the overall appearance,
                        as well as the showing and hiding via CSS transitions.
                        You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just
                        about any HTML can go within the though the transition
                        does limit overflow.
                      </p>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                  <button
                      className={`accordion-button collapsed bg-white fs-3 fw-bold text-black-50 ${
                        isAccordionOpenFour ? "bulb-on" : ""
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded={isAccordionOpenFour ? "true" : "false"}
                      aria-controls="collapseFour"
                      onClick={() => toggleLightAndAccordion(4)}
                    >
                      Is Callum a multipurpose template?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className={`accordion-collapse collapse ${
                      isAccordionOpenFour ? "show" : ""
                    }`}
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p className="fs-4">
                        {" "}
                        It is hidden by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element. These classes control the overall appearance,
                        as well as the showing and hiding via CSS transitions.
                        You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just
                        about any HTML can go within the though the transition
                        does limit overflow.
                      </p>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                  <button
                      className={`accordion-button collapsed bg-white fs-3 fw-bold text-black-50 ${
                        isAccordionOpenFive ? "bulb-on" : ""
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded={isAccordionOpenFive ? "true" : "false"}
                      aria-controls="collapseFive"
                      onClick={() => toggleLightAndAccordion(5)}
                    >
                      Why responsive on page template?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className={`accordion-collapse collapse ${
                      isAccordionOpenFive ? "show" : ""
                    }`}
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p className="fs-4">
                        {" "}
                        It is hidden by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element. These classes control the overall appearance,
                        as well as the showing and hiding via CSS transitions.
                        You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just
                        about any HTML can go within the though the transition
                        does limit overflow.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6" data-aos="fade-up">
            <div id="bodyHolder">
              <div className="bulbHolder ">
                <img
                  src={
                    isLightOn
                      ? "/images/b-1.png"
                      : "/images/b-green.png"
                  }
                  alt="light"
                  id="myBulb"
                  style={{ width: "20rem" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
