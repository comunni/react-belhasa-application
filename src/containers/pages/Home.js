import React, { Component } from 'react'
import Hero from './Hero';
import Banner from './Banner';
import {Link} from 'react-router-dom';
// import FeaturedItems from './FeaturedItems'
import FeaturedRooms from './FeaturedRooms'



export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
            <Hero>
                <Banner title="Jobs" subtitle="">
                <Link to='/jobs' className='btn-primary'>Enter..</Link>
                </Banner>
                </Hero>
                <Hero>
                <Banner title="Store" subtitle="">
                <Link to='/store' className='btn-primary'>Enter..</Link>
                </Banner>
                </Hero>

                      {/* <FeaturedRooms /> */}
                {/* <FeaturedItems /> */}



            </React.Fragment>

        )
    }
}


