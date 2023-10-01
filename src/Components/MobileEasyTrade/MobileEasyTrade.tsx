import React, { useEffect, useState } from 'react';
import style from './MobileEasyTrade.module.scss';
import easyTradeCard1 from '../../assets/img/easyTradeCard1.png';
import easyTradeCard2 from '../../assets/img/easyTradeCard2.png';
import easyTradeCard3 from '../../assets/img/easyTradeCard3.png';

function MobileEasyTrade() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
        }, 3000);

        setIntervalId(interval);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const handleClick = (index) => {
        setCurrentIndex(index);
        clearInterval(intervalId);
        const newInterval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
        }, 3000);
        setIntervalId(newInterval);
    };

    return (
        <div className={style.MobileEasyTrade}>
            <div className={style.MobileEasyTrade__block}>
                <h2 className={style.MobileEasyTrade__title}>Trading Made Easy</h2>
                <ul className={style.MobileEasyTrade__list}>
                    <span onClick={() => handleClick(0)} className={currentIndex === 0 ? style.MobileEasyTrade__line_active : style.MobileEasyTrade__line}></span>
                    <span onClick={() => handleClick(1)} className={currentIndex === 1 ? style.MobileEasyTrade__line_active : style.MobileEasyTrade__line}></span>
                    <span onClick={() => handleClick(2)} className={currentIndex === 2 ? style.MobileEasyTrade__line_active : style.MobileEasyTrade__line}></span>
                </ul>
                    {currentIndex === 0 ? (
                        <div className={style.MobileEasyTrade__item}>
                            <p className={style.MobileEasyTrade__text_active}> 
                                <span className={style.MobileEasyTrade__blue_text}>Multichain trading on Polygon</span>
                                , Avalanche, BSC, Fantom & more
                            </p>
                            <div className={style.MobileEasyTrade__img_wrap} style={{opacity: 1}}>
                                <img
                                    src={easyTradeCard1} 
                                    alt="" 
                                    className={style.MobileEasyTrade__img} 
                                />
                            </div>
                        </div>
                    ) : currentIndex === 1 ? (
                        <div className={style.MobileEasyTrade__item}>
                            <p className={style.MobileEasyTrade__text_active}>
                                Automatically scan every DEX to
                                <span className={style.MobileEasyTrade__blue_text}>get the best deal each time you trade</span>
                            </p>
                            <div className={style.MobileEasyTrade__img_wrap} style={{opacity: 1}}>
                                <img
                                    src={easyTradeCard2} 
                                    alt="" 
                                    className={style.MobileEasyTrade__img} 
                                />
                            </div>
                        </div>
                    ) : (
                        <div className={style.MobileEasyTrade__item}>
                            <p className={style.MobileEasyTrade__text_active}>
                                Find the 
                                <span className={style.MobileEasyTrade__blue_text}> cheapest and fastest bridge to 10+ networks </span>
                                in seconds
                            </p>
                            <div className={style.MobileEasyTrade__img_wrap} style={{opacity: 1}}>
                                <img
                                    src={easyTradeCard3} 
                                    alt="" 
                                    className={style.MobileEasyTrade__img} 
                                />
                            </div>
                        </div>
                    )}
            </div>
        </div>
    )
}

export default MobileEasyTrade;