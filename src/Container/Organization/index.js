import React from 'react';
import './index.css';


class Organization extends React.Component {

    render() {
        return(
            <div id = "organization">
                <h1>organization structure</h1>
                <p>(Top management level)</p>
                <div className = "bold" style = {{display:'flex',justifyContent:'space-between'}}>
                    <div>Country Retail Head</div>
                    <div>Circle Business Head</div>
                    <div>Country B2B Head</div>
                </div>
                <div className = "bold">Circle Retail Head</div>
                <div className = "bold">Circle Retail Head</div>
            </div>
        )
    }
}

export default Organization;