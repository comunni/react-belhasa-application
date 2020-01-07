import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import {BrowserRouter as Router} from 'react-router-dom';
import {RoomProvider} from './containers/pages/context';



ReactDOM.render(
<RoomProvider>
    <Router>
            <App />
    </Router>
</RoomProvider>,
document.getElementById('root'));


registerServiceWorker();
