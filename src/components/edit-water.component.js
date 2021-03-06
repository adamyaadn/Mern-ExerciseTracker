import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
//import Navbar from "./navbar.component"

export default class EditWater extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeQuantity = this.onChangeQuantity.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      quantity: 0,
      date: new Date(),
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/water/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          username: response.data.username,
          quantity: response.data.quantity,
          date: new Date(response.data.date)
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

  //   axios.get('http://localhost:5000/users/')
  //     .then(response => {
  //       if (response.data.length > 0) {
  //         this.setState({
  //           users: response.data.map(user => user.username),
  //         })
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })

  // 
}

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeQuantity(e) {
    this.setState({
      quantity: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const water = {
      username: this.state.username,
      quantity: this.state.quantity,
      date: this.state.date
    }

    console.log(water);

    axios.post('http://localhost:5000/water/update/' + this.props.match.params.id, water)
      .then(res => console.log(res.data));

    window.location = '/water';
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
     
      <h3 style={h3style} >Edit Water Log</h3>
      <br></br>
      <div className="container" style={contianerstyle}>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label style={labelstyle}>Username: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
              />
          {/*<select ref="userInput"
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
          </select>*/}
        </div>
        <div className="form-group"> 
          <label style={labelstyle}>Quantity (in glasses)</label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.quantity}
              onChange={this.onChangeQuantity}
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
          <input type="submit" value="Edit Water Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    </div>
    )
  }
}