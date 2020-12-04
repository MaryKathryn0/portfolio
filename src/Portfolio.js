import React from 'react'
import Card from './Card'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './App.css';
import Air from './AirPlane.jpg'
import Seats from './Seats.jpg'
import Pin from './pinWheel.jpg'
import Bulb from './LightBulb.jpg'
import Ferris from './FerrisWheel.jpg'
import Flower from './Flower.jpg'

export default function Portfolio() {
    return (
        
        <div className="container-fluid my-5 main-Portfolio">
            {/* <button className="btn btn-dark" class="d-flex justify-content-ends"><Link to="/">Back to About Me</Link></button> */}
            {/* <h1>Portfolio</h1> */}
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4 col-xl-3">
                    <Card title="CodeTube"  imgsrc={Seats} alt="Seats" 
                     gitHubLink="https://github.com/MaryKathryn0/Project2" />
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3">
                    <Card title="Employee Tracker"  imgsrc={Bulb} alt="Light Bulb" 
                     gitHubLink="https://github.com/MaryKathryn0/MySQL-Employee-Tracker"/>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3">
                    <Card title="Note Taker"  imgsrc={Flower} alt="Flower" 
                    gitHubLink="https://github.com/MaryKathryn0/Note-Taker"/>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4 col-xl-3">
                    <Card title="JQuery Calculator"  imgsrc={Air} alt="Air Plane" 
                     gitHubLink="https://github.com/MaryKathryn0/JQueryCalculator" />
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3">
                    <Card title="Breakaway"  imgsrc={Ferris} alt="Ferris Wheel" 
                    gitHubLink="https://github.com/MaryKathryn0/BreakAway" />
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3">
                    <Card title="Website Changes"  imgsrc={Pin} alt="Pin Wheel" 
                    gitHubLink="https://github.com/MaryKathryn0/Horiseon-Website-Changes"/>
                </div>
                
            </div>
        </div>
    )
}
