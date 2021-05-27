import React, { Component } from 'react';
import Navbar from "./navbar.component"


export default class Homepage extends Component {

	render() {
    return (

     <div>
     <navbar />

      <div className="header">

      	<h1> Health Tracker </h1>

      </div>

      <div className = "image">
      
      <img src = "https://tse1.mm.bing.net/th?id=OIP.CgajcT6xjyPYlJw9rKQbGgHaDt&pid=Api&rs=1&c=1&qlt=95&w=196&h=98" alt=""></img>
      
      </div>

      <div className = "paragraph">

      <p> Exercising regularly, every day if possible, is the single most important 
      thing you can do for your health. In the short term, exercise helps to control 
      appetite, boost mood, and improve sleep. In the long term, it reduces the risk 
      of heart disease, stroke, diabetes, dementia, depression, and many cancers. </p>

      </div>

     </div>


    );
  }
}