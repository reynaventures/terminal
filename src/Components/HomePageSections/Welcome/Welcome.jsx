import React, { useState, useEffect } from 'react';
import style from './welcome.module.scss';
import WelcomeFirstImg from '../../../assets/img/welcomeFirst.png';
import { HiArrowRight } from 'react-icons/hi';
import { SiTrustpilot } from 'react-icons/si';
import { AiFillApple } from 'react-icons/ai';
import welcomeTextImg1 from '../../../assets/img/welcomeTextImg3.png';
import welcomeTextImg2 from '../../../assets/img/welcomeTextImg2.png';
import welcomeTextImg3 from '../../../assets/img/welcomeTextImg1.png';
import btnAnimationImg from '../../../assets/svg/buttonHoverImg.svg';

function Welcome() {

    const [scroll, setScroll] = useState(0);

    const handleScroll = () => {
        setScroll(window.scrollY);
    };
    const viewportWidth = window.innerWidth;

    useEffect(() => {
        if(viewportWidth > 991) {
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    const isFirstSectionHide = () => {
        if(scroll > 50) {
            return true;
        }
        return false;
    }
    const isWelcomeFixed = () => {
        if(scroll > 4700 || viewportWidth < 991) {
            return true;
        }
        return false;
    }
    const isFirstTextOpen = () => {
        if(scroll > 300 && scroll < 1600 || viewportWidth < 991) {
            return true;
        }
        return false;
    }
    const isSecondTextOpen = () => {
        if(scroll >= 1600 && scroll < 2900 || viewportWidth < 991) {
            return true;
        }
        return false;
    }
    const isThirdTextOpen = () => {
        if(scroll >= 2900 || viewportWidth < 991) {
            return true;
        }
        return false;
    }

    return (
        <div className={style.Welcome__container}>
            <div className={isWelcomeFixed() ? style.Welcome : style.Welcome__fixed}>
                <div className={style.Welcome__block}>
                    {isFirstSectionHide()}
                    <div 
                        className={style.Welcome__first} 
                        style={viewportWidth < 991 ? {opacity: 1} : isFirstSectionHide() ? {opacity: 0} : {}} 
                    >
                        <div className={style.Welcome__first_left}>
                            <h1 className={style.Welcome__first_title}>Smart, Social <br className={style.Welcome__first_title_br}/> Web3 Wallet</h1>
                            <p className={style.Welcome__first_text}>Manage your DeFi and NFT portfolios, trade across 10+ networks and connect to any decentralized application with one wallet</p>
                            <div className={style.Welcome__first_bnts}>
                                <button className={style.Welcome__first_create}>
                                    <img src={btnAnimationImg} alt='' />
                                    Create Reyna Wallet
                                </button>
                                <button className={style.Welcome__first_web}>
                                    Reyna on Web 
                                    <HiArrowRight className={style.Welcome__first_arrow}/>
                                </button>
                            </div>
                            <div className={style.Welcome__first_rate}>
                                <p className={style.Welcome__first_trustpilot_rate}>
                                    <SiTrustpilot className={style.Welcome__first_icon} />
                                    4.6 on Trustpilot
                                </p>
                                <p className={style.Welcome__first_appstore_rate}>
                                    <AiFillApple className={style.Welcome__first_icon} />
                                    4.7 on App Store
                                </p>
                            </div>
                        </div>
                        <div className={style.Welcome__first_right_wrap}>
                            <img src={WelcomeFirstImg} alt='' className={style.Welcome__first_right} />
                        </div>
                    </div>
                    <div className={style.Welcome__second} style={viewportWidth < 991 ? {opacity: 1} : isFirstSectionHide() ? {opacity: 1 } : {}}>
                        <div className={style.Welcome__second_info}>
                            <h2 className={style.Welcome__second_title}>Built for humans, not experts</h2>
                            <div className={style.Welcome__second_titles}>
                                <div className={style.Welcome__second_porfolio}>
                                    <p className={style.Welcome__second_name} style={isFirstTextOpen() ? {color: 'rgb(9, 11, 24'} : {}}>Complete Portfolio</p>
                                    <p className={style.Welcome__second_text} style={isFirstTextOpen() ? {height: '3em'} : {}}>Track your entire crypto portfolio across every wallet you own. Manage all your private keys and sign transactions in one place</p>
                                    {isFirstTextOpen() && (
                                        <img
                                            src={welcomeTextImg1}
                                            alt=""
                                            className={style.Welcome__second_img}
                                        />
                                    )}
                                </div>
                                <div className={style.Welcome__second_porfolio}>
                                    <p className={style.Welcome__second_name} style={isSecondTextOpen() ? {color: 'rgb(9, 11, 24'} : {}}>All of Web3</p>
                                    <p className={style.Welcome__second_text} style={isSecondTextOpen() ? {height: '3em'} : {}}>Access the best of Web3 from DeFi to NFTs and everything in between. Buy, sell, lend and borrow in a few taps</p>
                                    {isSecondTextOpen() && (
                                        <img
                                            src={welcomeTextImg2}
                                            alt=""
                                            className={style.Welcome__second_img}
                                        />
                                    )}
                                </div>
                                <div className={style.Welcome__second_porfolio}>
                                    <p className={style.Welcome__second_name} style={isThirdTextOpen() ? {color: 'rgb(9, 11, 24'} : {}}>Social Crypto</p>
                                    <p className={style.Welcome__second_text} style={isThirdTextOpen() ? {height: '3em'} : {}}>Follow any wallet address, ENS handle or NFT collection to stay on top of the latest trends and tokens</p>
                                    {isThirdTextOpen() && (
                                        <img
                                            src={welcomeTextImg3}
                                            alt=""
                                            className={style.Welcome__second_img_last}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome;