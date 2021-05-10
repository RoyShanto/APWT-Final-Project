import React from 'react';
import { useState } from 'react';

const AddEvent = () => {

    const [newUser, setNewUser] = useState({
        title: '',
        description: '',
    });
console.log(newUser);

    const formSubmit=(e)=>{
        // e.preventDefault();

        // if(status == 'add'){
        //     callback(newUser);

        //     setNewUser({
        //         title: '',
                    // description: '',
        //     })
        // } 
    }

    const changeUser = (e)=>{
        const attar = e.target.name;
        const value = e.target.value;
        const user = {...newUser, [attar]: value};
        setNewUser(user);
        // console.log(e.target.name, e.target.value);
        // setNewUser(...newUser, id: e.target.value)
        
    }

    return (
        <div>
            <form onSubmit={formSubmit}>
            <table>
                <thead></thead>
                <tbody>
                    <tr>
                        <td>Event Title</td>
                        <td>
                            <input type="text" name="title" onChange={changeUser}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Description</td>
                        <td>
                            <input type="text" name="description" onChange={changeUser}/>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button type="submit">Add</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
            
        </div>
    );
};

export default AddEvent;