import React from 'react';
import banner from '../photo/banner.jpg';
import join from '../photo/join.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Banner(props) {

    return (
        <header className="banner">
            <div className="bannerImg">
                <img src={banner} alt=""></img>
            </div>
            <nav >
                <ul className="navBar">
                    <li>Home</li>
                    <li>SignUp</li>
                    <li>ShoppingCart</li>
                    <li>Contact Us</li>
                </ul>
            </nav>

            <div className="joinImg">
                <img src={join} alt=""></img>
            </div>
        </header>

    );
}