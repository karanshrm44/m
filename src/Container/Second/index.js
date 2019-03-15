import React from 'react';
import './index.css';
import Organization1 from '../organization1';
import About from '../About';
import Organization from '../Organization';
import graph from './graph.png';
import {Link} from 'react-router-dom';

class Second extends React.Component {

    render() {
        return(
            <div id = "second">
                <Link style = {{textDecoration:'none'}} to = "/">
                    <span className = "back-button">Back</span>
                </Link>
                <Organization1 />
                <About />
                <Organization />
                <img src = {graph} alt = "graph" width = "800px" height = "600px" />
            </div>
        )
    }
}

export default Second;