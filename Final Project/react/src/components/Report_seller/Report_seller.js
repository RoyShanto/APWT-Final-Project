import React from 'react';
import { Component } from 'react';
// import App from '../../App';
// import '../../App.css';
// import './Login.css';

class Report_seller extends Component {

    constructor(){
        super();
        this.state={
            message: "",
        }
    }
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
                <h2> Report Message..!</h2>
                <form onSubmit={this.formSubmit}>
                {/* <form> */}
                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>Message:</td><br/>
                            <td>
                                <textarea type="text" name="message" onChange={(item)=>{this.setState({message:item.target.value})}} required> </textarea>
                            </td>
                        </tr>
                        
                        <tr>
                            <td></td>
                            <td>
                                &nbsp;&nbsp;&nbsp;<button type="submit">Send</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </form>
            </div>
        );
    }

}
export default Report_seller;
