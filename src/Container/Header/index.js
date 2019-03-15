import React from 'react';
import './index.css';


class Header extends React.Component {
    render() {
        return(
            <div id = "header">
                <div className = "header-inner">
                    <div className = "header-inner-layout">
                        <a href = "/">S & P GLOBAL</a>
                        <div style = {{marginLeft:'auto'}}>
                            <a href = "/">Who We Are</a>
                            <a href = "/">Capabilities</a>
                            <a href = "/">Research and Insight</a>
                            <a href = "/">Careers</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;