import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg" fixed="top">
        <Link to="/" className="navbar-brand">HealthTracker</Link>
        
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto" >
         <li className="navbar-item">
          <Link to="/homepage" className="nav-link">Home</Link>
          </li>

           <li className="navbar-item">
          <Link to="/user" className="nav-link">Create User</Link>
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
          <Link to="/water" className="nav-link">Water Tracker</Link>
          </li>
          
          <li className="navbar-item">
          <Link to="/createsleep" className="nav-link">Create Sleep Log</Link>
          </li>
          
          
          
          
        </ul>
        </div>
      </nav>
    );
  }
}