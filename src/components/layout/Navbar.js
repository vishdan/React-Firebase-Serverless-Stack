import React from 'react'
import { Link } from 'react-router-dom'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'

export default () =>{
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className='brand-logo'>Mario Plan</Link>
                <SignedIn/>
                <SignedOut/>
            </div>
        </nav>
    )
}