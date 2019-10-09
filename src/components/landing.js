import React from 'react'
import landingStyles from './landing.module.scss'

const landing = () => {
    return(
        <div className={landingStyles.wrapper}>
            <div className={landingStyles.titleText}>
                <h2><i>Hello, I'm</i></h2>
                <h1>Jeremy</h1>
                <hr />
                <div className={landingStyles.subTitle}>
                    <p>I'm an undergrad student at the UT Dallas studying</p>
                    <b>Information Technology and Systems</b>  
                </div>
            </div>
        </div>
    )
}

export default landing
