import React from 'react'

import 'font-awesome/css/font-awesome.min.css';

import Header from "../Listing/Header"
import Footer from "../Listing/Footer"
export const Login =()=> {


        return(
        <>
            <Header />
            <div className='auth-container'>
                <form class="form-horizontal">
                    <div class="form-group">
                        <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
                        <div class="col-sm-10">
                        <input type="email" class="form-control" id="inputEmail3" placeholder="Email"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
                        <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword3" placeholder="Password"/>
                        </div>
                    </div>
                </form>
                <button className="btn btn-primary submit-btn">Submit</button>
            </div>
            <Footer/>
        </>)
}


