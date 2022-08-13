import React from 'react'
import './Consult.css'
function Consult() {
  return (
    <div className="container consult d-flex  justify-content-center align-items-center">
        <div>
          <img
            className="consult-img"
            src=" https://assets.cdn.msgsndr.com/o4yMDdWvX9IjYu0LLupA/media/ac2cd3ce-770b-47a6-926c-6b96894ebe59.png"
            alt=""
          />
        </div>
        <div className=" spots3  d-flex flex-column   ps-5">
          <h1 className="my-3">
            <strong className="">
              SECURE your no-obligation consultation today!
            </strong>
          </h1>
          <p>Whenever you’re ready, join our tribe of wellness enthusiasts</p>
          <p>
            <strong>
              1st Infusion PLUS Custom IV Treatment Plan for JUST $97 today!
            </strong>
          </p>
          <button className="my-5">
            I’m Ready for My Custom IV Experience
          </button>
        </div>
      </div>
  )
}

export default Consult