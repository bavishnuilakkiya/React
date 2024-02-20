import React, {Component} from 'react'
import axios from 'axios'


import '../Detail/Details.css'

let murl="http://localhost:8000/list/restaurantmenu"

export default class Menu extends Component{

    constructor(){
        super()
        
        this.state={
            menu:"",
            orderId:[]  ,
           
        }
        
    }
    
    
    placeOrder=(id)=>{
        console.log("Added to cart :",id)
        this.state.orderId.push(id)
        console.log(this.state.orderId)
        this.props.FinalOrder(this.state.orderId)
        
        
    }

    removeOrder=(id)=>{
        console.log(this.state.orderId.indexOf(id))
        if(this.state.orderId.indexOf(id)>-1){
           
            this.state.orderId.splice(this.state.orderId.indexOf(id),1)
            console.log("removed from cart :",id)
            console.log(this.state.orderId)
            this.props.FinalOrder(this.state.orderId)

        }
        
    }

    renderCart=(orders)=>{
        
        if(orders){
            return orders.map((item, index) => {
                return (<b key={index}> {item}, </b>)            
        })
        
        }
        
    }

    renderMenu=(data) =>{

        if(data)
        {
            return data.map((item) => {
                
                return (
                    <div>
                        <div className="menu-section">
                            <div>
                                <img className="menu-img" src={item.menu_image} alt={item.menu_name}/>
                            </div>
                            <div className="menu-details">
                                <div>
                                    <h3>{item.menu_name}</h3>
                                    <p>{item.description}</p>
                                </div>
                                <div>
                                    <h4>MenuId: {item.menu_id}</h4>
                                    <h4>MenuType: {item.menu_type}</h4>
                                    <h4>Menu_Price: {item.menu_price}</h4>
                                </div>

                                <div className="menu-choice">
                                    <button className="btn btn-success" onClick={()=>{this.placeOrder(item.menu_id)}}>+</button>
                                    <button className="btn btn-danger" onClick={()=>{this.removeOrder(item.menu_id)}}>-</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }

    render(){

        return(
            <>
            
                    <h2>Ordered list</h2>
                    <div class="bg-info">
                    <h4>Item Number Added <br></br>
                        {this.renderCart(this.state.orderId)}
                    </h4>
                    </div>  
                    {this.renderMenu(this.state.menu)}
              
                    

            </>
        )
    }

    componentDidMount(){
        let restId=this.props.restId
        console.log('restaurantId in menu',this.props.restId)
        axios.get(`${murl}?restaurantId=${restId}`).then((res) => {
            // console.log(res.data)
            this.setState({menu:res.data})
        })
    }
 
}