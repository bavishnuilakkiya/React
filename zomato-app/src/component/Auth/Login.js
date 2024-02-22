import React, {Component} from 'react'

import 'font-awesome/css/font-awesome.min.css';

import Header from "../Listing/Header"
import Footer from "../Listing/Footer"
import { Link } from 'react-router-dom';


const url="http://localhost:8000/auth/login"

export default class Login extends Component {

    constructor(){
        super()
        this.state={
            message:""
        }
    }

    userData=()=>{
        fetch(`${url}`,{
            method:"POST",
            body: JSON.stringify(({'email': `${document.getElementById("email").value}`,
            'password': `${document.getElementById("password").value}`})),
            headers: {
                accept: "application/json",
                "Content-Type": "application/json"
            }
        }).then((res)=>res.json())
        .then((data)=>{
            if(data.auth == false){
                this.setState({ message: data.token},()=> console.log(this.state.message)) 
            }
            else{
                sessionStorage.setItem("ltk",data.token)
                this.setState({message:"Successfully Logged in"},()=> console.log(this.state.message))
                this.props.history.push("/")   
            } 
        })    
    }
    

       render(){
        
        return(
            <>
            <Header />
            <div className='auth-container'>
                <form className="form-horizontal">
                    <div className="form-group">
                        <label for="inputEmail3" className="col-sm-2 control-label">Email</label>
                        <div className="col-sm-10">
                        <input type="email" className="form-control" id="email" placeholder="Email" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="inputPassword3" className="col-sm-2 control-label">Password</label>
                        <div className="col-sm-10">
                        <input type="password" className="form-control" id="password" placeholder="Password" />
                        </div>
                    </div>
                </form>
                <button className="btn btn-primary submit-btn" onClick={this.userData}>Submit</button>
            </div>
            <Footer/>
            </>
        )
    }

}
