import React, { Component } from 'react'
import {RoomContext} from './context'
import Loding from './Loading'
import Room from './Room'
import Title from './Title'


export default class FeaturedRooms extends Component {
    // static contextType = StoreContext;
    static contextType = RoomContext;

    render() {

        let { loading, featuredRooms : rooms} = this.context


        rooms = rooms.map( room => {

            return <Room key={room.id} room={room} />;

        })



        // const {featuredRooms : rooms } = this.context


        return (
            <section className="featured-rooms">
                <Title title="Featured Items"/>
                <div className="featured-rooms-center">
                    {loading?<Loding/>:rooms}
                </div>
               </section>
        );


    }
}
