import React, { Component } from 'react';
import Navbar from "./navbar.component"
import "./homepage.css"
import 'font-awesome/css/font-awesome.min.css'



export default class Homepage extends Component {

	render() {
    return (

     <div className="container">
     <Navbar />

      <div className="title">

                <p class="heading">Healthify</p>

                <h3>Stay fit, Stay healthy</h3>

                <br></br>
                

                <p class="video">

                 <iframe width="560" height="350" src="https://www.youtube.com/embed/rES-pG3QyY4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                </p>


                <p class="intro"> Health is a state of complete physical, mental and social well being. For a healthy life cycle, a person needs to have a balanced diet and has to regularly exercise. One must also live in a proper shelter, take enough sleep and have good hygiene habits. So, how do we ensure that we are doing all the right things to have a good health? Let’s spread the awareness for the importance of health:
                      The health of all organisms depends on their surrounding or their environment. Our social environment is an important factor in our individual health.
                      Public cleanliness is important for individual health. Therefore, we must ensure that we collect and clear the garbage regularly. We must also contact an agency who can take the responsibility of clearing the drains. Without this, you could severely affect your health.
                      We need food for health and for food, we will have to earn money by doing work. For this, the opportunity to do work has to be available. Good economic condition and jobs are, therefore, needed for individual health
                      We need to be happy in order to be truly healthy. If we mistreat each other and are afraid of each other, we cannot be healthy or happy. Social equality and harmony are important for individual health.
                </p>

      </div>

  

      <br></br>
      <br></br>

      <div className = "paragraph">

                <h3>Exercise</h3>

                <img src = "https://dailyburn.com/life/wp-content/uploads/2015/04/Vigorous-Workouts-1.jpg" alt="" class="image1"></img>

                <p class="para1"> Exercising regularly, every day if possible, is the single most important 
                thing you can do for your health. In the short term, exercise helps to control 
                appetite, boost mood, and improve sleep. In the long term, it reduces the risk 
                of heart disease, stroke, diabetes, dementia, depression, and many cancers. </p>

      </div>

      <div className = "paragraph2">

      <h3>Water</h3>

      <img src = "https://api.hub.jhu.edu/factory/sites/default/files/styles/soft_crop_2400/public/drink-more-water-hub.jpg?itok=nqke_lgS" alt="" class="image1"></img>

      <p class="para2"> Water is an essential requirement for life. After air
      , it is the second vital requirement for survival.Water comprises 
      approximately 70 to 80% of total body mass. It is so widely distributed in the body such that there is no 
      cell or tissue in the body where you don’t find water.It is 
      tough to survive even a few days without drinking water.Similarly, it is also necessary for the growth of plants and animals which supply our food.  </p>

      </div>

      <div className = "paragraph3">

      <h3>Sleep</h3>

      <img src = "https://www.kidsstreeturgentcare.com/wp-content/uploads/2018/05/benignrolandic-1.jpg" alt="" class="image1"></img>

      <p class="para3"> Water is an essential requirement for life. After air
      , it is the second vital requirement for survival.Water comprises 
      approximately 70 to 80% of total body mass. It is so widely distributed in the body such that there is no 
      cell or tissue in the body where you don’t find water.It is 
      tough to survive even a few days without drinking water.Similarly, it is also necessary for the growth of plants and animals which supply our food.  </p>

      </div>

      <div className="footer">
        <p>
           Connect to us also on   
           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="fa fa-instagram" > </a>
           <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" class="fa fa-pinterest"></a>
           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="fa fa-linkedin"> </a>
           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="fa fa-facebook"> </a>
     </p>
     </div>


     </div>

    );
  }
}