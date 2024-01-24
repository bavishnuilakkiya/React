import React, {Component} from 'react'

import '../Filter/Filters.css'
import axios from 'axios'

const URL = "http://localhost:8000/zomato/filterRestaurants/"

export default class Sort extends Component{

    restaurantSort=(event)=>{

        let mealId=this.props.mealId
        let option = event.target.value
        
        console.log(event.target.value)

        let sortURL;
        if(option){
            sortURL=`${URL}${mealId}`
        }
        else {
            sortURL=`${URL}${mealId}?sort=-1`
        }
        console.log('sort',event.target.value,sortURL)

        axios.get(sortURL).then((res) =>{
            console.log('Sorted result',res.data)
            this.props.restSort(res.data)
        })
    }

    render(){
        return(
            <>
                <div class="sort" onChange={this.restaurantSort}>
                    <h4 for="sort">Sort</h4>
                    <label className="radio">
                        <input type="radio" name="radio" value="1" />
                        Price low to high
                    </label>
                    <label className="radio">
                        <input type="radio" name="radio" value="" />
                        Price high to low
                    </label>
                    
                </div>
            </>
        )        
    }
}            