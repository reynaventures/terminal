import React from 'react';
import style from './Tokens.module.scss';
import { PiWallet } from 'react-icons/pi';
import { useWalletStore } from '../../../../store/walletStore';
import maticIcon from '../../../../assets/img/matic.png';
import maticMiniIcon from '../../../../assets/img/polygon.png';
import { useReynaAppStore } from '../../../../store/reynaApp';

function Tokens() {
    const balance = useWalletStore((state) => state.balance);
    const profit = useWalletStore((state) => state.profit);
    const isBalanceVisible = useReynaAppStore((state) => state.isBalanceVisible);
    return (
        <div className={style.Tokens}>
            <h3 className={style.Tokens__title}>Активы</h3>
            <div className={style.Tokens__table}>
                <div className={style.Tokens__wallet}>
                    <div className={style.Tokens__wallet_icon}>
                        <PiWallet />
                    </div>
                    <p className={style.Tokens__wallet_title}>Wallet ·</p>
                    <span className={style.Tokens__wallet_balance}>
                        {isBalanceVisible
                        ?   `${balance} MATIC`
                        : (
                            <div className={style.blur_container}>
                                <div className={style.square}></div>
                                <div className={style.square}></div>
                                <div className={style.square}></div>
                            </div>
                        )
                        }
                    </span>
                    <div className={style.Tokens__wallet_proccents}>100%</div>
                </div>
                <div className={style.Tokens__table_head}>
                    <p>ASSET</p>
                    <p>PRICE</p>
                    <p>BALANCE</p>
                    <p>VALUE</p>
                </div>
                <div className={style.Tokens__item}>
                    <div className={style.Tokens__item_asset}>
                        <img src={maticIcon} alt="" className={style.Tokens__item_avatar} />
                        <div className={style.Tokens__item_info}>
                            <p className={style.Tokens__item_name}>Polygon (Matic)</p>
                            <p className={style.Tokens__item_subname}>
                                <img src={maticMiniIcon} alt="" />
                                Polygon
                            </p>
                        </div>
                    </div>
                    <p className={style.Tokens__item_price}>0,527285 $</p>
                    <p className={style.Tokens__item_balance}>
                        {isBalanceVisible
                        ?   `${balance} MATIC`
                        : (
                            <div className={style.blur_container}>
                                <div className={style.square}></div>
                                <div className={style.square}></div>
                                <div className={style.square}></div>
                            </div>
                        )
                        }
                    </p>
                    <div className={style.Tokens__item_values}>
                        <p className={style.Tokens__item_value}>0,05 $</p>
                        <p className={profit >= 0 ? style.Tokens__item_profit_positive : style.Tokens__item_profit_negative}>
                            {profit}%
                            <span>
                                (
                            {isBalanceVisible
                                ?   `0,00 $`
                                : (
                                    <div className={style.blur_container}>
                                        <div className={style.square}></div>
                                        <div className={style.square}></div>
                                        <div className={style.square}></div>
                                    </div>
                                )
                            }
                                )
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tokens;