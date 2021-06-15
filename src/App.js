import React from 'react';
import "./navbar.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import Homepage from "./components/homepage.component";
import SleepList from "./components/sleepentries-list.component";
import CreateSleep from "./components/create-sleep.component";
import EditSleep from "./components/edit-sleep.component";
import WaterList from "./components/waterentries-list.component";
import CreateWater from "./components/create-water.component";
import EditWater from "./components/edit-water.component";
import LandingPage from "./LandingPage.js"

function App() {
  return (
    <Router>
      {/*<div className="container">
      <Navbar />
      <br/>*/}
      <Route path="/" exact component={LandingPage} />
      <Route path="/homepage" exact component={Homepage} />
      <Route path="/exercises" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
      <Route path="/sleep" exact component={SleepList} />
      <Route path="/createsleep" component={CreateSleep} />
      <Route path="/editsleep/:id" component={EditSleep} />
      <Route path="/water" exact component={WaterList} />
      <Route path="/createwater" component={CreateWater} />
      <Route path="/editwater/:id" component={EditWater} />
      {/*</div>*/}
    </Router>
  );
}

export default App;
