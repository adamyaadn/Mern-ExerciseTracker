import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from "./navbar.component"

const style = {
  backgroundColor:"maroon",
  color : "white",
  borderRadius : "10px"
}


const Sleep = props => (
  <tr>
    <td>{props.sleep.username}</td>
    <td>{props.sleep.duration}</td>
    <td>{props.sleep.date.substring(0,10)}</td>
    <td>
      <Link to={"/editsleep/"+props.sleep._id} style={style}>&nbsp;&nbsp;&nbsp;Edit&nbsp;&nbsp;&nbsp;</Link> | <a href="/sleep" onClick={() => { props.deleteSleep(props.sleep._id) }} style={style}>&nbsp;&nbsp;&nbsp;Delete&nbsp;&nbsp;&nbsp;</a>
    </td>
  </tr>
)

export default class SleepList extends Component {
  constructor(props) {
    super(props);

    this.deleteSleep = this.deleteSleep.bind(this)

    this.state = {sleepentries: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/sleep')
      .then(response => {
        this.setState({ sleepentries: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteSleep(id) {
    axios.delete('http://localhost:5000/sleep'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      sleepentries: this.state.sleepentries.filter(el => el._id !== id)
    })
  }

  sleepList() {
    return this.state.sleepentries.map(currentsleep => {
      return <Sleep sleep={currentsleep} deleteSleep={this.deleteSleep} key={currentsleep._id}/>;
    })
  }

  render() {

    const h3style = {
      backgroundColor: "maroon",
      color: "white",
      fontWeight: "bold",
      fontFamily: "Times New Roman",
      marginLeft : "450px",
      marginRight : "450px",
      borderRadius : "10px",
      fontSize : "30px"
    }

    const contianerstyle = {
      backgroundColor: "white",
      color : "black",
      height : "500px",
      width : "800px"
    }

    return (
      
      <div>
      <Navbar />
        <h3 style={h3style}>Logged Sleep entries</h3>
        
        <br></br>
        <div className="container" style={contianerstyle}>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.sleepList() }
          </tbody>
        </table>
      </div>
      </div>
    )
  }
}