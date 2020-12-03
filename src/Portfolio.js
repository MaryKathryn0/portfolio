import React from 'react'
import Card from './Card'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import './App.css';

export default function Portfolio() {
    return (
        
        <div className="container py-5 my-5 main-Portfolio">
            {/* <button className="btn btn-dark" class="d-flex justify-content-ends"><Link to="/">Back to About Me</Link></button> */}
            {/* <h1>Portfolio</h1> */}
            <div className="row">
                
                
                <div className="col-md-6 col-lg-4 col-xl-3">
                    <Card title="CodeTube"  imgLink="https://images.unsplash.com/photo-1517909277968-946dd06adf1e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
                     gitHubLink="https://github.com/MaryKathryn0/Project2" />
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3">
                    <Card title="Employee Tracker"  imgLink="https://images.unsplash.com/photo-1503792243040-7ce7f5f06085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1015&q=80" 
                     gitHubLink="https://github.com/MaryKathryn0/MySQL-Employee-Tracker"/>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3">
                    <Card title="Note Taker"  imgLink="https://images.unsplash.com/photo-1596452551643-a923040a1c31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1456&q=80"
                    gitHubLink="https://github.com/MaryKathryn0/Note-Taker"/>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3">
                    <Card title="JQuery Calculator"  imgLink="https://images.unsplash.com/photo-1470016342826-876ea880d0be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" 
                     gitHubLink="https://github.com/MaryKathryn0/JQueryCalculator" />
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3">
                    <Card title="Breakaway"  imgLink="https://images.unsplash.com/photo-1458640904116-093b74971de9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80"
                    gitHubLink="https://github.com/MaryKathryn0/BreakAway" />
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3">
                    <Card title="Horiseon Website Changes"  imgLink="https://images.unsplash.com/photo-1422504090664-c57eba84293f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80"
                    gitHubLink="https://github.com/MaryKathryn0/Horiseon-Website-Changes"/>
                </div>
                
            </div>
        </div>
    )
}
