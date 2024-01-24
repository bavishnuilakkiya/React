import React, { Component } from 'react'

export default class LifeCycleA extends Component {

    constructor(){
        super()
        this.state = {
            greet :"Hello!! Welcome ",
            name:"Ilakkiya"
        }

        console.log("LifeCycleA Constructor Method")
    }

    static getDerivedStateFromProps() {
        console.log("LifeCycleA getDerivedStateFromProps Method")
        return null
    }


    handleNameChange = (event)=> {
        this.setState({
            name : event.target.value
        })
    }

    render() {
        console.log(this.state.greet,"LifeCycleA render Method")
        return (
            <div>
                <h1>{this.state.greet}{this.state.name}</h1>
                <input value={this.state.name} onChange={this.handleNameChange}></input>
            </div>
            
        )
       
    }


    componentDidMount() {
        console.log("LifeCycleA ComponentDidMount Method")
    }


}