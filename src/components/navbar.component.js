import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../navbar.css"



export default class Navbar extends Component {

  


  render() {

    const style = {
    //marginLeft:"30%"
    margin : "auto"
    };

    return (
      <nav className="navbar navbar-expand-lg ">
        <Link to="/homepage" className="navbar-brand navbar-left style={this.style}">Healthify</Link>
        
        <div className="collapse navbar-collapse">
        <ul className="nav navbar-nav navbar-right">
         <li className="navbar-item">
          <Link to="/homepage" className="nav-link">Home</Link>
          </li> 


          <li className="navbar-item">
          <Link to="/exercises" className="nav-link">Exercise Tracker</Link>
          </li>

          <li className="navbar-item">
          <Link to="/water" className="nav-link">Water Tracker</Link>
          </li>

          <li className="navbar-item">
          <Link to="/sleep" className="nav-link">Sleep Tracker</Link>
          </li>


          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create Exercise Log</Link>
          </li>
          

          <li className="navbar-item">
          <Link to="/createwater" className="nav-link">Create Water Log</Link>
          </li>
          
          <li className="navbar-item">
          <Link to="/createsleep" className="nav-link">Create Sleep Log</Link>
          </li>

          <li className="navbar-item">
          <Link to="/" className="nav-link">Log Out</Link>
          </li>
          
          
          
          
        </ul>
        </div>
      </nav>
    );
  }
}