import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from 'react-bootstrap';
import './Testimonial2.css'
function Testimonial2() {
  
  return (
    <section className="raitng-2 container testimonial-section d-flex flex-column  align-items-center mb-3">
    <div className="text-center">
      <h1>
        <strong>What Our Charlotte Patients Say</strong>
      </h1>
      <h1>
        <strong>About IV Hydration at VYVE</strong>
      </h1>
    </div>
  
    <Carousel indicators={true}
    >
      <Carousel.Item interval={1000}>
       <div className='carousel-box d-flex'>
        <div className=" container mx-3">
                <span className="fa fa-star checked mx-0.5 mx-1"></span>
                <span className="fa fa-star checked mx-0.5 mx-1"></span>
                <span className="fa fa-star checked mx-0.5 mx-1"></span>
                <span className="fa fa-star checked mx-0.5 mx-1"></span>
                <span className="fa fa-star checked mx-0.5 mx-1"></span>
                <p>
                  “Awesome customer service! Very friendly and cares about the
                  comfort of the patients. Dr. Haas is very detailed and
                  explains everything and ask patient
                </p>
              </div>
              <div className=" container mx-3 div-2">
                <span className="fa fa-star checked mx-0.5 mx-1"></span>
                <span className="fa fa-star checked mx-0.5 mx-1"></span>
                <span className="fa fa-star checked mx-0.5 mx-1"></span>
                <span className="fa fa-star checked mx-0.5 mx-1"></span>
                <span className="fa fa-star checked mx-0.5 mx-1"></span>
                <p>
                  “They are great!! The nurses are so sweet and diligent. Dr.
                  Haas is amazing and really tries to get the best care for you
                  as an individual. They don’t
                </p>
              </div></div>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <div className='carousel-box d-flex'>
        <div className=" container mx-3">
                <span className="fa fa-star checked mx-0.5 mx-1"></span>
                <span className="fa fa-star checked mx-0.5 mx-1"></span>
                <span className="fa fa-star checked mx-0.5 mx-1"></span>
                <span className="fa fa-star checked mx-0.5 mx-1"></span>
                <span className="fa fa-star checked mx-0.5 mx-1"></span>

                <p>
                  The facility is very clean and the overall design and ambience
                  of the space is very calming and peaceful.
                </p>
              </div>
              <div className=" container mx-3 div-2">
                <span className="fa fa-star checked mx-0.5 mx-1"></span>
                <span className="fa fa-star checked mx-0.5 mx-1"></span>
                <span className="fa fa-star checked mx-0.5 mx-1"></span>
                <span className="fa fa-star checked mx-0.5 mx-1"></span>
                <span className="fa fa-star checked mx-0.5 mx-1"></span>

                <p>
                  The facility is very clean and the overall design and ambience
                  of the space is very calming and peaceful.
                </p>
              </div>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <div className='carousel-box d-flex'>
        <div className=" container mx-3">
                <span className="fa fa-star checked mx-0.5 mx-1"></span>
                <span className="fa fa-star checked mx-0.5 mx-1"></span>
                <span className="fa fa-star checked mx-0.5 mx-1"></span>
                <span className="fa fa-star checked mx-0.5 mx-1"></span>
                <span className="fa fa-star checked mx-0.5 mx-1"></span>

                <p>
                  “I feel so fortunate to have discovered Dr. Haas and his
                  amazing team! I found them post-COVID after suffering from
                  severe fatigue and memory
                </p>
              </div>
              <div className=" container mx-3 div-2">
                <span className="fa fa-star checked mx-0.5 mx-1"></span>
                <span className="fa fa-star checked mx-0.5 mx-1"></span>
                <span className="fa fa-star checked mx-0.5 mx-1"></span>
                <span className="fa fa-star checked mx-0.5 mx-1"></span>
                <span className="fa fa-star checked mx-0.5 mx-1"></span>

                <p>
                  The facility is very clean and the overall design and ambience
                  of the space is very calming and peaceful.
                </p>
              </div>
        </div>
      </Carousel.Item>
    </Carousel>


    <button className="btn-test my-7">Join the VYVE family</button>
  </section>
  )
}

export default Testimonial2