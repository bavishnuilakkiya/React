import React, {Component} from 'react'
import {Route} from 'react-router-dom'

import "./Home.css"

import Header from '../Listing/Header'
import Search from './Search'
import QuickSearch from './QuickSearch'
import Footer from '../Listing/Footer'



export default class Home extends Component {
    render(){
        return(
          <>
          <Header />
            <div> 
              
              <div className="container-fluid">
                
                <Search />
                <QuickSearch />
                <Footer />
              </div>
            </div>
        </>  
        )
    }
}