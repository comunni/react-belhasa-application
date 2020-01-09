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
      searchfield: ''
    }
  }







  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/users')
    // fetch('https://api.airtable.com/v0/appyqJ5P02SDuX3kL/JOBS?api_key=keyRY5cfsY4k8XIVq')

    fetch('https://api.airtable.com/v0/appyBT8L8RUyoCkWq/JobNos?api_key=keyRY5cfsY4k8XIVq' )


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

      return ( store.fields.JobNos.toLowerCase().includes(searchfield.toLowerCase())    );


    })
    console.log(stores);
    return !stores.length ?
      <h3 className='f2  pt3  light-green '>Loading</h3> :
      (
        <div className='tc'>
          {/* <h1 className='f1'>Belhasa Joinery & Decoration LLC</h1> */}
           <h3 className='f2  pt3  light-green '> PROJECTS </h3>
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
              JobNos={stores[i].fields.JobNos}
              Contractor={stores[i].fields.Contractor}
              Qty={stores[i].fields.Qty}
              Variation={stores[i].fields.Variation}
              Total={stores[i].fields.Total}

              />
          );
        })
      }
    </div>
  );
}




const Card = ({ JobNos,Contractor,Qty,Variation,Total}) => {
  return (
    <div className='tc grow bg-light-green br1 pa1 ma1 dib bw shadow-5'>

      <div>
            <Banner title= {JobNos}>
              <p>{Contractor}</p>
              <p>Qty:{Qty}.Nos</p>
              <p>Variance:{Variation}.Nos</p>
              <p>Total Qty:{Total}.Nos</p>
                <Link to={JobNos} className="btn-primary">
                    ENTER
                </Link>
            </Banner>

          </div>
    </div>
  );
}

