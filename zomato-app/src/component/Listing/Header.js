import React, {Component} from 'react'
import { Link } from 'react-router-dom'


import './Header.css'

const url = "http://localhost:8000/auth/userInfo"

export default class Listing extends Component{

    constructor(){
        super()
        this.state={
            userData:""
        }
    }


    handleLogout=()=>{

        document.getElementById("")
        sessionStorage.setItem("loginStatus","LoggedOut")
        sessionStorage.setItem("userInfo",JSON.stringify("") )
        sessionStorage.setItem("ltk","")
        this.setState({userData:""})

        sessionStorage.removeItem("orderedItems")
        

    }



    conditionalHeader=()=>{
      
        if(this.state.userData.name){

            sessionStorage.setItem("loginStatus","LoggedIn")
            sessionStorage.setItem("userInfo",JSON.stringify(this.state.userData)) 
            return (
                <>
                  <div className="user-account">
                            
                               <Link to="/" className="Login">Hi {this.state.userData.name}</Link>
                               <Link to="/login" className="Logout" onClick={this.handleLogout} >Logout  </Link>
                        </div>  
                </>
            )}
        else{ 
            return (
                <>
                  <div className="user-account">
                            
                  <Link to="/login" className="Login">Login</Link>
                  <Link to="/register" className="register">Create an account</Link>
                    </div>  
                </>
            )
        }
}


    render(){
        return(

                <div className="container-head">
                    <h2 className="app-text">Zomato</h2>
                    <p className="logo">e!</p>
                    {this.conditionalHeader()}
                </div>
        )
    }
    
    componentDidMount(){
        let token=sessionStorage.getItem("ltk")
        console.log(token)
        fetch(url,
            {
                method:"GET",
                headers:{
                    "x-access-token":token
                }
            })
        .then((res)=>res.json()).then((data)=>{ 
            this.setState({userData: data}, ()=> console.log("User information:",this.state.userData))
            
        })
    }
}