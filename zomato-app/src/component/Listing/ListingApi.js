
import React, {Component} from 'react'

import './ListingApi.css'

import Header from "./Header"
import LocationFilter from '../Filter/LocationFilter'
import CuisineFilter from '../Filter/CuisineFilter'
import CostFilter from '../Filter/CostFilter'
import Sort from '../Filter/Sort'
import {ListingData} from './ListingData'
import Footer from './Footer'

const rurl="http://localhost:8000/zomato/filterRestaurants/"

export default class ListingApi extends Component{

    constructor(){
        super()
        this.state={
            restaurants:""
        }
    }

    setDataFilter=(data)=>{
        console.log('filtered restaurants',data)
        this.setState({restaurants:data})
    }

    render(){
        return(

            <div className="container-fluid">

                <Header/>

                <div className="container-main">
                    <h1 className="title">Quick Search</h1>
                    <div className="details-section">
                        {this.renderRestaurants}
                        <div className="panel-vertical">
                            <h3>Filters</h3>
                                <LocationFilter mealId = {this.props.match.params.mealId} restPerLocation = {(data)=> {this.setDataFilter(data)}}/>
                                <CuisineFilter mealId = {this.props.match.params.mealId} restPerCuisine = {(data)=> {this.setDataFilter(data)}}/>
                                <CostFilter mealId = {this.props.match.params.mealId} restPerCost = {(data)=> {this.setDataFilter(data)}}/>
                                <Sort mealId = {this.props.match.params.mealId} restSort = {(data)=> {this.setDataFilter(data)}} />
                        </div>
                        <ListingData listData={this.state.restaurants}/>
                    </div>
                </div>

                <Footer />
          </div>
        )
    }

    componentDidMount(){

        let mealId = this.props.match.params.mealId

        sessionStorage.setItem("mealId",  this.props.match.params.mealId      )
        console.log('restaurant url in listing',`${rurl}${mealId}`)

        fetch(`${rurl}${mealId}`, {method: "GET"})
        .then((res) => res.json())
        .then((data) => {
            this.setState( { restaurants : data })
            console.log(data)
        })
    }



}