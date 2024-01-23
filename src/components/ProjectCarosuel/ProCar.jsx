import React from 'react'
import './procar.css'
// import { projects } from '../../db/db';

const ProCar = ({projects}) => {
  const firstThreeProjects = projects.slice(0, 3);
 
  return (
    <>
  <div className="container">
  <h2 className="fs-1 text-center my-5 fw-bold">Detailed Project 1</h2>

  <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
    <div className="carousel-inner">
    <div className="carousel-inner">
    {firstThreeProjects.map((project, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <div className="row m-0">
                <div className="col-md-7">
                <img src={project.images} className="d-block w-100 car" alt={`Slide ${index + 1}`} />
                </div>
             
              <div className="col-md-5 px-5">
                <div className="carousel-caption cap p-0">
                  <h2 className="fs-1 fw-bold text-start p-0">Project info:</h2>
                  <p className="text-start fs-2 p-0">{project.info}</p>
                  <h2 className="fs-1 fw-bold text-start pt-5">Project Details:</h2>
                  <h2 className="fs-2 fw-bold text-start pt-5">Client: <span className='fw-light'>{project.client}</span></h2>
                  <h2 className="fs-3 fw-bold text-start pt-5">Technologies: <span className='fw-light'>{project.Technologies}</span></h2>
                  <h2 className="fs-2 fw-bold text-start pt-5">Industry: <span className='fw-light'>{project.Industry}</span></h2>
                  <h2 className="fs-2 fw-bold text-start pt-5">Date: <span className='fw-light'>{project.Date}</span></h2>
                  <h2 className="fs-2 fw-bold text-start pt-5">URL: <span className='px-5 py-3' style={{ backgroundColor: '#00fe9c' }}>www.example.com</span></h2>
                </div>
              </div>
              </div>
            </div>
          ))}
        </div>

      {/* <div className="carousel-item">
        <div className="row m-0">
          <div className="col-md-7">
            <img src="/public/images/pic 2.png" className="d-block w-100 car" alt="Second slide"/>
          
          </div>
          <div className="col-md-5 px-5">
          <div className="carousel-caption cap p-0">
          <h2 className='fs-1 fw-bold text-start p-0'>Project info:</h2>
              <p className='text-start fs-1 p-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore illo, dolor error quia deserunt unde. Tempora inventore itaque ad dolor voluptates rerum quidem dolores.</p>
              <h2 className='fs-1 fw-bold text-start pt-5'>Project Details:</h2>

            </div>
          </div>
        </div>
      </div>

      <div className="carousel-item">
        <div className="row m-0">
          <div className="col-md-7">
            <img src="/public/images/pic 3.png" className="d-block w-100 car" alt="Third slide"/>
           
          </div>
          <div className="col-md-5">
          <div className="carousel-caption cap p-0">
          <h2 className='fs-1 fw-bold text-start p-0'>Project info:</h2>
              <p className='text-start fs-1 p-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore illo, dolor error quia deserunt unde. Tempora inventore itaque ad dolor voluptates rerum quidem dolores.</p>
              <h2 className='fs-1 fw-bold text-start pt-5'>Project Details:</h2>

            </div>
          </div>
        </div>
      </div> */}

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

    </>
  );
}



export default ProCar
