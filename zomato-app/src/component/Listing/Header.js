import React, {Component} from 'react'

import './Header.css'

export default class Listing extends Component{

    render(){
        return(

                <div className="container-head">
                    <h2 className="app-text">Zomato</h2>
                    <p className="logo">e!</p>
                    <div className="user-account">
                        <button id="login">Login</button>
                        <button id="signup">Create an account</button>
                    </div>
                </div>
        )
    }    
}