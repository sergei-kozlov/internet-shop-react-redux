import React from 'react';

import './top-shop-header.css'

const TopShopHeader = () => {
    return (


        <header>
            <div id="top-header">
                <div className="container">
                    <div className="pull-left">
                        <span><h4>Welcome to Kwik-E-Mart!</h4></span>
                    </div>
                    <div className="pull-right">
                        <ul className="header-top-links">
                            <li><a href="#">Store</a></li>
                            <li><a href="#">Newsletter</a></li>
                            <li><a href="#">FAQ</a></li>

                        </ul>
                    </div>
                </div>
            </div>
        </header>


    );
};

export default TopShopHeader;