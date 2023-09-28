import React from 'react';
import style from './TokenCard.module.scss';
import { useWalletStore } from '../../../../../store/walletStore';
import { useReynaAppStore } from '../../../../../store/reynaApp';

function TokenCard({ asset }) {

    const balance = useWalletStore((state) => state.balance);
    const isBalanceVisible = useReynaAppStore((state) => state.isBalanceVisible);

    return (
        <div className={style.Token}>
            <div className={style.Token__item}>
                <div className={style.Token__item_asset}>
                    <img src={asset?.icon} alt="" className={style.Token__item_avatar} />
                    <div className={style.Token__item_info}>
                        <p className={style.Token__item_name}>{asset?.name} ({asset?.shortname})</p>
                        <p className={style.Token__item_subname}>
                            <img src={asset?.icon} alt="" />
                            {asset?.name}
                        </p>
                    </div>
                </div>
                <p className={style.Token__item_price}>{asset?.price}</p>
                <p className={style.Token__item_balance}>
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
                <div className={style.Token__item_values}>
                    <p className={style.Token__item_value}>{asset?.value}</p>
                    <p className={asset?.profit >= 0 ? style.Token__item_profit_positive : style.Token__item_profit_negative}>
                        {asset?.profit}
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
    )
}

export default TokenCard;