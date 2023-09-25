import React, { useEffect, useState } from 'react';
import style from './EasyTrade.module.scss';
import easyTradeCard1 from '../../../assets/img/easyTradeCard1.png';
import easyTradeCard2 from '../../../assets/img/easyTradeCard2.png';
import easyTradeCard3 from '../../../assets/img/easyTradeCard3.png';

function EasyTrade() {

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
        <div className={style.EasyTrade}>
            <div className={style.EasyTrade__block}>
                <h2 className={style.EasyTrade__title}>Trading Made Easy</h2>
                <ul className={style.EasyTrade__list}>
                    <li className={style.EasyTrade__item} onClick={() => handleClick(0)}>
                        <span className={currentIndex === 0 ? style.EasyTrade__line_active : style.EasyTrade__line}></span>
                        <p className={currentIndex === 0 ? style.EasyTrade__text_active : style.EasyTrade__text}> 
                            <span className={currentIndex === 0 ? style.EasyTrade__blue_text : null}>Multichain trading on Polygon</span>
                            , Avalanche, BSC, Fantom & more
                        </p>
                        <div className={style.EasyTrade__img_wrap} style={currentIndex === 0 ? {opacity: 1} : {opacity: 0}}>
                            <img
                                src={easyTradeCard1} 
                                alt="" 
                                className={style.EasyTrade__img} 
                            />
                            <div className={style.EasyTrade__gradient}></div>
                        </div>
                    </li>
                    <li className={style.EasyTrade__item} onClick={() => handleClick(1)}>
                        <span className={currentIndex === 1 ? style.EasyTrade__line_active : style.EasyTrade__line}></span>
                        <p className={currentIndex === 1 ? style.EasyTrade__text_active : style.EasyTrade__text}>
                            Automatically scan every DEX to
                            <span className={currentIndex === 1 ? style.EasyTrade__blue_text : null}>get the best deal each time you trade</span>
                        </p>
                        <div className={style.EasyTrade__img_wrap} style={currentIndex === 1 ? {opacity: 1} : {opacity: 0}}>
                            <img
                                src={easyTradeCard2} 
                                alt="" 
                                className={style.EasyTrade__img} 
                            />
                            <div className={style.EasyTrade__gradient}></div>
                        </div>
                    </li>
                    <li className={style.EasyTrade__item} onClick={() => handleClick(2)}>
                        <span className={currentIndex === 2 ? style.EasyTrade__line_active : style.EasyTrade__line}></span>
                        <p className={currentIndex === 2 ? style.EasyTrade__text_active : style.EasyTrade__text}>
                            Find the 
                            <span className={currentIndex === 2 ? style.EasyTrade__blue_text : null}> cheapest and fastest bridge to 10+ networks </span>
                            in seconds
                        </p>
                        <div className={style.EasyTrade__img_wrap} style={currentIndex === 2 ? {opacity: 1} : {opacity: 0}}>
                            <img
                                src={easyTradeCard3} 
                                alt="" 
                                className={style.EasyTrade__img} 
                            />
                            <div className={style.EasyTrade__gradient}></div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default EasyTrade