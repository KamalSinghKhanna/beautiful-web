import React from 'react'
import './Benefits.css'
function Benefits() {
  return (
    <section className="benefits-section d-flex">
    <div className="benefits-1">
      <h1>
        <strong>
          Unlock the testimonial of <br />
          IV Nutrient Therapy
        </strong>
      </h1>
      <br />
      <p>
        IV therapy is one of the quickest ways to rehydrate your body.
        But, it’s also the most EFFICIENT way to absorb 100% of the
        nutrients you need for optimal health, no matter your wellness
        goal.
      </p>
      <div className="checklist d-flex justify-content-between">
        <div className="checklist-1 d-flex flex-column ">
          <span className="mb-3">
            <img
              src="https://storage.googleapis.com/msgsndr/Qa1UvBVhJBvxby4hTfCc/media/620b33b145985522ee075347.svg+xml"
              alt=""
            />
            <span className="mx-3">Reduce inflammation</span>
          </span>
          <span className="mb-3">
            <img
              src="https://storage.googleapis.com/msgsndr/Qa1UvBVhJBvxby4hTfCc/media/620b33b145985522ee075347.svg+xml"
              alt=""
            />
            <span className="mx-3">Boost energy levels</span>
          </span>
          <span className="mb-3">
            <img
              src="https://storage.googleapis.com/msgsndr/Qa1UvBVhJBvxby4hTfCc/media/620b33b145985522ee075347.svg+xml"
              alt=""
            />
            <span className="mx-3">Improve function</span>
          </span>
        </div>
        <div className="checklist-2 d-flex flex-column">
          <span className="mb-3">
            <img
              src="https://storage.googleapis.com/msgsndr/Qa1UvBVhJBvxby4hTfCc/media/620b33b145985522ee075347.svg+xml"
              alt=""
            />
            <span className="mx-3">Optimize physique</span>
          </span>
          <span className="mb-3">
            <img
              src="https://storage.googleapis.com/msgsndr/Qa1UvBVhJBvxby4hTfCc/media/620b33b145985522ee075347.svg+xml"
              alt=""
            />
            <span className="mx-3">Support cognitive health</span>
          </span>
          <span className="mb-3">
            <img
              src="https://storage.googleapis.com/msgsndr/Qa1UvBVhJBvxby4hTfCc/media/620b33b145985522ee075347.svg+xml"
              alt=""
            />
            <span className="mx-3">…And much more!</span>
          </span>
        </div>
      </div>
      <button className="my-3 button-b">Check for opening today</button>
    </div>
    <div className="container benefits-2">
      <img
        className="benifits-img"
        src="https://assets.cdn.msgsndr.com/o4yMDdWvX9IjYu0LLupA/media/5f756f90-a603-43f0-bcc6-ff3a6fd1ad7a.jpeg"
        alt=""
      />
    </div>
  </section>
  )
}

export default Benefits