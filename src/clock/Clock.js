import React from 'react';

export class Clock extends React.Component {
    constructor() {
        super();
        this.state = {
            date: new Date()
        };
    }
    componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerId);
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    render() {
        return (
            <div className="container">
                <h2>Clock</h2>
                <h4>{this.state.date.toLocaleTimeString()}</h4>
            </div>
        );
    }
}