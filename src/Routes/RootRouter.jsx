import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Loader from '../Components/Loader/Loader';
import HomePage from '../Pages/HomePage/HomePage';
import LayoutPage from '../Pages/LayoutPage/LayoutPage';
import PocketPage from '../Pages/PocketPage/PocketPage.tsx';
import ConnectWallet from '../Pages/ConnectWallet/ConnectWallet';
import LayoutPageWithoutHeader from '../Pages/LayoutPageWithoutHeader/LayoutPageWithoutHeader';

function RootRoute() {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route path='/' element={<LayoutPage />}>
                    <Route path='/' element={<HomePage />} />
                    <Route path='*' element={<Navigate to={'/'}/>} />
                </Route>
                <Route path='/app/' element={<LayoutPageWithoutHeader />}>
                    <Route path='/app/connect-wallet' element={<ConnectWallet />} />
                    <Route path='/app/pocket' element={<PocketPage />} />
                </Route>
            </Routes>
        </Suspense>
    )
}

export default RootRoute;