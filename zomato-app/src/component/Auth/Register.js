import React from 'react'

import '../Auth/Auth.css'

const rurl="http://localhost:8000/auth/register"

export const Register=()=> {

    
        return (
        <>
        
        <div className='auth-container'>
        <form class="form-horizontal">

            <div class="form-group">
                <label for="name" class="col-sm-2 control-label">Name</label>
                <div class="col-sm-8">
                <input type="text" class="form-control" id="name" placeholder="Name"/>
                </div>
            </div>

            <div class="form-group">
                <label for="email" class="col-sm-2 control-label">Email</label>
                <div class="col-sm-8">
                <input type="email" class="form-control" id="email" placeholder="Email"/>
                </div>
            </div>

            <div class="form-group">
                <label for="password" class="col-sm-2 control-label">Password</label>
                <div class="col-sm-8">
                <input type="password" class="form-control" id="password" placeholder="Password"/>
                </div>
            </div>

            <div class="form-group">
                <label for="Phone" class="col-sm-2 control-label">Phone</label>
                <div class="col-sm-8">
                <input type="text" class="form-control" id="phone" placeholder="Phone"/>
                </div>
            </div>

            <div class="form-group">
                <label for="address" class="col-sm-2 control-label">Address</label>
                <div class="col-sm-8">
                <input type="text" class="form-control" id="address" placeholder="Address"/>
                </div>
            </div>

        </form>
        <button className="btn btn-primary submit-btn">Submit</button>

        </div>


        </>)
}
