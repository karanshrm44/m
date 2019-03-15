import React from 'react';
import './index.css';


class About extends React.Component {

    state = {
        arr:["Mobile Services","Tele-media Services","Airtel Business","Digital TV series"]
    }

    render() {
        return(
            <div id = "about">
                <h1>ABOUT AIRTEL</h1>
                <ul>
                    <li>It’s a Leading global telecommunications company with operations in 16 countries across Asia and Africa</li>
                    <li>It is headquartered in New Delhi, India, and ranks amongst the top 3 mobile service providers globally in terms of subscribers</li>
                    <li>It had over 413 million customers across its operations at the end of March 2018</li>
                </ul>
                <p style = {{textAlign:'center',fontSize:"24px",padding:"20px 0px"}}>Airtel has 4 major services</p>
                <div className = "about-point">
                    {
                        this.state.arr.map((val,index) => {
                            return(
                                <div key = {index} className = "about-point-single">
                                    {val}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default About;