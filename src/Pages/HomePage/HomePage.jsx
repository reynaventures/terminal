import React from 'react';
import style from './homePage.module.scss';
import EasyTrade from '../../Components/HomePageSections/EasyTrade/EasyTrade';
import WalletNFT from '../../Components/HomePageSections/WalletNFT/WalletNFT';
import Multichain from '../../Components/HomePageSections/Multichain/Multichain';
import TryWallet from '../../Components/HomePageSections/TryWallet/TryWallet';
import Coments from '../../Components/HomePageSections/Coments/Coments';
import Dont from '../../Components/HomePageSections/Dont/Dont';
import Join from '../../Components/HomePageSections/Join/Join';
import GetWallet from '../../Components/HomePageSections/GetWallet/GetWallet';
import Asset from '../../Components/HomePageSections/Asset/Asset';
import FAQs from '../../Components/HomePageSections/FAQs/FAQs';
import Welcome from '../../Components/HomePageSections/Welcome/Welcome';
import Unlock from '../../Components/HomePageSections/Unlock/Unlock';

function HomePage() {
    return (
        <div className={style.homePage}>
            <Welcome />
            <EasyTrade />
            <WalletNFT />
            <Unlock />
            <Multichain />
            <TryWallet />
            <Coments />
            <Dont />
            <Join />
            <GetWallet />
            <Asset />
            <FAQs />
        </div>
    )
}

export default HomePage;