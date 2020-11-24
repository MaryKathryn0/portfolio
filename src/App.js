import React from 'react'
import AboutImage from './portfolioHS.jpg'

// Creating App function
// Exporting App Function to use at index.js
export default function App() {
  return (
    <div className="container-fluid px-0">
      <div className="row">
        {/* Image on left */}
        <div className="col-md-6">
          <img src={AboutImage} alt="Mary Kathryn Holt" width="100%" height="100%"/>

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
          <hr />
          <div className="row">
                    <a href="https://drive.google.com/file/d/0BwzqtayaRnd-Qy1sT0dpb0R5OFpiUkk4QzNzZUhoT05nQnVZ/view?usp=sharing" className="text-dark col text-center"><i className="fas fa-cat fa-2x"></i></a>
                    <a href="https://www.linkedin.com/in/marykathrynholt" className="text-dark col text-center"><i className="fab fa-linkedin-in fa-2x"></i></a>
                    <a href="https://github.com/MaryKathryn0" className="text-dark col text-center"><i className="fab fa-github fa-2x"></i></a>
                    <a href="https://twitter.com/msmarymeow" className="text-dark col text-center"><i className="fab fa-twitter fa-2x"></i></a>
            
        </div>
        <hr />
        <button className="btn btn-dark btn-lg btn-block">View Portfolio</button>
        </div>
      </div>
    </div>
    </div>
  )
}



