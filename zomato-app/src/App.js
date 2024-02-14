
import './App.css';
import LifeCycleA from './class_component/LifeCycleA';
import { Routes, Route} from "react-router-dom"

import Home from "./component/Home/Home"
import ListingApi from './component/Listing/ListingApi';
import Details from './component/Detail/Details'
import {Register} from './component/Auth/Register';
import {Login} from './component/Auth/Login';

function App() {
  return (
    <div className="App">
      
        <Route exact path="/" component={Home }/>
        <Route path="/listing/:mealId" component={ListingApi } />
        <Route path="/details" component={Details } />
        <Route path="/login" component={Login } />
        <Route path="/register" component={Register } />
      
    </div>
  );
}

export default App;
