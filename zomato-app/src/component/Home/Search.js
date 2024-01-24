
import React, {Component} from 'react'
import './Search.css'

const lurl = "http://localhost:8000/zomato/locations"

const rurl = "http://localhost:8000/zomato/filterRestaurants?stateId="

export default class Search extends Component{

    constructor(){
        super()
        this.state={
            locations:"",
            restaurants:""
        }
    }

    renderLocation=(data) => {
        console.log(data)
        if(data) {
            return data.map((item)=>{
                return( <option key={item._id} value={item.state_id} >{item.state}</option> )
            })
        }
    }

    handleCity= (event) =>{
        let stateId=event.target.value
        
        fetch(`${rurl}${stateId}`,{method :"GET"})
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            this.setState({ restaurants:data })
        }
        )
        
    }

    renderRestaurant=(data)=> {

        console.log(data)
        if(data) {
            return data.map((item)=>{
                return( <option key={item._id} value={item.restaurant_id}>{item.restaurant_name}</option> )
            })
        }

    }

    render(){
        return(
        <div className="container-main">
            <h2 className="app-name"> Zomato</h2>
            <ul className="nav justify-content-end">
            <li className="nav-item">
                <button className="btn btn-default login">Login</button>
            </li>
            <li className="nav-item">
                <button className="signup btn btn-default">Create an account</button>
            </li>
            </ul>
            <div className="row text-center">
            <div className="container-fluid justify-content-center">
                <p className="logo">e!</p>
                <h1 className="home-title">Find the best restaurants, cafés, and bars</h1>
                <div className="search justify-content-center">
                <select className="location" onChange={this.handleCity}>
                    <option>Please choose a city</option>
                    <option>--Select city---</option>
                    {this.renderLocation(this.state.locations)}
                    
                </select>
                <div className="container">
                    <i className="fa fa-search"></i>
                    <select className="restaurants">
                    <option>Search for restaurants</option>
                    {this.renderRestaurant(this.state.restaurants)}
                    </select>
                </div>
                </div>
            </div>
            </div>
        </div>)

    }

    componentDidMount(){
        fetch( `${lurl}`,{method: "GET"})
        .then((res) => res.json())
        .then((data)=> this.setState ({locations : data}) )

    }

    
   

}