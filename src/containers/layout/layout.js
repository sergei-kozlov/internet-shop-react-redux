import React from 'react'

import Sidebar from '../../components/sidebar';
import ShopHeader from '../../components/shop-header';
import ShopSearch from '../../components/shop-search';


const Layout = ({children}) => (
    <div className='view-container'>
        <div className='container'>
            <div className='row'>
                <ShopHeader />
                <ShopSearch/>
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