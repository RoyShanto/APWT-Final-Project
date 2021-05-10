import React, { useEffect, useState } from 'react';
import './home.css';

const Home_l_t_h = () => {
    const [infos, setInfos] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:8000/api/low_to_high_price')
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

export default Home_l_t_h;