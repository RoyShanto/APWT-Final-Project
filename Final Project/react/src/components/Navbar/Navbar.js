import React from 'react';
import {Link} from 'react-router-dom';
const Navbar = () => {

    return (
        <div className="nav-bar">
            <ul>
                <h1>Welcome To Our Website..!</h1>
                <Link to="/abc.com">Home</Link> &nbsp;&nbsp;&nbsp;
                {/* <Link to="/profile/{{session('username')}}">My Profile</Link> &nbsp;&nbsp;&nbsp; */}
                <Link to="/profile">My Profile</Link> &nbsp;&nbsp;&nbsp;
                <Link to="/show_cart">Add To Cart</Link> &nbsp;&nbsp;&nbsp;
                <Link to="/show_wish">Wish List</Link> &nbsp;&nbsp;&nbsp;
                <Link to="/order_history">Order History</Link> &nbsp;&nbsp;&nbsp;
                <Link to="/contact_us">Contact Us</Link> &nbsp;&nbsp;&nbsp;
                <Link to="/logout">Logout</Link> &nbsp;&nbsp;&nbsp;
{/* /// */}
                <div className="dropdown">
                <button onclick="myFunction()" className="dropbtn">Filter</button>
                <div id="myDropdown" class="dropdown-content">

                <Link to="/best_selling_product">Best Selling Product</Link> &nbsp;&nbsp;&nbsp;
                <Link to="/low_to_high_price">Low To High Price</Link> &nbsp;&nbsp;&nbsp;
                <Link to="/high_to_low_price">High To Low Price</Link> &nbsp;&nbsp;&nbsp;

                    {/* <a href="/best_selling_product">Best Selling Product</a>
                    <a href="/low_to_high_price">Low To High Price</a>
                    <a href="/high_to_low_price">High To Low Price</a> */}
                </div>
                </div>
            </ul>
            <hr />


            
        </div>
    );
};

export default Navbar;
