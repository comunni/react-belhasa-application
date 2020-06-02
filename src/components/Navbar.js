import React, { Component } from 'react'
import logo from '../images/logo1.gif'
import {FaAlignRight} from 'react-icons/fa';
import {Link} from 'react-router-dom';



export default class Navbar extends Component {

    state={
        isOpen:false
    }

    handleToggle = () =>{

        this.setState({isOpen:!this.state.isOpen})

    }



    render() {
        return (

            // <div>
            //     nav
            // </div>


            <nav className = "navbar">
                <div className="nav-center">
                    <div className="nav-header">
                    <Link to="/" >
                     <img src={logo} alt="Belhasa Joinery"/>
                    </Link>
                    <button type="button" className="nav-btn" onClick={this.handleToggle}>
                    <FaAlignRight className="nav-icon" />
                     </button>
                </div>
                <ul className={this.state.isOpen ? "nav-links show-nav" :"nav-links"}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Jobs">Jobs</Link>
                    </li>
                    <li>
                        <Link to="/Store">Store</Link>
                    </li>


                </ul>
                </div>
            </nav>
        )
    }
}
