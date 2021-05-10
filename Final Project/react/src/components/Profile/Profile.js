import React from 'react';
import { Component } from 'react';
// import App from '../../App';
// import '../../App.css';
import './Profile.css';

class Login extends Component {

    render(){
        return (
            <div className="form">
                <h2> My Profile</h2>
                <form>
                {/* <form> */}
                <table>
                    <thead></thead>
                    <tbody>
                    <tr>
                            <td>Full Name: </td>
                            <td>
                                Shanto Roy
                            </td>
                        </tr>
                        <tr>
                            <td>Username: </td>
                            <td>
                                Shanto
                            </td>
                        </tr>
                        <tr>
                            <td>Email: </td>
                            <td>
                                shanto@gmail.com
                            </td>
                        </tr>
                        <tr>
                            <td>Password: </td>
                            <td>
                               12345
                            </td>
                        </tr>
                        <tr>
                            <td>Address: </td>
                            <td>
                                Dhaka
                            </td>
                        </tr>
                        <tr>
                            <td>Phone No: </td>
                            <td>
                                01627167955
                            </td>
                        </tr>
                        <tr>
                            <td>City: </td>
                            <td>
                                Dhaka
                            </td>
                        </tr>
                        <tr>
                            <td>Country: </td>
                            <td>
                                Bangladesh
                            </td>
                        </tr>
                        <tr>
                            <td><a href="/edit_profile">Edit Profile</a></td>
                            <td><a href="/premium_membership">Premium Membership</a></td>
                        </tr>
                    </tbody>
                </table>
                </form>
            </div>
        );
    }

}
export default Login;
