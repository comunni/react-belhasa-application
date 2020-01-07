import React, { Component } from 'react';
// import CardList from '../components/CardList';
import SearchBox from './SearchBox';
// import Scroll from './Scroll';




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

    fetch('https://api.airtable.com/v0/appyqJ5P02SDuX3kL/JOBS?api_key=keyRY5cfsY4k8XIVq')


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

      return ( store.fields.JobNo.toLowerCase().includes(searchfield.toLowerCase()) | store.fields.WoNo.toLowerCase().includes(searchfield.toLowerCase()) | store.fields.Material.toLowerCase().includes(searchfield.toLowerCase()) | store.fields.BeechReport.toLowerCase().includes(searchfield.toLowerCase()) | store.fields.Area.toLowerCase().includes(searchfield.toLowerCase())     );


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
              JobNo={stores[i].fields.JobNo}
              WoNo={stores[i].fields.WoNo}
              Area={stores[i].fields.Area}
              Item={stores[i].fields.Item}
              Qty={stores[i].fields.Qty}
              Material={stores[i].fields.Material}
              EstimatedUnit={stores[i].fields.EstimatedUnit}
              BeechQty={stores[i].fields.BeechQty}
              BeechRate={stores[i].fields.BeechRate}
              BeechAmount={stores[i].fields.BeechAmount}
              ActualBeechQty={stores[i].fields.ActualBeechQty}
              ActualBeechRate={stores[i].fields.ActualBeechRate}
              ActualBeechAmount={stores[i].fields.ActualBeechAmount}
              VarianceBeechQty={stores[i].fields.VarianceBeechQty}
              VarianceBeechAmount={stores[i].fields.VarianceBeechAmount}
              BeechReport={stores[i].fields.BeechReport}


              />
          );
        })
      }
    </div>
  );
}




const Card = ({ JobNo,WoNo,Item,Qty,Material,Area,EstimatedUnit,BeechQty,BeechRate,BeechAmount,ActualBeechQty,ActualBeechRate,ActualBeechAmount,VarianceBeechQty,VarianceBeechAmount,BeechReport,}) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>


      <div>


      <h1 class="f6 bold center">{Material}</h1>
{/* <ul class="list pl0 ml0 center mw5 ba b--light-silver br3">

</ul> */}



        <p >Job.No:{JobNo} | WO.No:{WoNo} | {Item}-{Qty}.Nos </p>
        <p >Area:{Area} </p>

        <table>

    <tr>

  <th scope="col">Description</th>
        {/* <th scope="col">Unit</th> */}
        <th scope="col">Qty</th>
        <th scope="col">Rate</th>
        <th scope="col">Amount</th>

        {/* <th scope="col">Est.Rate</th>
        <th scope="col">Est.Amount</th>
        <th scope="col">Issued.Qty</th>
        <th scope="col">Issued.Amount</th>
        <th scope="col">Vari.Qty</th>
        <th scope="col">Vari.Rate</th> */}


    </tr>
    <tr>
    <th scope="row">Estimated</th>
    {/* <td>{EstimatedUnit}</td> */}
    <td>{BeechQty}</td>
    <td>{BeechRate}</td>
    <td>{BeechAmount}</td>
     </tr>
     <tr>
    <th scope="row">Actual</th>
    {/* <td>{EstimatedUnit}</td> */}
    <td>{ActualBeechQty}</td>
    <td>{ActualBeechRate}</td>
    <td>{ActualBeechAmount}</td>
     </tr>
     <tr>
    <th scope="row">Variance</th>
    {/* <td>{EstimatedUnit}</td> */}
    <td>{VarianceBeechQty}</td>
    <td>{ActualBeechRate}</td>
    <td>{VarianceBeechAmount}</td>
     </tr>
    {/* <tr>
        <th scope="row">Khiresh Odo</th>
        <td>7</td>
        <td>7,223</td>
    </tr>
    <tr>
        <th scope="row">Mia Oolong</th>
        <td>9</td>
        <td>6,219</td>
    </tr> */}
</table>

<h1 class="f6 bold center mw3"></h1>
<ul class="list pl0 ml0 center mw5 ba b--light-silver br3">
<li class="ph3 pv2 bb b--light-silver">{BeechReport}</li>

</ul>





          </div>
    </div>
  );
}

