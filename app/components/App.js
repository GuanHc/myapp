/**
 * Created by miaojilvxing on 16/4/15.
 */
import React from 'react';
import {RouteHandler} from 'react-router';
import Footer from './Footer';
import Navbar from './Navbar';

class App extends React.Component {
    render() {
        return (
            <div>
            <RouteHandler />
            <div>
            <RouteHandler />
            <Footer />
            </div>
            <div>
            <Navbar />
            <RouteHandler />
            <Footer />
            </div>
            </div>
    );
    }
}

export default App;