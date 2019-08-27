import React, { Component } from 'react';
import Route from "react-router-dom/Route";
import Home from './../components/Home';
import News from './../components/News';
import Contact from './../components/Contact';
import NewsDetail from '../components/NewsDetail';

class NavigateURL extends Component {
    render() {
        return (
            <div>
                {/* <Redirect from="/" to="/home" /> */}
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/news" component={News} />
                <Route exact path="/news/:slug.:id.html" component={NewsDetail} />
                <Route exact path="/contact" component={Contact} />
            </div>
        );
    }
}

export default NavigateURL;