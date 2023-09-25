import React from 'react'
import Header from '../../Components/Header/Header';
import { Outlet } from 'react-router-dom';
import style from './LayoutPage.module.scss';
import Footer from '../../Components/Footer/Footer';

function LayoutPage() {
    return (
        <div className={style.layoutPage}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default LayoutPage;