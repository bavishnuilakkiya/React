import React, {Component} from 'react'

import '../Filter/Filters.css'
import axios from 'axios'

const lurl = "http://localhost:8000/zomato/locations"
const URL="http://localhost:8000/zomato/filterRestaurants/"

export default class CuisineFilter extends Component{

    constructor(){
        super()
        this.state={
            locations:""
        }
    }

    renderLocation=(data)=>{

        if(data){
        return data.map((item)=>{
                return(
                    <>
                    <option key={item._id} value={item.state_id}>{item.state}</option>
                    </>
                )
        })
    }

    }

    filterLocation=(event)=>{
        let mealId=this.props.mealId
        let stateId=event.target.value
        let stateURL;
        if(stateId){
            stateURL=`${URL}${mealId}?stateId=${stateId}`
        }
        else stateURL=`${URL}${mealId}`

        axios.get(stateURL).then((res) =>{
            console.log(res.data)
            this.props.restPerLocation(res.data)
        })

    }

    render(){
        return(
            <>
            
                <div class="select" onChange={this.filterLocation}>
                    <h4 for="loc">Select Location</h4>
                    <select name="loc">
                        <option>Select Location</option>
                        {this.renderLocation(this.state.locations)}
                        
                    </select>
                </div>
            </>
        )
    }

    componentDidMount(){
        axios.get(lurl).then((res) =>{
            console.log(res.data)
            this.setState({locations:res.data})
        })
    }
}   
