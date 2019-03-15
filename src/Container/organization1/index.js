import React from  'react';
import './index.css';
import manage from './organization.png';

class Organization1 extends React.Component {

    render() {
        return(
            <div id = "organization1">
                <h1>Organization structure</h1>
                <p>(Top management level)</p>
                <img src = {manage} alt = "airtel" width = "1000px" height = "500px" />
            </div>
        )
    }
}

export default Organization1;