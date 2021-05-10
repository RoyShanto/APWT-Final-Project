import React from 'react';
import { Component } from 'react';
// import App from '../../App';
// import '../../App.css';
import './Login.css';

class Login extends Component {

    constructor(){
        super();
        this.state={
            username: "",
            password: "",

            // isLoading: true,
            // groups: []
        }
    }


    // submit(){
    //     this.preventDefault();
    //     console.log(this.state);
    //     // fetch('http://localhost:8000/api/login', {
    //     //     method: 'post',
    //     //     body: JSON.stringify(
    //     //         this.state
    //     //     ),
    //     //     headers:{
    //     //         'Accept' : 'application/json',
    //     //         'Content-Type':'application/json',
    //     //     }
    //     // }).then(function(response){
    //     //     response.json().then(function(resp){
    //     //         console.log(resp)
    //     //     })
    //     // })
    // }



    formSubmit = e => {
        e.preventDefault();
            console.log(this.state);
            fetch('http://localhost:8000/api/login', {
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
                <h2> Login Hare..!</h2>
                <form onSubmit={this.formSubmit}>
                {/* <form> */}
                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>Username</td>
                            <td>
                                <input type="text" name="username" onChange={(item)=>{this.setState({username:item.target.value})}} required />
                            </td>
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td>
                                <input type="password" name="password" onChange={(item)=>{this.setState({password:item.target.value})}} required />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                {/* <button onClick={()=>{this.submit()}}>Login</button> */}
                                <button type="submit">Login</button>
                            </td>
                        </tr>
                        <a href="/registration">Registration</a>
                    </tbody>
                </table>
                </form>
            </div>
        );
    }

}
export default Login;
