import React from 'react'
import './Header.css'

function Header() {
  return(
    <div className="container header-main ">
      <div className="container left-heading">
        <h1>
          <strong>
            Personalized IV Therapy Designed To Make Sure You Get The EXACT
            Nutrients You Need To Thrive
          </strong>
        </h1>
        <h4>
          We don’t believe in randomly picking from those basic IV menus.
          That’s why our board-certified Integrative Medicine specialists
          craft our advanced IV therapy infusions specific to you!
        </h4>
        <button className="btn-h button-2 my-3">Check for opening today</button>
      </div>
      <div className="container right-heading">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Qmi-Xwq-MEc"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default Header