import React, { useEffect, useState } from 'react';
import './home.css';
// import fakeData from '../../FakeData/data.json'

const Home_h_t_l = () => {
    const [infos, setInfos] = useState([]);
    useEffect(()=>{
        // fetch('http://localhost:8000/api/show_event')
        fetch('http://localhost:8000/api/high_to_low_price')
        .then(res=>res.json())
        .then(data=>setInfos(data));
    },[])

    return (
        <div>
            <table border="1">
                <thead>

                </thead>

                <tbody>
                    {

                        infos.map(info=>
                        <div className="body_part1">
                            <a href="/show_product/{{info.p_id}}">
                
                                <img src= "{{asset('/upload')}}/{info.image}" width="190px" height="190px" />
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

export default Home_h_t_l;