import React, { Component } from 'react';
import { Navigation } from "./navigation/Navigation";
import { HomeComponent } from "./home/Home";
import {BrowserRouter, Route} from 'react-router-dom';
import {User} from "./user/User";
import {Counter} from "./counter/Counter";
import {GetUser} from "./user/GetUser";
import {Clock} from "./clock/Clock";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navigation tag={'MyApp'}/>
                    <Route exact path={'/'} component={HomeComponent}/>
                    <Route path={'/user'} component={User}/>
                    <Route path={'/counter'} component={Counter}/>
                    <Route path={'/get'} component={() => <GetUser id={'1001'}/>}/>
                    <Route path={'/clock'} component={Clock}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
