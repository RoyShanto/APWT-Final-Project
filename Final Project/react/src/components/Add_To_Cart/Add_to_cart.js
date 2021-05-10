import React, { useEffect, useState } from 'react';
// import './home.css';

const Add_to_cart = () => {
    const [infos, setInfos] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:8000/api/show_cart')
        .then(res=>res.json())
        .then(data=>setInfos(data));
    },[])

    return (
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Product name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        infos.map(info=>
                        <tr key={info.id}>
                            <td>{info.buyer_name}</td>
                            <td>{info.buyer_email}</td>
                            <td>{info.p_name}</td>
                            <td>{info.p_price}</td>
                            <td>{info.product_quantity}</td>
                            <td>{info.total_price}</td>
                            {/* <td>{info.id}</td> */}
                            
                            <td><a href="/show_product">Order Now</a></td>
                        </tr>
                        )

                    }
                </tbody>
            </table>

        </div>
    );
};

export default Add_to_cart;