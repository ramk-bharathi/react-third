import React from 'react';

export class GetUser extends React.Component {
    constructor(props) {
        super();
        this.state = {
            userId: props.id,
            user: {}
        };
    };
    componentDidMount() {
        this.getUserById();
    };
    getUserById() {
        fetch('http://localhost:5000/user/'+this.state.userId)
            .then(response => {
                return response.json();
            })
            .then(userResponse => {
                this.setState({
                    user: userResponse
                });
            })
            .catch(error => {
                console.log(error);
            });
    };
    render () {
        return (
            <div className="container">
                <p>{this.state.user.id}</p>
                <p>{this.state.user.name}</p>
                <p>{this.state.user.age}</p>
                <p>{this.state.user.city}</p>
                <p>{this.state.user.gender}</p>
            </div>
        );
    };
}