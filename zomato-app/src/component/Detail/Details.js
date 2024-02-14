import React, {Component} from 'react'
import axios from 'axios'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import './Details.css'
import Header from '../Listing/Header'
import Menu from './Menu'


let durl = "http://localhost:8000/zomato/filterRestaurants"

let murl="http://localhost:8000/list/menu"
export default class Details extends Component{

    constructor(){
        super()
        this.state={
            details:"",
            userItems:"",
            toalCost:0,
            menus:""
        }

    }

    addToCart=(data)=>{
        console.log(data)
        if(data){
        this.setState({userItems:data});
        
        }
    } 

   



    proceed=()=>{
        sessionStorage.setItem("menu",this.state.userItems)
        // sessionStorage.setItem("menuList",this.state.menu)
        let menuId=sessionStorage.getItem("menu")
        console.log("menuid is ",menuId)
        let OrderId=[]
        let result;
        if(menuId){
            result=menuId.split(",").map((item)=>{
                if(OrderId.indexOf(item)==-1){
                OrderId.push(parseInt(item))
                }
            })
        }

        fetch(`${murl}`,{
            method:"POST",
            body: JSON.stringify(OrderId),
            headers: {
                accept: "application/json",
                "Content-Type": "application/json"
            }
        }).then((res)=> res.json())
        .then((data)=>{
            let totalPrice=0
            console.log("menuData",data)
            this.setState({menus:data})
            data.map((item) =>{
                totalPrice+=parseFloat(item.menu_price)
                
            } )
            console.log(totalPrice)
            sessionStorage.setItem("totalPrice",totalPrice)
        })



        
}

    render(){
    
        let {details} = this.state
        return(
            <div>
                <Header/>
                <div className="main-container">
                    <div className="top-section" >
                        <img class="thumb" src={details.restaurant_thumb} alt={details.restaurant_name}/>
                        <button className="gallery btn btn-info" >
                            Click to see image gallery</button>    
                    </div>

                    
                    <div className="tab-section">
                        <h1 className="title">{details.restaurant_name}</h1>
                         <Tabs> 
                            <TabList>
                                <Tab><h2>Overview</h2></Tab>
                                <Tab><h2>Contact</h2></Tab>
                            </TabList>

                            <TabPanel>
                                <h4>Cuisine</h4>
                                {/* <p>    <span className="label label-danger">
                                            {details.cuisines[0].cuisine_name},
                                        </span>
                                        <span className="label label-warning">
                                            {details.cuisines[1].cuisine_name}
                                        </span></p> */}
                                <h4>Average Cost</h4>
                                <p>    ₹{details.cost} for two people (approx.)</p>
                                <h4>Review</h4>
                                <p>    1923 customers given {details.average_rating} rating and commented as "{details.rating_text}" restaurant </p>
                            </TabPanel>
                            <TabPanel>
                                <h4>Contact No:</h4>
                                <p>{details.contact_number}</p>
                                <h4>Address</h4>
                                <p>{details.address}</p>
                            </TabPanel>
                        </Tabs>
                    </div>

                    <div className="select-section">
                        <button className="btn btn-danger">Back</button>
                        <button className="btn btn-success" onClick={this.proceed}>Proceed</button>
                        
                    </div>
                    <div className="menu-container">
                        <h1 className="title">{details.restaurant_name} Menus</h1>
                        
                        {/* <h2>{details.restaurant_id}</h2> */}
                        <Menu restId={this.props.location.search.split("=")[1]} FinalOrder={(data)=>{ this.addToCart(data)}}/>   
                    </div>
                    
                </div> 
            </div>    
        )
    }


    async componentDidMount(){
        let restId= this.props.location.search.split("=")[1]
        console.log(restId)
        

        let response = await axios.get(`${durl}?restaurantId=${restId}`,{method:"GET"})
        console.log(response.data[0])
       
        this.setState({details: response.data[0]})

        }
    
}
