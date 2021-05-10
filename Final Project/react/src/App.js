// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './components/Home/Home';
import Home_h_t_l from './components/Home/Home';
import Home_l_t_h from './components/Home/Home';
import Home_b_s_p from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Profile from './components/Profile/Profile';
import Premium from './components/Premium_Membership/Premium_Membership';
import Confirm_Premium from './components/Premium_Membership/Confirm_Premium_Membership';
import Edit_Profile from './components/Profile/Edit_Profile';
import Add_to_cart from './components/Add_To_Cart/Add_to_cart';
import Show_wish from './components/Show_Wish/Show_wish';
import Order_history from './components/Order_history/Order_history';
import Contact_us from './components/Contact_us/Contact_us';
import Show_product from './components/Show_Product/Show_product';
import Report_seller from './components/Report_seller/Report_seller';
import Ask_question from './components/Ask_question/Ask_question';
import Review from './components/Review/Review';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
        <Login />  
        </Route> 

        <Route path="/login">
        <Login />  
        </Route>

        <Route path="/registration">
        <Registration />  
        </Route>
        
        <Route path="/profile">
        <Profile />  
        </Route>
        
        <Route path="/premium_membership">
        <Premium />  
        </Route>
        
        <Route path="/confirm_premium_membership">
        <Confirm_Premium />  
        </Route>
        
        <Route path="/edit_profile">
        <Edit_Profile />  
        </Route>
        
        <Route path="/abc.com">
        <Home />  
        </Route>

        <Route path="/high_to_low_price">
        <Home_h_t_l />  
        </Route>

        <Route path="/low_to_high_price">
        <Home_l_t_h />  
        </Route>

        <Route path="/best_selling_product">
        <Home_b_s_p /> 
        </Route>

        <Route path="/show_cart">
        <Add_to_cart />  
        </Route>
        
        <Route path="/Show_wish">
        <Show_wish />  
        </Route>
        
        <Route path="/order_history">
        <Order_history />  
        </Route>
        
        <Route path="/contact_us">
        <Contact_us />  
        </Route>
        
        <Route path="/show_product">
        <Show_product />  
        </Route>
        
        <Route path="/report_seller">
        <Report_seller />  
        </Route>
        
        <Route path="/ask_question">
        <Ask_question />  
        </Route>
        
        <Route path="/review">
        <Review />  
        </Route>
        
        <Route path="/logout">
        <Login />  
        </Route>
        
  

        {/* <Route path="/event_list">
        <EventList />  
        </Route> */}

        
         <Route path='*'>
           <h4>404 not found</h4>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
