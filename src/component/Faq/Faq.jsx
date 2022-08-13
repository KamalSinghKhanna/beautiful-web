import React from 'react'
import './Faq.css'
function Faq() {
  return (
    
    <div className="faq-outer">
      <div className="container faq d-flex flex-column justify-content-center align-items-center">
    <h1>
      <strong>Frequently Asked Questions</strong>
    </h1>
    <p className='mt-4'>
      And because 
      <strong>
        we want you to feel 100% confident in your investment,
      </strong>
    </p>

    <p>here are a few of the questions we commonly get asked:</p>
    <div className="container d-flex flex-column justify-content-center align-items-center mt-3">
      <div className="container faq-question my-1 d-flex  justify-content-between align-items-center">
        <span>How Long Does the Visit Take?</span>
        <i className="fa fa-plus"></i>
      </div>
      <div className="container faq-question my-1 d-flex  justify-content-between align-items-center">
        <span>Do You Accept Insurance?</span>
        <i className="fa fa-plus"></i>
      </div>
      <div className="container faq-question my-1 d-flex  justify-content-between align-items-center">
        <span>Who Oversees My IV Treatments?</span>
        <i className="fa fa-plus"></i>
      </div>
      <div className="container faq-question my-1 d-flex  justify-content-between align-items-center">
        <span>How Often Do I Need To Come To See Results?</span>
        <i className="fa fa-plus text-pink"></i>
      </div>
      <div className="container faq-question my-1 d-flex  justify-content-between align-items-center">
        <span>Do I Need Any Lab Tests to Get Started?</span>
        <i className="fa fa-plus text-pink"></i>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Faq