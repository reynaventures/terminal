import React from 'react';
import style from './WalletNFT.module.scss';
import walletNFTCard1 from '../../../assets/svg/walletNFTCard1.svg';
import walletNFTCard3 from '../../../assets/svg/walletNFTCard3.png';
import walletNFTCard4 from '../../../assets/svg/walletNFTCard4.png';

function WalletNFT() {
    return (
        <div className={style.WalletNFT}>
            <div className={style.WalletNFT__block}>
                <h2 className={style.WalletNFT__title}>A Wallet for NFT Collectors</h2>
                <div className={style.WalletNFT__list}>
                    <div className={style.WalletNFT__item1}>
                        <img src={walletNFTCard1} alt="" className={style.WalletNFT__card_img} />
                        <p className={style.WalletNFT__text}>
                            Track your NFT portfolio in real time, by 
                            <span className={style.WalletNFT__text_blue}> floor and latest price</span>
                        </p>
                    </div>
                    <div className={style.WalletNFT__item2}>
                        <p className={style.WalletNFT__text}>
                            <span className={style.WalletNFT__text_blue}>Follow any wallet and get notifications </span>
                            when they mint or trade
                        </p>
                    </div>
                </div>
                <div className={style.WalletNFT__list}>
                    <div className={style.WalletNFT__item3}>
                        <img src={walletNFTCard3} alt="" className={style.WalletNFT__card_img} />
                        <p className={style.WalletNFT__text}>
                            <span className={style.WalletNFT__text_blue}> Mint a living NFT </span>
                            that evolves as you explore Web3 with Zerion Wallet
                        </p>
                    </div>
                    <div className={style.WalletNFT__item4}>
                        <p className={style.WalletNFT__text}>
                            <span className={style.WalletNFT__text_blue}>Follow </span>
                            wallets, NFT collections, and more
                        </p>
                        <img src={walletNFTCard4} alt="" className={style.WalletNFT__card_img} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WalletNFT;