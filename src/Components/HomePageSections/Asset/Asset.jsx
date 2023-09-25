import React from 'react';
import style from './Asset.module.scss';
import Marquee from "react-fast-marquee";
import assetCard1Img1 from '../../../assets/img/assetCard1img1.png';
import assetCard1Img2 from '../../../assets/img/assetCard1img2.png';
import assetCard1Img3 from '../../../assets/img/assetCard1img3.png';
import { ASSET_SLIDER_ROW } from '../../../constants/homePageContants';

function Asset() {
    return (
        <div className={style.asset}>
            <div className={style.asset__block}>
                <ul className={style.asset__table}>
                    <li className={style.asset__item1}>
                        <ul className={style.asset__item_imgs_group}>
                            <li className={style.asset__item_group_img}>
                                <img src={assetCard1Img1} alt="" />
                            </li>
                            <li className={style.asset__item_group_img}>
                                <img src={assetCard1Img2} alt="" />
                            </li>
                            <li className={style.asset__item_group_img}>
                                <img src={assetCard1Img3} alt="" />
                            </li>
                            <li className={style.asset__item_group_img_add}></li>
                        </ul>
                        <h3 className={style.asset__item_title}>Backed by the best</h3>
                    </li>
                    <li className={style.asset__item_marquee}>
                        <h2>Every asset, every chain</h2>
                        <ul className={style.asset__slider}>
                            <Marquee
                                delay={0}
                                speed={90}
                                loop={0}
                                gradient={false}
                                className={style.asset__swiper}
                                direction='left'>
                                    {ASSET_SLIDER_ROW && ASSET_SLIDER_ROW.map((card, i) => (
                                        <li key={i} className={style.asset__slider_item}>
                                            <img src={card} alt="" className={style.asset__slider_img} />
                                        </li>
                                    ))}
                            </Marquee>
                        </ul>
                    </li>
                    <li className={style.asset__item2}>
                        <h3 className={style.asset__item_title}>Non custodial</h3>
                        <p className={style.asset__item_text}>Nobody can suspend your wallet, freeze your money, or stop your transactions.</p>
                    </li>
                    <li className={style.asset__item3}>
                        <h3 className={style.asset__item_title}>Completely de-Googled</h3>
                        <p className={style.asset__item_text}>We don’t cross-associate wallets and don't even ask for your email.</p>
                    </li>
                    <li className={style.asset__item4}>
                        <h3 className={style.asset__item_title}>Track and trade on whatever device you want</h3>
                    </li>
                    <li className={style.asset__item5}>
                        <div className={style.asset__item_img_wrap}></div>
                        <h3 className={style.asset__item_title}>Every Wallet, One App</h3>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Asset;