import React, {Component} from 'react'
import { Link } from 'react-router-dom'


import './Header.css'

export default class Listing extends Component{

    render(){
        return(

                <div className="container-head">
                    <h2 className="app-text">Zomato</h2>
                    <p className="logo">e!</p>
                    <div className="user-account">
                        <button id="login">
                            <Link to="/login">Login</Link>
                            </button>
                        <button id="signup"><Link to="/register">Create an account</Link></button>
                    </div>
                </div>
        )
    }    
}