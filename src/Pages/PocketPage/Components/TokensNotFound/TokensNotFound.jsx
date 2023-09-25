import React, { useState } from 'react';
import style from './TokensNotFound.module.scss';
import { TbCurrencyEthereum } from 'react-icons/tb';
import { BsThreeDots } from 'react-icons/bs';

function TokensNotFound() {
    const [activities, setActivities] = useState('position');
    return (
        <div className={style.TokensNotFound}>
            <div className={style.TokensNotFound__perfomans_and_history}>
                <div className={style.TokensNotFound__perfomans}>
                    <h4 className={style.TokensNotFound__name}>
                        Performance
                        <TbCurrencyEthereum className={style.TokensNotFound__eth_icon}/>
                    </h4>
                    <div className={style.TokensNotFound__perfomans_card}>
                        <BsThreeDots className={style.TokensNotFound__perfomans_card_dots} />
                        <p className={style.TokensNotFound__noActive}>На кошельке нет активов</p>
                        <p className={style.TokensNotFound__noActive_subtite}>Пополните счет, чтобы начать использовать Reyna</p>
                        <button className={style.TokensNotFound__noActive_btn}>Add Funds</button>
                    </div>
                </div>
                <div className={style.TokensNotFound__history}>
                    <h4 className={style.TokensNotFound__name}>История</h4>
                    <div className={style.TokensNotFound__history_card}>
                        <span className={style.TokensNotFound__sadSmile}>🥺</span>
                        <p className={style.TokensNotFound__history_card_text}>Нет транзакций</p>
                    </div>
                </div>
            </div>
            <div className={style.TokensNotFound__actives}>
                <div className={style.TokensNotFound__actives_head}>
                    <h4 className={style.TokensNotFound__name}>Активы</h4>
                    <div className={style.TokensNotFound__actives_filter}>
                        <div className={style.TokensNotFound__actives_of}>
                            <div 
                                className={activities === 'platform' ? style.TokensNotFound__actives_of_item_active : style.TokensNotFound__actives_of_item}
                                onClick={() => setActivities('platform')}
                            >
                                По платформе
                            </div>
                            <div 
                                className={activities === 'position' ? style.TokensNotFound__actives_of_item_active : style.TokensNotFound__actives_of_item}
                                onClick={() => setActivities('position')}
                            >
                                По позиции
                            </div>
                        </div>
                        <div className={style.TokensNotFound__actives_filter_more}>
                            <BsThreeDots />
                        </div>
                    </div>
                </div>
                <div className={style.TokensNotFound__avtives_card}>
                    <span className={style.TokensNotFound__sadSmile}>🥺</span>
                    <p className={style.TokensNotFound__avtives_card_text}>Активов пока нет</p>
                </div>
            </div>
        </div>
    )
}

export default TokensNotFound