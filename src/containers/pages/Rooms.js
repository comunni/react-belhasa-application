import React from 'react'
import Hero from './Hero'
import Banner from './Banner'
import {Link} from 'react-router-dom';
import RoomContainer from './RoomContainer'

const Rooms = () =>{

    return(
        <>
        <Hero Hero="rooms-Hero">
            <Banner title= "our rooms">
                <Link to="/" className="btn-primary">
                    return home
                </Link>
            </Banner>
        </Hero>
        <RoomContainer />
        </>


    );



};

export default Rooms;