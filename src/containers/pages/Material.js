import React from 'react'
import  Hero from './Hero'
import Banner from './Banner'
import {Link} from 'react-router-dom'

const Material = () => {
    return (
       <Hero hero='roomsHero' >
        <Banner title = 'Store'>
            <Link to='/store' className='btn-primary'>
                Return Home
            </Link>
        </Banner>


       </Hero>
    )
}

export default Material
