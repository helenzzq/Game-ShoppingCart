import React from 'react';
import banner from '../photo/banner.jpg';
import join from '../photo/join.jpg';
import { HomeOutlined ,PhoneOutlined } from '@ant-design/icons';

export default function Banner(props) {

    function refresh() {
        window.location.reload();
    }
    function contact() {
        alert("Should you have any question.\n Please contact us through this email : lovecsc301@utoronto.ca")
    }
    return (
        <header className="banner">
            <div className="bannerImg">

                <img src={banner} alt=""></img>
            </div>
            <nav >
                <ul className="navBar">
                    <li onClick={ refresh}><button className="navg"><HomeOutlined className="ant" />Home</button></li>
                    <li onClick={contact}><button className="navg"><PhoneOutlined className="ant"/> Contact Us</button></li>
                </ul>
            </nav>

            <div className="joinImg">
                <img src={join} alt=""></img>
            </div>
        </header>

    );
}