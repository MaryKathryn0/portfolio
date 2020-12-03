import React from 'react'
import Portfolio from './Portfolio'
import About from './About'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css"

// Creating App function
// Exporting App Function to use at index.js
export default function App() {
  return (
    <Router>
      <div className="container-fluid px-0 App">
        <Switch>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}



