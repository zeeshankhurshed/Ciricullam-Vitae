import React, { useEffect, useState } from 'react';
import './portfolio.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Portfolio = ({ projects }) => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState([]);

  const filterProjects = (category) => {
    setFilter(category);
  };

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((proj) => proj.category === filter);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

      
  return (
    <>
      <div className="bg-light">
        <div className="lead-text space">
          <div className="container text-center">
            <p className="text-black fs-2 d-inline-block px-3" data-aos="fade-up" style={{ backgroundColor: '#00fe9c' }}>
              Portfolio
            </p>
            <h2 className="know rec" data-aos="fade-up">Some of my most recent projects</h2>
          </div>
        </div>

        <div className="buttons pb-5" data-aos="fade-up">
          <ul className="list-unstyled d-flex justify-content-center align-items-center">
            <li className="px-3">
              <button className="border-0 fs-2 fw-bold text-muted" onClick={() => filterProjects('all')}>
                All
              </button>
            </li>
            <li className="px-3">
              <button className="border-0 fs-2 fw-bold text-muted" onClick={() => filterProjects('Details')}>
                Details
              </button>
            </li>
            <li className="px-3">
              <button className="border-0 fs-2 fw-bold text-muted" onClick={() => filterProjects('Mokeups')}>
                Mockups
              </button>
            </li>
            <li className="px-3">
              <button className="border-0 fs-2 fw-bold text-muted" onClick={() => filterProjects('YouTube Videos')}>
                YouTube Videos
              </button>
            </li>
            <li className="px-3">
              <button className="border-0 fs-2 fw-bold text-muted" onClick={() => filterProjects('Vimeo Videos')}>
                Vimeo Videos
              </button>
            </li>
          </ul>
        </div>

          <div className="container mb-5">
            
          <div className="row m-0 mb-5">
            {filteredProjects.map((proj) => (
              <div className="col-md-4 p-3" key={proj.id} data-aos="fade-up">
                <div className="bg">
                  <img src={proj.images} alt={proj.name} />
                  <Link to={`/detail/${proj.id}`}>
                    <div className="overlay">
                      <h2 className="fs-1 fw-bold text-white">{proj.category}</h2>
                      <p className="fs-3 text-white">{proj.name}</p>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
      </div>
      
          </div>
          <div className='hire d-flex justify-content-center align-items-center' >
            <div className='text-center' data-aos="fade-up">
              <h2 className='text-white fw-bold py-5' >Interested in Working With Me</h2>
              <button type='button' className="btn px-5 py-3 fs-3 hir mt-3" style={{backgroundColor:'#00fe9c'}}>
                Hire Me!
              </button>
            </div>
      </div>
 
    </>
  );
};

export default Portfolio;
