import React from 'react'
import AboutImage from './headShot.jpg'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from './Footer';
import Portfolio from './Portfolio';
import './App.css';
import Contact from './Contact';


export default function About() {
  return (
    <div className="row aboutMe">
      {/* part 1 */}
      <div className="col-12 plxImg1 parallax"></div>
      {/* part 2 */}
      {/* Image on left */}
    
      <div className="col-md-4 aboutText">
        <img src={AboutImage} alt="Mary Kathryn Holt" width="100%" />
      </div>
      {/* Content on right */}
      <div className="col-md-7">
        <div className="page-header aboutText py-5">
          <h1>Mary Kathryn Holt</h1>
          <p>
          <br></br>
          Classic Style
          <br></br>
          Designer
          <br></br>
          Minimilist
          <br></br>
          Unique
          <br></br>
          Sarcastic
          <br></br>
          Cat Lover
          </p>
          <div className="social">
            <Footer />
          </div>
          
          {/* <button className="btn btn-dark btn-lg btn-block"><Link to="/portfolio">View Portfolio</Link></button> */}
        </div>
      </div>
     
      {/* part 3 */}
      <div className="col-12 plxImg2 parallax"></div>
      <div className="d-flex justify-content-center">
        <Portfolio />
      </div>
      <div className="col-12 plxImg1 parallax"></div>
      <div>
        <Contact />
        </div>
      </div>
    
  )
}
