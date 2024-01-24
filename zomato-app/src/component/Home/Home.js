import React, {Component} from 'react'
import {Route} from 'react-router-dom'

import "./Home.css"

import Search from './Search'
import QuickSearch from './QuickSearch'


export default class Home extends Component {
    render(){
        return(
            <div> 
              <div className="container-fluid">
                
                <Search />
                <QuickSearch />

              </div>
            </div>
            
        )
    }
}