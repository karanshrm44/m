import React from 'react';
import './index.css';
import Header from '../Header';
import team from './team.jpg';
import Points from '../Points';
import airtel from './airtel.jpg';
import {Link } from 'react-router-dom';

class First extends React.Component {

    render() {



        return(
            <div>
                <Header />
                <ImageFull />
                <Points />
                <Link to = '/airtel'>
                     <img style = {{padding:'10px 60px'}} src = {airtel} alt = "airtel logo" width = "150px" height = "100px" />
                </Link>
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