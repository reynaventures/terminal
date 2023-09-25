import React from 'react';
import style from './Join.module.scss';
import joinItem1 from '../../../assets/svg/joinItem1.svg';
import joinItem2 from '../../../assets/svg/joinItem2.svg';
import { HiArrowRight } from 'react-icons/hi';

function Join() {
    return (
        <div className={style.Join}>
            <div className={style.Join__block}>
                <h2 className={style.Join__title}>Join the Zerion community</h2>
                <ul className={style.Join__list}>
                    <li className={style.Join__item}>
                        <img src={joinItem1} alt="" className={style.Join__img} />
                        <div className={style.Join__item_inf}>
                            <h3 className={style.Join__item_name}>Developer Resources</h3>
                            <p className={style.Join__item_text}>Build and develop on top of Zerion with our API and DeFi SDK</p>
                            <p className={style.Join__item_navigate}>
                                Documentation
                                <HiArrowRight className={style.Join__arrow} />
                            </p>
                        </div>
                    </li>
                    <li className={style.Join__item}>
                        <img src={joinItem2} alt="" className={style.Join__img} />
                        <div className={style.Join__item_inf}>
                            <h3 className={style.Join__item_name}>Zerion community</h3>
                            <p className={style.Join__item_text}>Be part of the conversation with thousands of Zerion users!</p>
                            <p className={style.Join__item_navigate}>
                                Connect on Discord 
                                <HiArrowRight className={style.Join__arrow} /> 
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Join;