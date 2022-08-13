import React from 'react'
import './Experience.css'
import icon1 from '../../images/icon1.svg'
import icon2 from '../../images/icon2.svg'
import icon3 from '../../images/icon3.svg'
function Experience() {
  return (
    <div className="container testimonial-section d-flex flex-column">
        <div className="container text-center ">
          <h1>
            <strong>Experience the VYVE Difference</strong>
          </h1>
          <p className='p-experience'>
            As an Integrative Medicine clinic specializing in IV Therapy, we
            build a COMPLETE wellness plan <br />
            (including IV drips)to support your overall performance goals!
          </p>
        </div>
        <div className="container my-5 item d-flex">
          <div className="container text-center">
            <img src={icon1} alt="" />
            <h4 className="my-3 text-center">
              <strong>Board-Certified Physicians</strong>
            </h4>
            <p>
              Treatment plans developed and overseen by in-house doctors with
              specialty training.
            </p>
          </div>
          <div className="container item  text-center">
            <img src={icon2} alt="" />
            <h4 className="my-3 text-center">
              <strong>Board-Certified Physicians</strong>
            </h4>
            <p>
              Treatment plans developed and overseen by in-house doctors with
              specialty training.
            </p>
          </div>
          <div className="container item  text-center">
            <img src={icon3} alt="" />
            <h4 className="my-3 text-center">
              <strong>Board-Certified Physicians</strong>
            </h4>
            <p>
              Treatment plans developed and overseen by in-house doctors with
              specialty training.
            </p>
          </div>
        </div>
      </div>
  )
}

export default Experience
