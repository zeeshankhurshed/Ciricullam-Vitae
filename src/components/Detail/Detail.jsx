import React, { useState } from 'react';
import './detail.css';
import { Link } from 'react-router-dom';

const Detail = ({ projects, closeModal }) => {
  const firstThreeProjects = projects;
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // let modalOpen=()=>{
  //   if(isModalOpen){
  //     setIsModalOpen(false)
  //   }else{
  //     setIsModalOpen(true)
  //   }
  // }
  return (
    <>
      <div className="modal-overlay">
        <div className="modal-inner">
          <div className="container">
            <h2 className="fs-1 text-center my-5 fw-bold">Detailed Project 1</h2>

            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                {firstThreeProjects.map((projects, index) => (
                  <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                    <div className="row m-0">
                      <div className="col-md-7 carimg">
                        <img src={projects.images} className="d-block car" alt={`Slide ${index + 1}`} />
                        </div>

                      <div className="col-md-5 px-5">
                        <div className="carousel-caption cap p-0">
                          <h2 className="fs-1 fw-bold text-start p-0">Project info:</h2>
                          <p className="text-start fs-2 p-0 inf">{projects.info}</p>
                          <h2 className="fs-1 fw-bold text-start pt-5 ">Project Details:</h2>
                          <h2 className="fs-2 fw-bold text-start pt-5">Client: <span className='fw-light'>{projects.client}</span></h2>
                          <h2 className="fs-3 fw-bold text-start pt-5">Technologies: <span className='fw-light'>{projects.Technologies}</span></h2>
                          <h2 className="fs-2 fw-bold text-start pt-5">Industry: <span className='fw-light'>{projects.Industry}</span></h2>
                          <h2 className="fs-2 fw-bold text-start pt-5">Date: <span className='fw-light'>{projects.Date}</span></h2>
                          <h2 className="fs-2 fw-bold text-start pt-5 url">URL: <span className='px-5 py-3' style={{ backgroundColor: '#00fe9c' }}>www.example.com</span></h2>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="carousel-control-prev perv" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next nxt" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <Link to={'/'}>
          <button className="closebtn btn btn-danger m-5 text-black bg-none border-0 fs-2">X</button>
          </Link>
        </div>
      </div>
      {
  // isModalOpen ? <Modal modalOpen={modalOpen} /> :""
}
    </>
  );
}

export default Detail;
