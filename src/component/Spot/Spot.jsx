import React from 'react'
import check from '../../images/check.svg'
import './Spot.css'
function Spot() {
  return (
    <div className="spots container  d-flex flex-column justify-content-center align-items-center mb-3">
    <h1>
      <strong className="text-white">
        Don’t settle for the standard IV drip service...
      </strong>
    </h1>
    <p className="">Join our tribe today of wellness-seekers TODAY</p>

    <p className="">and enjoy a personalized & integrative</p>

    <p className=""> approach to IV nutrient therapy!</p>
    <div className="d-flex">
        <img
          className="arrow"
          src="https://assets.cdn.msgsndr.com/o4yMDdWvX9IjYu0LLupA/media/07b4853a-cfea-40a9-a27b-17612d53fdaf.png"
          alt=""
        />
        <button className="price p-2 button-offer">
          <h3 className="">Secure My Spot</h3>
        </button>
        <img
          className="arrow"
          src="https://assets.cdn.msgsndr.com/o4yMDdWvX9IjYu0LLupA/media/6cd9920d-0dbd-40fe-abe8-70ad0f0b2e8a.png"
          alt=""
        />
      </div>
     <div className="container check-box text-center mt-5"> 
    <img className="mb-2 check-img" src={check} alt="" />
    <p className="check-box-text">
      HURRY! <strong>ONLY 3 SPOTS REMAINING</strong> FOR THIS MONTH
    </p>
     </div> 
  </div>

  )
}

export default Spot