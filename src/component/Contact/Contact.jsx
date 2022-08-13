import React from 'react'
import './Contact.css'
import Logo from "../../images/image.svg";
function Contact() {
  return (
    <div className="container consult testimonial-section d-flex  justify-content-center align-items-center">
    <div className="container">
      <img src={Logo} alt="" />
      <div className="container address my-3">
        <p className="mb-0">VYVE Wellness</p>
        <p className="mb-0">441 N Wendover Rd.</p>
        <p className="mb-0">Charlotte, NC 28211</p>
        <p className="mb-0">Phone: 704-396-5901</p>
        <p className="mb-0">Hours: Mon-Wed 8am - 5pm, Thur 10am - 6pm</p>
      </div>
    </div>
    <div className="maps">
      <iframe
        title='my-maps'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13042.607599008836!2d-80.8051468!3d35.1902277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8854210e39d52189%3A0xb75a087b207983fa!2sVYVE%20Wellness!5e0!3m2!1sen!2sin!4v1659251398894!5m2!1sen!2sin"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
  )
}

export default Contact