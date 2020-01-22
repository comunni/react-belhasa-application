import React, { Component } from 'react';
// import CardList from '../components/CardList';
import SearchBox from './SearchBox';
// import Scroll from './Scroll';




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

    fetch('https://api.airtable.com/v0/app1dSvikZUQFiJzL/4057?api_key=keyRY5cfsY4k8XIVq')



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
      return isRevised * a.fields.Area.localeCompare(b.fields.Area)

  })
    const filteredstores = stores.filter(store =>{

      return ( store.fields.JobNo.toLowerCase().includes(searchfield.toLowerCase()) | store.fields.WoNo.toLowerCase().includes(searchfield.toLowerCase()) | store.fields.Desc.toLowerCase().includes(searchfield.toLowerCase()) | store.fields.Report.toLowerCase().includes(searchfield.toLowerCase()) | store.fields.Area.toLowerCase().includes(searchfield.toLowerCase())     );


    })
    console.log(stores);
    return !stores.length ?
      <h3 className='f2  pt3  light-green '>Loading</h3> :
      (
        <div className='tc'>
          {/* <h1 className='f1'>Belhasa Joinery & Decoration LLC</h1> */}
           <h3 className='f2  pt3  light-green '> WO 4056 -SHUTTERS </h3>
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
              Desc={stores[i].fields.Desc}
              Est_Unit={stores[i].fields.Est_Unit}
              Est_Qty={stores[i].fields.Est_Qty}
              Est_Rate={stores[i].fields.Est_Rate}
              Est_Amount={stores[i].fields.Est_Amount}
              Actual_Qty={stores[i].fields.Actual_Qty}
              Actual_Rate={stores[i].fields.Actual_Rate}
              Actual_Amount={stores[i].fields.Actual_Amount}
              Variance_Qty={stores[i].fields.Variance_Qty}
              Variance_Amount={stores[i].fields.Variance_Amount}
              Report={stores[i].fields.Report}
              />
          );
        })
      }
    </div>
  );
}




const Card = ({ JobNo,WoNo,Item,Qty,Desc,Area,Est_Unit,Est_Qty,Est_Rate,Est_Amount,Actual_Qty,Actual_Rate,Actual_Amount,Variance_Qty,Variance_Amount,Report,}) => {
  return (


    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      {/* <img alt='stores' src={`https://robohash.org/${id}?size=200x200`} /> */}

      {/* <img alt='stores' src={imageURL[0].url} className="pa1 ba b--black-20 br3 ma1 w5"/> */}
      {/* <img alt='stores' src={imageURL[0].url} class="class="br-100 ma1 ma1" /> */}





      <div>


      <h1 class="f6 bold center">{Desc}</h1>
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
    <td>{Est_Qty}</td>
    <td>{Est_Rate}</td>
    <td>{Est_Amount}</td>
     </tr>
     <tr>
    <th scope="row">Actual</th>
    {/* <td>{EstimatedUnit}</td> */}
    <td>{Actual_Qty}</td>
    <td>{Actual_Rate}</td>
    <td>{Actual_Amount}</td>
     </tr>
     <tr>
    <th scope="row">Variance</th>
    {/* <td>{EstimatedUnit}</td> */}
    <td>{Variance_Qty}</td>
    <td>{Actual_Rate}</td>
    <td>{Variance_Amount}</td>
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

<h1 class="f6 bold center mw3"> </h1>
<ul class="list pl0 ml0 center mw5 ba b--light-silver br3">
<li class="ph3 pv2 bb b--light-silver">{Report}</li>

</ul>
          </div>
    </div>
  );


}


