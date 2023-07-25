import React from 'react';
// import Learn1 from '../images/Learn1.png';
import '../styles/style.css';
// import { Link } from 'react-router-dom';
import { Zoom } from "react-slideshow-image";
const images = [
  "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/118731966/original/b59ec49c9ad6cc74144bd368047e920e039bd4e0/do-creative-web-development.jpg",
  "https://inteng-storage.s3.amazonaws.com/img/iea/V0OyRR5JGQ/sizes/cprogrammingbundle_resize_md.jpg",

  "https://upload.wikimedia.org/wikipedia/commons/c/c8/Logo-java-830x460.jpg",
  "https://www.python.org/static/community_logos/python-logo-master-v3-TM.png"
];

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
};

const HomePage = () => {
  // return (
  //   <div className="container my-5">
  //     <div className="row pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
  //       <div className="col-lg-4 col-md-12 p-3 p-lg-5 pt-lg-3">
  //         <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Your course to success</h1>
  //         <p className="lead">Build skills with courses, certifictes and degree online from top universities and companies.</p>
  //         <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
  //           <Link className="nav-link" to="/courses">
  //             <button type="button" className="btn custom-button btn-lg px-4 me-md-2 fw-bold">Get Started</button>
  //           </Link>
  //         </div>
  //       </div>
  //       <div className="col-lg-7 col-md-12 npmoffset-lg-1 d-flex justify-content-end">
  //         <img className="image-right" src={Learn1} alt="Logo" width={700} />
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div>
      <div className="slide-container">
        <Zoom {...zoomOutProperties}>
          {images.map((each, index) => (
            <img
              
              key={index}
              style={{ width: "95%", height: "75%" }}
              src={each}
              alt=""
            />
          ))}
        </Zoom>
      </div>
      <br />
      <p style={{fontSize:20 ,fontStyle:'italic', fontWeight:500 ,paddingTop:5}}>
      Welcome to our e-learning home page, where the pursuit of knowledge knows no boundaries! We are thrilled to be your gateway to lifelong learning, offering an extensive array of courses and resources to ignite your curiosity and fuel your passion for growth. Whether you're a student seeking to excel in academics, a professional looking to upskill, or an enthusiast eager to explore new horizons, our platform is tailored to cater to your unique learning needs. Our team of dedicated educators and experts have meticulously crafted engaging and interactive content that ensures you embark on an enriching learning journey. With user-friendly navigation and a vibrant community of learners, the possibilities are boundless. Embrace the convenience of learning from anywhere at your own pace, as we equip you with the tools to unlock a world of knowledge and shape a brighter future. Join us today and let's embark on this transformative adventure together!
      </p>
    </div>
  );
};

export default HomePage;
