import React from 'react'

import Sidebar from '../../components/sidebar';
import TopShopHeader from '../../components/top-shop-header';
import ShopHeader from '../../components/shop-header';

const Layout = ({children}) => (
    <div className='view-container'>
        <div className='container'>
            <div className='row'>
                <TopShopHeader />
                <ShopHeader />
                <div className='col-md-3'>

                    <Sidebar />
                </div>
                <div className='col-md-9'>
                    {children}
                </div>
            </div>
        </div>
    </div>
);

export default Layout;