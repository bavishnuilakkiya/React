import React, {Component} from 'react'

import Header from '../Listing/Header'
import Footer from '../Listing/Footer'

import '../Auth/Auth.css'



const url="http://localhost:8000/auth/register"

export default class Register extends Component {


    register=()=>{
                fetch(url,{method:"POST",
                    body:JSON.stringify({ 'name':`${document.getElementById("name").value}`,
                     'email':`${document.getElementById("email").value}`,
                     'password':`${document.getElementById("password").value}`,
                     'phone':`${document.getElementById("phone").value}`,
                    'address':`${document.getElementById("address").value}`}),
                    headers:{
                        accept:"application/json",
                        "content-type":"application/json"
                    }
                }).then(this.props.history.push("/login"))

    }

    render(){
        return (
        <>
        <Header />

        <div className='auth-container'>
        <form class="form-horizontal">

            <div class="form-group">
                <label for="name" class="col-sm-2 control-label">Name</label>
                <div class="col-sm-8">
                <input type="text" class="form-control" id="name" placeholder="Name" />
                </div>
            </div>

            <div class="form-group">
                <label for="email" class="col-sm-2 control-label">Email</label>
                <div class="col-sm-8">
                <input type="email" class="form-control" id="email" placeholder="Email" />
                </div>
            </div>

            <div class="form-group">
                <label for="password" class="col-sm-2 control-label">Password</label>
                <div class="col-sm-8">
                <input type="password" class="form-control" id="password" placeholder="Password" />
                </div>
            </div>

            <div class="form-group">
                <label for="Phone" class="col-sm-2 control-label">Phone</label>
                <div class="col-sm-8">
                <input type="text" class="form-control" id="phone" placeholder="Phone" />
                </div>
            </div>

            <div class="form-group">
                <label for="address" class="col-sm-2 control-label">Address</label>
                <div class="col-sm-8">
                <input type="text" class="form-control" id="address" placeholder="Address" />
                </div>
            </div>

        </form>
        <button className="btn btn-primary submit-btn" onClick={this.register}>Submit</button>

        </div>

        <Footer />
        </>
        )
    }
}