import React from 'react'
import AboutImage from './portfolioHS.jpg'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from './Footer';
import Portfolio from './Portfolio';
import './App.css';


export default function About() {
  return (
    <div className="row bg-danger">
      {/* part 1 */}
      <div className="col-12 plxImg1 parallax"></div>
      {/* part 2 */}
      {/* Image on left */}
      <div className="col-md-4">
        <img src={AboutImage} alt="Mary Kathryn Holt" width="100%" height="100%" />
      </div>
      {/* Content on right */}
      <div className="col-md-7">
        <div className="page-header py-5">
          <h1>Mary Kathryn Holt</h1>
          <p>
            Interest: paper, television, cats, 
            robot vacuum cleaners, snacks,
            cats, sharpies of all colors, cake, 
            photoshop, xc234olkij(that was a cat stepping on keyboard)
            sarcasm, aliens, did I mention cats?, meow meow meow.
            the end
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
    </div>
  )
}
