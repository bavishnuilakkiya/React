
import React,{Component} from 'react'

import './Display.css'
import { Link } from 'react-router-dom'

const murl="http://localhost:8000/list/mealtypes"

export default class Display extends Component{


    constructor(){
        super()
        this.state={
            mealType:""
        }
    }

    renderMealType=(data) => {

        console.log('inside render mealtype',data)

        if(data) 
        return data.map((item) => {
            return(
                <>
                    <Link key={item._id} to ={`/listing/${item.mealtype_id}`}>
                        <div className="menu-list">
                            <img src={item.meal_image} alt={item.mealtype} />
                            <div className="menu-list-detail">
                                <h3>{item.mealtype}</h3>
                                <p>{item.content}</p>
                            </div>
                        </div>
                    </Link>    
                </>    
            )
        })
        
    }

    render(){
        return (
                <>
                {this.renderMealType(this.state.mealType)}
                </>
        )
      }
    
    componentDidMount(){
        fetch(`${murl}`, { method: "GET"})
        .then((res) => res.json())
        .then((data) => {
            this.setState({ mealType:data})
            console.log('Menu',data)
        })
    }
   
}
