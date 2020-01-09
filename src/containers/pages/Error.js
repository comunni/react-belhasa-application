import React from 'react'
import Hero from './Hero'
import Banner from './Banner'
import {Link} from 'react-router-dom'

export default function Error() {
    return (
        <Hero>
        <Banner title='404' subtitle='page not found'>
            <Link to='/' className='btn-primary'>Return Home</Link>
            <p></p>
            <Link to='/jobs' className='btn-primary'>Return Jobs</Link>
        </Banner>


        </Hero>
    )
}
