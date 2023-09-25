import React from 'react';
import style from './Multichain.module.scss';

function Multichain() {
    return (
        <div className={style.Multichain}>
            <div className={style.Multichain__block}>
                <h2 className={style.Multichain__title}>A Truly Multichain Wallet</h2>
                <p className={style.Multichain__networks}>
                    <span className={style.Multichain__num}>10+ </span>
                    supported networks
                </p>
                <p className={style.Multichain__networks}>
                    <span className={style.Multichain__num}>500+ </span>
                    integrated protocols
                </p>
                <ul className={style.Multichain__list}>
                    <li className={style.Multichain__item1}>
                        <p className={style.Multichain__item_title}>
                            Over
                            <span className={style.Multichain__item_num}> 220k </span>
                            users
                        </p>
                        <p className={style.Multichain__item_subtitle}>active monthly</p>
                    </li>
                    <li className={style.Multichain__item2}>
                        <p className={style.Multichain__item_title}>
                            <span className={style.Multichain__item_num}>$1.2B </span>
                            processed
                        </p>
                        <p className={style.Multichain__item_subtitle}>in transaction volume</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Multichain;