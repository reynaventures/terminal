import React from 'react';
import style from './TryWallet.module.scss';
import btnAnimationImg from '../../../assets/svg/buttonHoverImg.svg';

function TryWallet() {
    return (
        <div className={style.TryWallet}>
            <div className={style.TryWallet__block}>
                <div className={style.TryWallet__leftPart}>
                    <p className={style.TryWallet__try}>Try</p>
                    <h2 className={style.TryWallet__title}>Reyna Wallet</h2>
                    <p className={style.TryWallet__text}>Import your existing wallet to see your portfolio, trade, and bridge across 10+ networks and 500+ protocols</p>
                    <button className={style.TryWallet__btn}>
                        <img src={btnAnimationImg} alt='' />
                        Create Reyna Wallet
                    </button>
                </div>
                <div className={style.TryWallet__rightPart}></div>
            </div>
        </div>
    )
}

export default TryWallet;