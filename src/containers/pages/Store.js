// import React, { Component } from 'react'

// export default class Store extends Component {
//     render() {
//         return (
//             <div>
//                 Helo from store
//             </div>
//         )
//     }
// }

import React, { Component } from 'react';
// import CardList from '../components/CardList';
import SearchBox from './SearchBox';
// import Scroll from './Scroll';
import Loading from './Loading'






class App extends Component {
  constructor() {
    super()
    this.state = {
      stores: [],
      searchfield: ''
    }
  }


  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/users')
    fetch('https://api.airtable.com/v0/appWTISLK0Btvge2i/store?api_key=keyRY5cfsY4k8XIVq')
      .then(response=> response.json())
      .then(users => {this.setState({ stores: users.records})});
      // .then(users => {this.setState({ stores: users})});


  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { stores, searchfield } = this.state;
    const filteredstores = stores.filter(store =>{

      return ( store.fields.name.toLowerCase().includes(searchfield.toLowerCase()) | store.fields.head.toLowerCase().includes(searchfield.toLowerCase()) | store.fields.code.toLowerCase().includes(searchfield.toLowerCase()) | store.fields.supplier.toLowerCase().includes(searchfield.toLowerCase()) | store.fields.brand.toLowerCase().includes(searchfield.toLowerCase()) | store.fields.made.toLowerCase().includes(searchfield.toLowerCase()) | store.fields.related.toLowerCase().includes(searchfield.toLowerCase()) | store.fields.unit.toLowerCase().includes(searchfield.toLowerCase())  | store.fields.purchase.toLowerCase().includes(searchfield.toLowerCase()) | store.fields.description.toLowerCase().includes(searchfield.toLowerCase()) | store.fields.packing.toLowerCase().includes(searchfield.toLowerCase()) | store.fields.size.toLowerCase().includes(searchfield.toLowerCase())     );


    })
    console.log(stores);
    return !stores.length ?


  // <h3 className='f2  pt3  light-green '>Loading</h3>
    <div className = 'f2 pt3 light-green'> Store Data Loading..
    <Loading />
     </div>
  :
      (
        <div className='tc'>
          {/* <h1 className='f1'>Belhasa Joinery & Decoration LLC</h1> */}
           <h3 className='f2  pt3  light-green '> Store Items </h3>
          <SearchBox searchChange={this.onSearchChange}/>
          {/* <Scroll> */}
            <CardList stores={filteredstores} />
          {/* </Scroll> */}
        </div>
      );
  }
}

export default App;





const CardList = ({ stores }) => {
  return (
    <div>
      {
        stores.map((user, i) => {
          return (
            <Card
              key={i}
              id={stores[i].fields.id}
              name={stores[i].fields.name}
              head={stores[i].fields.head}
              code={stores[i].fields.code}
              size={stores[i].fields.size}
              packing={stores[i].fields.packing}
              unit={stores[i].fields.unit}
              price={stores[i].fields.price}
              unit_price={stores[i].fields.unit_price}
              brand={stores[i].fields.brand}
              supplier={stores[i].fields.supplier}
              made={stores[i].fields.made}
              purchase={stores[i].fields.purchase}
              qty={stores[i].fields.qty}
              description={stores[i].fields.description}
              related={stores[i].fields.related}
              imageURL={stores[i].fields.imageURL}

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
/* <img className="card-img-top" src= { imageURL[0].url || defaultImg } alt="" />
<div className="card-body"> */


const Card = ({ name,code,size,packing,unit,price,unit_price,brand,supplier,made,purchase,qty,description,related,head,imageURL}) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      {/* <img alt='stores' src={`https://robohash.org/${id}?size=200x200`} /> */}

      <img alt='stores' src={imageURL[0].url} className="pa1 ba b--black-20 br3 ma1 w5"/>
      {/* <img alt='stores' src={imageURL[0].url} class="class="br-100 ma1 ma1" /> */}


      <div>
        <h4 className='f5 dark-red '>{name}</h4>
        <p>Head:{head} </p>
        <p>Code:{code} </p>
        <p>Packing:{packing}</p>
        <p>Unit:{unit}</p>
        <p>Price:{price} | Unit Price:{unit_price} </p>
        <p>Brand:{brand}</p>
        <p>Size:{size}</p>
        <p>Supplier:{supplier}</p>
        <p>Made:{made}</p>
        <p>Last Purchase:{purchase}</p>
        <p>Qty Purchased:{qty}</p>
        <p>Material Desc:{description}</p>
        <p>Related Machine:{related}</p>
        </div>
    </div>
  );
}

