import React from 'react'
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Store from './pages/Store';
import StoreItems from './pages/StoreItem';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Material from './pages/Material';
import Project from './pages/Project';
import Jobs from './pages/Jobs';
import J787 from './pages/J787';
import W4055 from './pages/W4055';
import W4056 from './pages/W4056';
import W4057 from './pages/W4057';


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
                    <Route exact path="/jobs/" component={Jobs} />
                    <Route exact path="/J787/" component={J787} />
                    <Route exact path="/W4055/" component={W4055} />
                    <Route exact path="/W4056/" component={W4056} />
                    <Route exact path="/W4057/" component={W4057} />
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