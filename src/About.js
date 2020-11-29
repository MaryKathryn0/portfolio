import React from 'react'
import AboutImage from './portfolioHS.jpg'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from './Footer';
import './App.css';

export default function About() {
  return (
    <div className="row">
      {/* Image on left */}
      <div className="col-md-6">
        <img src={AboutImage} alt="Mary Kathryn Holt" width="100%" height="100%" />

      </div>
      {/* Content on right */}
      <div className="col-md-6">
        <div className="page-header py-5 pr-4">
          <h1>Mary Kathryn Holt</h1>

          <p>
            Interest: paper, television, cats, robot vacuum cleaners, snacks,
            cats, sharpies of all colors, cake, photoshop, xc234olkij(that was a cat stepping on keyboard)
            sarcasm, aliens, did I mention cats?, meow meow meow.
          </p>

          <button className="btn btn-dark btn-lg btn-block"><Link to="/portfolio">View Portfolio</Link></button>
        </div>
        <div className="container">
          <div className="row">
            <div className="col leftColAbout p-2"></div>
            <div className="col rightColAbout p-2"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
