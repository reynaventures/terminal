import React, { useEffect, useState } from 'react';
import style from './Unlock.module.scss';
import unlockImg1 from '../../../assets/img/unlockImg1.png';
import unlockImg2 from '../../../assets/img/unlockImg2.png';

function Unlock() {
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if(!activeSlide) {
                setActiveSlide(activeSlide + 1);
            }   else {
                setActiveSlide(0);
            }
        }, 3000);
        return () => clearInterval(interval);
    }, [activeSlide]);

    return (
        <div className={style.Unlock}>
            <div className={style.Unlock__left}>
                <img src={unlockImg1} alt="" className={activeSlide === 0 ? style.Unlock__img : style.Unlock__img_hide} />
                <img src={unlockImg2} alt="" className={activeSlide === 1 ? style.Unlock__img : style.Unlock__img_hide} />
            </div>
            <div className={style.Unlock__right}>
                <p className={activeSlide === 0 ? style.Unlock__text : style.Unlock__text_hide}>
                    <span className={style.Unlock__blue_text}> Connect to any Dapp </span>
                    on any device
                </p>
                <p className={activeSlide === 1 ? style.Unlock__text : style.Unlock__text_hide}>
                    Manage
                    <span className={style.Unlock__blue_text}> all your wallets </span>
                    in one app
                </p>
            </div>
        </div>
    )
}

export default Unlock;