import React, { Component } from 'react'
import {StoreContext} from './context'


export default class FeaturedItems extends Component {
    static contextType = StoreContext;




    render() {

            return (
                <div>
                    from Featured Items.
                </div>
            )
        }






    // render() {
    //     const {name,greeting} = this.context;
    //     console.log();

    //     return (
    //         <div>
    // Helo {greeting}From {name}Featured Items{}.
    //         </div>
    //     )
    // }
}
