import React, { Component } from 'react'
import Header from '../Listing/Header'
import Footer from '../Listing/Footer'

import '../Orders/Order.css'
import { Link } from 'react-router-dom'



export default class Order extends Component{

    constructor(){
        super()
        this.state={
            orderTotal:""
        }
    }


    renderMenu=(data)=>{
        let check=JSON.parse(JSON.stringify(data))
        if(check) {
            return check.map((item)=>{
                return(
                    <>
                    <tr className="table-success">
                    <td key={item._id}>{item.menu_id} </td>
                    <td key={item._id}>{item.menu_name} </td>
                    {/* <td>1</td> */}
                    </tr>
                    </>
                    )  
            })
                        
        }
    }


    renderUser=(data)=>{
        
        console.log("parsed user data",data)
        if(data) {
            
                return(
                    <>
                    <div className="user-container">
                        <form className="form-vertical">
                            <div className="user-form">
                                <div className="col-sm-6">
                                    <label for="name" className="control-label">User name</label>
                                    <input type="text" className="form-control" id="name" value={data.name} />
                                </div>

                                <div className="col-sm-6">
                                    <label for="email" className="control-label">Email address</label>                                
                                    <input type="text" className="form-control" id="email" value={data.email} />
                                </div>

                                <div className="col-sm-6">
                                    <label for="address" className="control-label">Address</label>                                
                                    <input type="text" className="form-control" id="address" value={data.address} />
                                </div>

                                <div className="col-sm-6">
                                    <label for="phone" className="control-label">Contact No</label>                                
                                    <input type="phone" className="form-control" id="phone" value={data.phone} />
                                </div>

                               
                            </div>
                        </form>    
                        
                    </div>
                    </>
                    )  
                        
        }
    }


    handlePayment=(data)=>{

        
        console.log("Kindly pay ", data)
        let amt= parseInt(data)
        console.log("amount in number ", amt)

        // alert(`${amt} payment Successful`)

        let options={
           key: "rzp_test_Yz9IjuZBcQpnAD",
           key_secret:"OKp67Sab2pkaMDmbhP70uFjN",
           amount:amt*100,
           currency:"INR",
           Name:"Zomato payment",
           description:"For testing purpose",
           handler: function(response){
            let paymentId=response.razorpay_payment_id;
            console.log(response.razorpay_payment_id);
            sessionStorage.setItem("paymentId",paymentId)
           },
           profile:{
                name:"Jack",
                email:"jack@gmail.com",
                contact:"9876543210"
           },
           notes:{
            address:"plot-38, Chennai"
           },
           theme:{
            color:"lightblue"
           }
        };


        var pay= new window.Razorpay(options);
        pay.open();
       

    }

    render(){

        let user=JSON.parse(sessionStorage.getItem("userInfo"))
        console.log("User details",user)

        let rest_name=sessionStorage.getItem("restaurant_name")
       
        let orderList=JSON.parse(sessionStorage.getItem("orderedItems"))
        console.log("Final order list from session data",orderList)
        // this.setState({finalOrder:orderList})

        let Total=sessionStorage.getItem("totalPrice")
        // this.setState({orderTotal:Total})
        
        return(
            <div>
                <Header />
            
                <div className="order-container">
                    <div className="Order-title">
                        <h1>User Info</h1>
                        {this.renderUser(user)}
                        <h1>Order Summary</h1>
                         <h2 style={{backgroundColor: '#66ba93'}}>{rest_name}</h2> 
                         <table className="table table-success table-striped">
                            <tr >
                                <th> menu Id </th>
                                <th> menu Name </th>
                                {/* <th> Quantity </th> */}
                            </tr>
                        
                         { this.renderMenu(orderList)}   
                         </table>

                         <h2 style={{display:'inline'}}>Order total:<span style={{display:'inline'}}> {Total} </span></h2>
                    </div>

                    <div>
                        <button className="btn btn-default"><Link onClick={this.handlePayment(Total)}>Proceed to pay {Total} </Link></button>
                    </div>

                </div>

                <Footer />
            </div>)

    }

//    async componentDidMount(){
       
//     }

}