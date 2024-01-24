import React, {Component} from 'react'

import axios from 'axios';

import '../Filter/Filters.css'

const url = 'http://localhost:8000/zomato/filterRestaurants/'

export default class CuisineFilter extends Component{

    filterCuisine=(event) =>{
        let cuisineId= event.target.value;
        let mealId = this.props.mealId;
        console.log("Selected Cuisine:",cuisineId)
        console.log(mealId)
        let cuisineURL;

        if(cuisineId ==="") {
            cuisineURL = `${url}${mealId}`}
        
        else {
         cuisineURL = `${url}${mealId}?cuisineId=${cuisineId}`}

         console.log(cuisineURL)

        axios.get(cuisineURL).then((res)=> {
            
            console.log(res.data)
            this.props.restPerCuisine(res.data)
         })

    }

    render(){
        return(
            <>
                <div className="cuisine" onChange={this.filterCuisine}>
                    <h4 for="cuisine">Cuisine</h4>
                    <div className="cuisine-container">
                        <div className="checkbox"> 
                            <label className="radio">
                                <input type="radio" name="radio" value="" />
                                    All
                            </label>
                            <label className="radio">
                                <input type="radio" name="radio" value="1" />
                                    North-Indian
                            </label>
                            <label className="radio">
                                <input type="radio" name="radio" value="2" />
                                    South-Indian
                            </label>
                            <label className="radio">
                                <input type="radio" name="radio" value="3" />
                                    Chinese
                            </label>
                            <label className="radio">
                                <input type="radio" name="radio" value="4" />
                                    Fast Food
                            </label>
                            <label className="radio">
                                <input type="radio" name="radio" value="5" />
                                    Street Food
                            </label>
                        </div>
                    </div>
                </div>
            </> 
           )

        }
}   
