import React from 'react'
import loadingGif from '../pages/images/gif/loading-gear.gif'

export default function Loading() {
    return (
        <div className = 'loading'>

        <h4>Stores Data Loading</h4>
        <img src={loadingGif} alt=""/>

        </div>
    )
}
