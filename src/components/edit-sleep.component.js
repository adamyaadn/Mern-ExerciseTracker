import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
//import Navbar from "./navbar.component"

export default class EditSleep extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      duration: 0,
      date: new Date(),
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/sleep/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          username: response.data.username,
          duration: response.data.duration,
          date: new Date(response.data.date)
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
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

    const sleep = {
      username: this.state.username,
      duration: this.state.duration,
      date: this.state.date
    }

    console.log(sleep);

    axios.post('http://localhost:5000/sleep/update/' + this.props.match.params.id, sleep)
      .then(res => console.log(res.data));

    window.location = '/sleep';
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
    
      <h3 style={h3style}>Edit Sleep Log</h3>

      <br></br>
      <div className="container" style={contianerstyle}>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label style={labelstyle}>Username: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label style={labelstyle}>Duration (in hours) </label>
          <input  type="text"
              required
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
          <input type="submit" value="Edit Sleep Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    </div>
    )
  }
}