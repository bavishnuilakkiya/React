import React, {Component} from 'react'
import { Link } from 'react-router-dom'


import './ListingApi.css'


export const ListingData =(props) =>{

    const renderData = ({listData}) => {
            console.log('Listing of restaurant data',listData)
                
            if(listData){
               return listData.map((item) => {
                
                return (
                    
                    <div className="result-container">
                        <div className="item">
                            <div className="top-sec">
                                <img src={item.restaurant_thumb} alt={item.restaurant_name}/>
                                    <div className="side-sec">
                                    <Link className="link-component"key={item._id} to ={`/details?restaurantId=${item.restaurant_id}`}>{item.restaurant_name}</Link>
                                        <h4 className="list-comment">Comment : {item. rating_text} with {item.average_rating}</h4>
                                        <p>{item.address}</p>
                                    </div>    
                            </div>

                            <div className="bottom-nav">
                                <div className="labelDiv">
                                <span  className="tag">Meal types: </span>
                                <span className="label label-primary">
                                        {item.mealTypes[0].mealtype_name}, 
                                    </span>
                                    <span className="label label-info">
                                            {item.mealTypes[1].mealtype_name}
                                    </span>
                                </div>
                                <div className="labelDiv">
                                <span className="tag">Cuisines :</span> 
                                    <span className="label label-danger">
                                        {item.cuisines[0].cuisine_name},
                                    </span>
                                    <span className="label label-warning">
                                        {item.cuisines[1].cuisine_name}
                                    </span>
                                </div>    
                                <div className="labelDiv">
                                <span className="tag">Cost for two :</span> ₹{item.cost}
                                </div>
                            </div>
                        </div>
                    </div>)
               })
            }
                    
    }        
    

        return(
            <div className="panel-horizontal">
                {renderData(props)}
            </div>
            
        )
}    
