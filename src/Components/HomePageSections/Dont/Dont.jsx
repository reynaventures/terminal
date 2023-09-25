import React from 'react';
import style from './Dont.module.scss';
import DontImg1 from '../../../assets/svg/DongImg1.svg';
import DontImg2 from '../../../assets/svg/DontImg2.svg';

function Dont() {
    return (
        <div className={style.Dont}>
            <div className={style.Dont__block}>
                <h2 className={style.Dont__title}>
                    We
                    <span className={style.Dont__blue_text}> don’t track </span>
                    user data or cross-associate wallets.<br/> We
                    <span className={style.Dont__blue_text}> do not store </span>
                    your private keys or seed phrase.
                </h2>
                <div className={style.Dont__card}>
                    <p className={style.Dont__card_text}>
                        Independently audited by leading security firms
                        <span className={style.Dont__blue_text}>Trail of Bits and Vulners</span>
                    </p>
                    <div className={style.Dont__card_imgs}>
                        <img src={DontImg1} alt="" className={style.Dont__card_img} />
                        <img src={DontImg2} alt="" className={style.Dont__card_img} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dont;