import React, { Component } from 'react';
// import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }


  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    // fetch('https://api.airtable.com/v0/appWTISLK0Btvge2i/store?api_key=keyRY5cfsY4k8XIVq')
      .then(response=> response.json())
      // .then(users => {this.setState({ robots: users.records})});
      .then(users => {this.setState({ robots: users})});


  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot =>{
      // return robot.fields.name.toLowerCase().includes(searchfield.toLowerCase());
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());


    })
    console.log(robots);
    return !robots.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>Bh Store</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
  }
}

export default App1;

const CardList = ({ robots }) => {
  return (
    <div>
      {
        robots.map((user, i) => {
          return (
            <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
              />
          );
        })
      }
    </div>
  );
}

const Card = ({ name, email, id ,imageURL}) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />

      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}