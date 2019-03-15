import React from 'react';
import './index.css';
import data from './data';


class Points extends React.Component {
    render() {
        return(
            <div id = "points">
                <h1>Pay and Benefit</h1>
                <p>It’s simple: better benefits make better, stronger employees</p>
                <div style = {{display:'flex',flexWrap:'wrap'}}>
                    {
                        data.map((val,index) => {
                            return(
                                <div key = {index} className = "single-point">
                                    <p className = {`${val.cname} common`}></p>
                                    <h2>{val.title}</h2>
                                    <p>{val.text}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Points;