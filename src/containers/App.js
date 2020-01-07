import React from 'react'
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Store from './pages/Store';
import StoreItems from './pages/StoreItem';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Material from './pages/Material';
import Project from './pages/Project';
import {Route, Switch} from 'react-router-dom';
import Navbar from '../components/Navbar';
import FeaturedRoom from './pages/FeaturedRooms';


function App(){
    return(
        <div>
             <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/store/" component={Store} />
                    <Route exact path="/rooms/" component={Rooms} />
                    <Route exact path="/project/" component={Project} />
                    <Route exact path="/material/" component={Material} />
                    <Route exact path="/featuredroom/" component={FeaturedRoom} />
                    <Route exact path="/store/:slug" component={StoreItems} />
                    <Route exact path="/rooms/:slug" component={SingleRoom} />

                    <Route component={Error} />
                </Switch>




         </div>

    );
}

export default App;