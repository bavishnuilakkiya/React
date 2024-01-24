import React, {Component} from 'react'
import axios from 'axios'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import './Details.css'
import Header from '../Listing/Header'

let durl = "http://localhost:8000/zomato/details"

export default class Details extends Component{

    constructor(){
        super()
        this.state={
            details:"",
        }

    }


    render(){
    
        let {details} = this.state
        return(
            <div>
                <Header/>
                <div className="main-container">
                    <div class="top-section">
                        <img class="thumb" src={details.restaurant_thumb} alt={details.restaurant_name}/>
                        <button className="gallery">
                            Click to see image gallery</button>    
                    </div>

                    <div className="tab-section">
                         <Tabs>
                            <h1>{details.restaurant_name}</h1>
                            <TabList>
                            <Tab><h2>Overview</h2></Tab>
                            <Tab><h2>Contact</h2></Tab>
                            </TabList>

                            <TabPanel>
                            <h2>About this place</h2>
                            <h3>Cuisine</h3>
                            {/* <p>    <span className="label label-danger">
                                        {details.cuisines[0].cuisine_name},
                                    </span>
                                    <span className="label label-warning">
                                        {details.cuisines[1].cuisine_name}
                                    </span></p> */}
                            <h3>Average Cost</h3>
                            <p>    ₹{details.cost} for two people (approx.)</p>
                            <h3>Review</h3>
                            <p>    1923 customers given {details.average_rating} rating and commented as "{details.rating_text}" restaurant </p>
                            </TabPanel>
                            <TabPanel>
                            <h2>Reach out us</h2>
                            <h3>Contact No:</h3>
                            <p>{details.contact_number}</p>
                            <h3>Address</h3>
                            <p>{details.address}</p>
                            </TabPanel>
                        </Tabs>
                    </div>
                    
                </div> 
            </div>    
        )
    }


    async componentDidMount(){
        let restId= this.props.location.search.split("=")[1]
        console.log(restId)

        let response = await axios.get(`${durl}/${restId}`,{method:"GET"})
        console.log(response.data[0])
       
        this.setState({details: response.data[0]})

        }


    
}
