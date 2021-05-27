import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Water = props => (
  <tr>
    <td>{props.water.username}</td>
    <td>{props.water.quantity}</td>
    <td>{props.water.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.water._id}>edit</Link> | <a href="/#" onClick={() => { props.deleteWater(props.water._id) }}>delete</a>
    </td>
  </tr>
)

export default class WaterList extends Component {
  constructor(props) {
    super(props);

    this.deleteWater = this.deleteWater.bind(this)

    this.state = {waterentries: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/water')
      .then(response => {
        this.setState({ waterentries: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteWater(id) {
    axios.delete('http://localhost:5000/water'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      waterentries: this.state.waterentries.filter(el => el._id !== id)
    })
  }

  waterList() {
    return this.state.waterentries.map(currentwater => {
      return <Water water={currentwater} deleteWater={this.deleteWater} key={currentwater._id}/>;
    })
  }

  render() {
    return (
      
      <div>
        <h3>Logged Water consumption entries</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Quantity</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.waterList() }
          </tbody>
        </table>
      </div>
    )
  }
}