import React, {Component} from 'react'

import '../Filter/Filters.css'
import axios from 'axios';

let URL = 'http://localhost:8000/zomato/filterRestaurants/'

export default class CuisineFilter extends Component{

    filterCost=(event)=>{
        let mealId=this.props.mealId;
        let cost = (event.target.value).split("-")
        let lcost = cost[0]
        let hcost = cost[1]
        console.log(lcost,hcost)
        let costURL;

        if( lcost ==="" && hcost===""){
            costURL= `${URL}${mealId}`
        }

        else { costURL = `${URL}${mealId}?lcost=${lcost}&hcost=${hcost}`}

        console.log(costURL)

        axios.get(costURL).then((res) => {
            console.log(res.data)
            this.props.restPerCost(res.data)
        })
    }

    render(){
        return(
            <>
                <div className="cost" onChange={this.filterCost}>
                    <h4 for="cost">Cost For Two</h4>
                    <div className="radio-container">
                    <label className="radio">
                        <input type="radio" name="radio" value="" />
                        All
                    </label>
                    <label className="radio">
                        <input type="radio" name="radio" value="100-300" />
                        100-300
                    </label>
                    <label className="radio">
                        <input type="radio" name="radio" value="301-500" />
                        301-500
                    </label>
                    <label className="radio">
                        <input type="radio" name="radio" value="501-800" />
                        501-800
                    </label>
                    <label className="radio">
                        <input type="radio" name="radio" value="801-1000" />
                        801-1000
                    </label>
                    <label className="radio">
                        <input type="radio" name="radio" value="1001-1200" />
                        1001-1200
                    </label>
                    <label className="radio">
                        <input type="radio" name="radio" value="1201-2000" />
                        1201-2000
                    </label>         
                    </div> 
                </div>
                            
                    
            </>
        )
    }
}   
