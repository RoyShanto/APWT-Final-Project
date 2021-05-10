import React, { useEffect, useState } from 'react';
import logo from '../../upload/Classic_Chair.jpg';
import './home.css';
// import fakeData from '../../FakeData/data.json'

const Home = () => {
    const [infos, setInfos] = useState([]);
    useEffect(()=>{
        // fetch('http://localhost:8000/api/show_event')
        fetch('http://localhost:8000/api/abc.com')
        .then(res=>res.json())
        .then(data=>setInfos(data));
        // setInfos(fakeData);
    },[])
// console.log(infos);

// fetch('http://localhost:8000/api/test')
// fetch('http://localhost:8000/api/show_event')
// .then(res=>res.json())
// .then(data=>console.log(data));
// setInfos(data);
// .then(data=>console.log(data.name));

    return (
        <div>
            <table border="1">
                <thead>
                    {/* <tr>
                        <th>Id</th>
                        <th>Product name</th>
                        <th>Product price</th>
                        <th>Product quantity</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>status</th>
                        <th>Sell_quantity</th>
                    </tr> */}
                </thead>

                <tbody>
                    {
                        // infos.map(info=>
                        // <tr key={info.p_id}>
                        //     <td>{info.p_name}</td>
                        //     <td>{info.e_price}</td>
                        //     <td>{info.e_quantity}</td>
                        //     <td>{info.description}</td>
                        //     <td>{info.image}</td>
                        //     <td>{info.status}</td>
                        //     <td>{info.sell_quantitu}</td>
                        //     {/* <td>edit </td> */}
                        // </tr>
                        // )


                        infos.map(info=>
                        <div className="body_part1">
                            {/* <a href="/show_product/{info.p_id}"> */}
                            {/* <a href="{{url('/show_product/' . {info.p_id})}}" > */}
                            <a href="/show_product" >
                                <img src={logo}  alt="logo" width="190px" height="190px" />
                                {/* <img src= "{{asset('/src/upload')}}/{info.image}" width="190px" height="190px" /> */}
                                <b>{info.p_name}</b>
                                <div className="body_part2"> 
                                {info.p_price} </div>
                                {info.description}<br />
                            </a>
                        </div>
                        )

                    }
                </tbody>
            </table>

        </div>
    );
};

export default Home;