import React, {useState} from 'react'
import './Faq.css'
function Faq({Question, Answer}) {
  const [isActive, setIsActive] = useState(false);
  return (
    
   
      <div className='container question-box d-flex flex-column justify-content-center align-items-center'>
      <div className="container faq-question my-1 d-flex  justify-content-between align-items-center">
        <span>{Question}</span>
        <i onClick={()=>{isActive===true?setIsActive(false):setIsActive(true)}} className={isActive ? "fa fa-minus" : "fa fa-plus"}></i>
      </div>
      <span className='container'>{isActive?Answer:""}</span>
      </div>
   

  )
}

export default Faq