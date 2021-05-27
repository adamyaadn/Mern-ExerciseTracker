import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Sleep = props => (
  <tr>
    <td>{props.sleep.username}</td>
    <td>{props.sleep.duration}</td>
    <td>{props.sleep.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.sleep._id}>edit</Link> | <a href="/#" onClick={() => { props.deleteSleep(props.sleep._id) }}>delete</a>
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
    return (
      
      <div>
        <h3>Logged Sleep entries</h3>
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
    )
  }
}