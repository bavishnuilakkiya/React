
import React,{Component} from 'react'
import { Link } from 'react-router-dom'

import './Card.css'

export const Card =(props) => {

  const listMeal = ({mealData}) => {

    console.log(mealData)

    if(mealData) {
      return mealData.map((item) => {
        
        return (
          <Link key={item._id} to ={`/listing/${item.mealtype_id}`}>
            <div className="menu-list">
              <img src={item.meal_image} alt={item.mealtype} />
              <div className="menu-list-detail">
                <h3>{item.mealtype}</h3>
                <p>{item.content}</p>
              </div>
            </div>
          </Link>
          
        )
      })
    }


  }
    return(
            <>
            <div className="menu">
                  {listMeal(props)}
            </div>
            </>
        )
}
