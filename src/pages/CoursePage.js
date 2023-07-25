import React from 'react';
import mern from '../images/mern.jpg';
import backend from '../images/backend.svg';
import front from '../images/front.jpeg';

const CoursePage = () => {
  return (
    <>
    <div className="album py-5 mt-5 bg-body-tertiary">
      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div className="col-10 col-sm-10 col-md-6 col-lg-4 justify-content-sm-center">
            <div className="card shadow-sm">
              <img className="card-img-top" src={front} width="100%" height="225" alt='Fronted' ></img>
              <div className="card-body">
                <h5 className="card-title">Frontend Developement</h5>
                <p className="card-text">Html, Css, Javascript, React JS</p>
                <button type="button" className="btn custom-button">View course</button>
              </div>
            </div>
          </div>
          <div className="col-10 col-sm-10 col-md-6 col-lg-4 justify-content-sm-center">
            <div className="card shadow-sm">
            <img className="card-img-top" src={backend} width="100%" height="225" alt='Backend'></img>
            <div className="card-body">
                <h5 className="card-title">Backend Developement</h5>
                <p className="card-text">Node JS, Python, Express JS, Django</p>
                <button type="button" className="btn custom-button">View course</button>
              </div>
            </div>
          </div>
          <div className="col-10 col-sm-10 col-md-6 col-lg-4 justify-content-sm-center">
            <div className="card shadow-sm">
            <img className="card-img-top" src={mern} width="100%" height="225" alt='MERN'></img>
              <div className="card-body">
                <h5 className="card-title">Mern Stack Developement</h5>
                <p className="card-text">Mongo DB, Express JS, React JS, Node JS</p>
                <button type="button" className="btn custom-button">View course</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default CoursePage;
