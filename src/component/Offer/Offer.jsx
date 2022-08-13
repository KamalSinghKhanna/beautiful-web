import React from 'react'
import './Offer.css'
import check from '../../images/check.svg'
function Offer() {
  return (
    <div className=" spots2 container  d-flex flex-column  align-items-center mb-3">
    <h1 className="my-3">
      <strong className="text-white">NEW PATIENT SPECIAL OFFER</strong>
    </h1>
    <p className="p-offer">Enjoy your 1st Infusion PLUS:</p>
    <div className="d-flex offer-item mt-3">
      <div>
        <img
          className="mx-2"
          src="https://storage.googleapis.com/msgsndr/o4yMDdWvX9IjYu0LLupA/media/6215be169b2a4c518fd020e7.png"
          alt=""
        />
        <span className="">Hydration profile report</span>
      </div>
      <div>
        <img
          className="mx-2"
          src="https://storage.googleapis.com/msgsndr/o4yMDdWvX9IjYu0LLupA/media/6215be169b2a4c518fd020e7.png"
          alt=""
        />
        <span className="">Hydration profile report</span>
      </div>
      <div>
        <img
          className="mx-3"
          src="https://storage.googleapis.com/msgsndr/o4yMDdWvX9IjYu0LLupA/media/6215be169b2a4c518fd020e7.png"
          alt=""
        />
        <span className="">Hydration profile report</span>
      </div>
    </div>
    <div className="d-flex flex-column align-items-center m-5">
      <h1 className="">just $97 today!</h1>
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
    </div>
    <div className="check-box text-center">
      <img className="check-img-offer" src={check} alt="" />
      <p className='mt-3'>
        HURRY! <strong>ONLY 3 SPOTS REMAINING</strong> FOR THIS MONTH
      </p>
    </div>
  </div>
  )
}

export default Offer