import React, { Component } from 'react';
// import CardList from '../components/CardList';
import SearchBox from './SearchBox';
// import Scroll from './Scroll';
import {Link} from 'react-router-dom';
import Hero from './Hero'
import Banner from './Banner'




class App extends Component {
  constructor() {
    super()
    this.state = {
      stores: [],
      searchfield: '',
      sortType:'asc'
    }
  }


  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/users')
    // fetch('https://api.airtable.com/v0/appyqJ5P02SDuX3kL/JOBS?api_key=keyRY5cfsY4k8XIVq')

    fetch('https://api.airtable.com/v0/appzf76R2rrPl6c2x/Table%201?api_key=keyRY5cfsY4k8XIVq' )


      .then(response=> response.json())
      .then(users => {this.setState({ stores: users.records})});
      // .then(users => {this.setState({ stores: users})});


  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {

    const { stores, searchfield ,sortType} = this.state;


    const sorted = stores.sort( (a,b) => {

      const isRevised = (sortType === 'asc') ? 1 : -1;
      return isRevised * a.fields.Name.localeCompare(b.fields.Name)

  })



    const filteredstores = stores.filter(store =>{

      return ( store.fields.Name.toLowerCase().includes(searchfield.toLowerCase())    );


    })
    console.log(stores);
    return !stores.length ?
      <h3 className='f2  pt3  light-green '>Loading</h3> :
      (
        <div className='tc'>
          {/* <h1 className='f1'>Belhasa Joinery & Decoration LLC</h1> */}
           <h3 className='f2  pt3  light-green '> J787 WORK ORDERS  </h3>
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
              Name={stores[i].fields.Name}
              WNO={stores[i].fields.WNO}
              Item={stores[i].fields.Item}
              Qty={stores[i].fields.Qty}
              Updated={stores[i].fields.Updated}
              Estimated={stores[i].fields.Estimated}
              Actual={stores[i].fields.Actual}
              Variance={stores[i].fields.Variance}

              />
          );
        })
      }
    </div>
  );
}




const Card = ({ Name,Item,Qty,WNO,Updated,Estimated,Actual,Variance}) => {
  return (
    <div className='tc grow bg-light-green br1 pa1 ma1 dib bw shadow-5'>

      <div>
      {/* <h1>WO NO</h1> */}
            <Banner title= {Name}>
              <p>{Item}</p>
              <p>Qty:{Qty} Nos</p>
              <p>Updated On:</p>
              <p>{Updated} </p>
              <p>Estimated Amount:{Estimated} </p>
              <p>Actual:{Actual} </p>
              <p>Variance:{Variance} </p>


               <Link to={WNO} className="btn-primary">
                    ENTER
                </Link>
            </Banner>

          </div>


    </div>
  );
}




