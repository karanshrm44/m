import React from 'react';
import './index.css';
import Header from '../Header';
import team from './team.jpg';
import Points from '../Points';

class First extends React.Component {

    render() {



        return(
            <div>
                <Header />
                <ImageFull />
                <Points />
            </div>
        )
    }
}

class ImageFull extends React.Component {

    render() {
        return(
            <div className = "image" style = {{backgroundImage:`url(${team})`}}>

            </div>
        )
    }
}

export default First;