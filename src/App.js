import React, { Component } from 'react';
import { Navigation } from "./navigation/Navigation";
import { HomeComponent } from "./home/Home";
import {BrowserRouter, Route} from 'react-router-dom';
import {User} from "./user/User";
import {Counter} from "./counter/Counter";
import {GetUser} from "./user/GetUser";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navigation/>
                    <Route exact path={'/'} component={HomeComponent}/>
                    <Route path={'/user'} component={User}/>
                    <Route path={'/counter'} component={Counter}/>
                    <Route path={'/get'} component={() => <GetUser id={'1001'}/>}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
