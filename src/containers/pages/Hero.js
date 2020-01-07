import React from 'react'
// import FeaturedItems from './FeaturedItems';


export default function Hero({children,hero}) {
    return (
    <header className={hero}>{children}</header>
    )
}

Hero.defaultProps= {
    hero:'defaultHero'
}