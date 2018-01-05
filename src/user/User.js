import React from 'react';
import {GetUser} from "./GetUser";

export class User extends React.Component {
    state = {
        userName: '',
        password: '',
        email: '',
        city: '',
        id: '',
        buttonAct: false
    };

    onUserStateChange = (event) => {
        this.setState({
            id: event.target.value
        });
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.setState({
            buttonAct: false
        });
        this.setState({
            buttonAct: true
        });
        // fetch('http://localhost:5000/user', {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(this.state)
        // }).then(response => response.json())
        //     .then(responseJson => {
        //         console.log(responseJson);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });
    };

    getUserById = (id) => {
        return <GetUser id={id}/>
    };

    render() {
        return (
            <div className="container">
                <form>
                    <input type="text" className="form-control" onChange={(event) => this.onUserStateChange(event)}/>
                    <button className="btn btn-success btn-sm" onClick={(event) => this.onFormSubmit(event)}>Submit</button>
                </form>
                {(this.state.buttonAct) ? this.getUserById(this.state.id) : ''}
            </div>
        );
    }
}