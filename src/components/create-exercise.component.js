import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import Navbar from "./navbar.component"
import styles from "./component.css";

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: []
    }
  }

  componentDidMount() {
    // axios.get('http://localhost:5000/users/')
    //   .then(response => {
    //     if (response.data.length > 0) {
    //       this.setState({
    //         users: response.data.map(user => user.username),
    //         username: response.data[0].username
    //       })
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })

  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    }

    console.log(exercise);

    axios.post('http://localhost:5000/exercises/add', exercise)
      .then(res => console.log(res.data));

    window.location = '/exercises';
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
      fontSize : "35px",
      marginTop : "10px"
    }

    const labelstyle = {
      fontWeight: "bold",
      fontFamily: "Times New Roman",
      color: "maroon",
      backgroundColor : "white",
      borderRadius : "20px",
      fontSize : "25px",
      paddingTop : "0px"
    }
    const contianerstyle = {
      backgroundColor: "white",
      color : "black",
      height : "500px",
      width : "800px"
    }
    
    return (
    <div>
    
      <h3 style={h3style}>Create New Exercise Log</h3>

      <br></br>
      <div className="container" style={contianerstyle}>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <br></br>
          <label style={labelstyle}>Username: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
              />
        </div>
        <div className="form-group"> 
          <label style={labelstyle}>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label style={labelstyle}>Duration (in minutes): </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
              />
        </div>
        <div className="form-group">
          <label style={labelstyle}>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    </div>
    )
  }
}