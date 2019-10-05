import React from 'react'
import landingStyles from './landing.module.scss'

const landing = () => {
    return(
        <div className={landingStyles.wrapper}>
            <div className={landingStyles.titleText}>
                <h2><i>Hello, i'm</i></h2>
                <h1>Jeremy</h1>
                <div className={landingStyles.subTitle}>
                    <p>I'm an undergraduate student at the University of Texas at Dallas studying</p>
                    <b>Information Technology and Systems</b>  
                </div>
            </div>
        </div>
    )
}

export default landing
