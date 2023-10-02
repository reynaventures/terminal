import React from 'react';
import style from './Tokens.module.scss';
import { PiWallet } from 'react-icons/pi';
import { useWalletStore } from '../../../../store/walletStore';
import { useReynaAppStore } from '../../../../store/reynaApp';
import TokenCard from './TokenCard/TokenCard';

function Tokens() {
    const balance = useWalletStore((state) => state.balance);
    const isBalanceVisible = useReynaAppStore((state) => state.isBalanceVisible);
    const assets = useWalletStore((state) => state.assets);
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
                        ?   `${balance} $`
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
                {assets?.length && assets?.map((asset) => (
                    <div key={asset?.id}>
                        <TokenCard asset={asset}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Tokens;