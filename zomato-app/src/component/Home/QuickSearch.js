import React, { Component} from 'react'


import './QuickSearch.css'
import { Card } from './Card'
import Display from './Display'

const murl="http://localhost:8000/list/mealtypes"

export default class QuickSearch extends Component {

    constructor(){
        super()
        this.state={
            mealType:""
        }
    }

    render(){
        return(
            <div className="container-detail">
                <h2>Quick Searches</h2>
                <p>Discover restaurants by type of meal</p>
                
                {/* Passing the mealtype data as a props to the Card Component */}
                {/* <Card mealData = {this.state.mealType}/> */}

                {/* As same as search and quick search Component, created Display component as class to fetch the mealType. */}
                
                <div className="menu">
                <Display />
                </div>

            </div>
        )
    }


    componentDidMount(){
        fetch( `${murl}` ,{method:"GET"})
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            this.setState({mealType:data})
        })
    }


}