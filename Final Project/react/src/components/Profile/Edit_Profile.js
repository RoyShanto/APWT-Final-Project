import React from 'react';
import { Component } from 'react';
import '../Login/Login.css';

class Edit_Profile extends Component {

    constructor(){
        super();
        this.state={
            full_name:"",
            username: "",
            email: "",
            password: "",
            c_password: "",
            address: "",
            phone_no: "",
            city: "",
            country: "",
        }
    }

    formSubmit = e => {
        e.preventDefault();
            console.log(this.state);
            fetch('http://localhost:8000/api/registration', {
                method: 'POST',

                headers:{
                    'Accept' : 'application/json',
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({'f': this.state})
            })
            // .then(function(response){
            //     response.json().then(function(resp){
            //         console.log(resp)
            //     })
            // })
////// OR
            // .then(res=>res.json())
            // .then(data=>console.log(data));
            
    }

    render(){
        return (
            <div className="form">
                <h2> Edit Profile..! </h2>
                <form onSubmit={this.formSubmit}>
                {/* <form> */}
                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>Full Name</td>
                            <td>
                                <input type="text" name="full_name" onChange={(item)=>{this.setState({full_name:item.target.value})}} required />
                            </td>
                        </tr>
                        <tr>
                            <td>Username</td>
                            <td>
                                <input type="text" name="username" onChange={(item)=>{this.setState({username:item.target.value})}} required />
                            </td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>
                                <input type="email" name="email" onChange={(item)=>{this.setState({email:item.target.value})}} required />
                            </td>
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td>
                                <input type="password" name="password" onChange={(item)=>{this.setState({password:item.target.value})}} required />
                            </td>
                        </tr>
                        <tr>
                            <td>Confirm Password</td>
                            <td>
                                <input type="password" name="c_password" onChange={(item)=>{this.setState({c_password:item.target.value})}} required />
                            </td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>
                                <input type="text" name="address" onChange={(item)=>{this.setState({address:item.target.value})}} required />
                            </td>
                        </tr>
                        <tr>
                            <td>Phone No</td>
                            <td>
                                <input type="number" name="phone_no" onChange={(item)=>{this.setState({phone_no:item.target.value})}} required />
                            </td>
                        </tr>
                        <tr>
                            <td>City </td>
                            <td>
                                <input type="text" name="city" onChange={(item)=>{this.setState({city:item.target.value})}} required />
                            </td>
                        </tr>
                        <tr>
                            <td>Country </td>
                            <td>
                                <input type="text" name="country" onChange={(item)=>{this.setState({country:item.target.value})}} required />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button type="submit">Update</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </form>
            </div>
        );
    }

}
export default Edit_Profile;
