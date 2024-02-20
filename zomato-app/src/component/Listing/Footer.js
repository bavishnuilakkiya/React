import React, {Component} from 'react'
import { Link } from 'react-router-dom'


import '../Listing/Footer.css'

export default class Listing extends Component{

    render(){
        return(

                <div className="container-footer">
                    <h2 className="Footer-text">Copyright Developer 2024. All Rights Reserved</h2>
                    <div className="footer-details">
                        <div className="sub-sec first-sec">
                            <p>Home</p>
                            <p>Orders</p>
                        </div> 
                        <div className="sub-sec second-sec">
                            <p>About Us</p>
                            <p>Contact Us</p>
                            <div className="contact-Links">
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-youtube"></i>
                            </div>
                        </div>   
                        <div className="sub-sec third-sec">
                            <p>Visit our website</p>
                            <p>Links</p>
                        </div>     
                    </div>
                </div>
        )
    }    
}