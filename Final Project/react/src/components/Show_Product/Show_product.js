import React, { useEffect, useState } from 'react';
import logo from '../../upload/Classic_Chair.jpg';
// import './home.css';

const Show_product = () => {
    const [infos, setInfos] = useState([]);
    useEffect(()=>{
        // fetch('http://localhost:8000/api/show_event')
        fetch('http://localhost:8000/api/abc.com')
        .then(res=>res.json())
        .then(data=>setInfos(data));
    },[])


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="/report_seller">Report Seller</a></td>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="submit" value="&#10084;" formaction="{{url('/wish')}}" /> </td>
                    </tr><br/>
                    <tr>
                    &nbsp;&nbsp;<td><img src={logo}  alt="logo" width="190px" height="190px" /></td>
                    </tr>
                    <tr>
                        <th>Name</th>
                        <td>Espresso Machine</td>
                    </tr>  
                    <tr>  
                        <th>Price</th>
                        <td>1500</td>
                    </tr>
                    <tr>
                        <th>Description</th>
                        <td>wooden product</td>
                    </tr>
                    <tr>
                        <th>Voucher</th>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <th>Quantity</th>
                        <td><input type="text" /></td>
                    </tr><br/>
                    <tr>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type="submit">Order Now</button></td>
                        <td><button type="submit" name="add_to_cart">Add To Cart</button></td>
                    </tr><br/>
                    <tr>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="/ask_question">Ask Question</a></td>
                        <td><a href="/review">Review</a></td>
                    </tr><br/>
                </thead>

                
            </table>

        </div>
    );
};

export default Show_product;