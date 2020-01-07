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
    // fetch('https://jsonplaceholder.typicode.com/users')
    fetch('https://api.airtable.com/v0/appWTISLK0Btvge2i/store?api_key=keyRY5cfsY4k8XIVq')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users.records})});
      // .then(users => {this.setState({ robots: users})});


  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot =>{
      return robot.fields.name.toLowerCase().includes(searchfield.toLowerCase());
      // return robot.name.toLowerCase().includes(searchfield.toLowerCase());

    })
    console.log(robots);
    return !robots.length ?
      <h2>Loading</h2> :
      (
        <div className='tc'>
          <h1 className='f1'>Belhasa Joinery & Decoration LLC</h1>
          <h2 className='f1'>Store Items </h2>

          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
  }
}

export default App;

// formatData(items){
//   let tempItems = items.map(item =>{
//     let id = item.sys.id
//     let images = item.fields.images.map(image => image.fields.file.url);
//     let room = {...item.fields,images,id};
//     return room;
//   });

//   return tempItems
// }



const CardList = ({ robots }) => {
  return (
    <div>
      {
        robots.map((user, i) => {
          return (
            <Card
              key={i}
              id={robots[i].fields.id}
              name={robots[i].fields.name}
              head={robots[i].fields.head}
              code={robots[i].fields.code}
              size={robots[i].fields.code}
              packing={robots[i].fields.packing}
              unit={robots[i].fields.unit}
              price={robots[i].fields.price}
              unit_price={robots[i].fields.unit_price}
              brand={robots[i].fields.brand}
              supplier={robots[i].fields.supplier}
              made={robots[i].fields.made}
              purchase={robots[i].fields.purchase}
              qty={robots[i].fields.qty}
              description={robots[i].fields.description}
              related={robots[i].fields.related}
              imageURL={robots[i].fields.imageURL}





              />
          );
        })
      }
    </div>
  );
}


// Brand : GILLETTE

// Supplier : CASH

// `Made In : INDIA

// Last Purchase : 2018-04-04

// Qty Purchased : 2

// Material description : Super Stainless

// Related Machine :
{/* <img className="card-img-top" src= { imageURL[0].url || defaultImg } alt="" />
<div className="card-body"> */}


const Card = ({ name, email, size ,code,size,packing,unit,price,unit_price,brand,supplier,made,purchase,qty,description,related,head,imageURL}) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      {/* <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} /> */}

      <img alt='robots' src={imageURL[0].url} class="pa1 ba b--black-20 br3 ma1 w5"/>
      {/* <img alt='robots' src={imageURL[0].url} class="class="br-100 ma1 ma1" /> */}


      <div>
        <h2>{name}</h2>
        <p>Head:{head} </p>
        <p>Code:{code} | Size:{size} </p>
        <p>Packing:{packing}</p>
        <p>Unit:{unit}</p>
        <p>Price:{price} | Unit Price:{unit_price} </p>
        <p>Size:{size} </p>
        <p>Brand:{brand}</p>
        <p>Supplier:{supplier}</p>
        <p>Made:{made}</p>
        <p>Last Purchase:{purchase}</p>
        <p>Qty Purchased:{qty}</p>
        <p>Material Desc:{description}</p>
        <p>Related Machine:{related}</p>


        <p>{email}</p>

      </div>
    </div>
  );
}