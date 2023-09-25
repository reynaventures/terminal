import React from 'react';
import style from './Footer.module.scss';
import footerSertificatedImg from '../../assets/svg/footerSertificatedImg.svg';
import { BsDiscord, BsTwitter, BsGithub } from 'react-icons/bs';
import { BiLogoTelegram, BiLogoFacebook, BiLogoLinkedin } from 'react-icons/bi';

function Footer() {
    return (
        <div className={style.Footer}>
            <div className={style.Footer__block}>
                <div className={style.Footer__list}>
                    <h3 className={style.Footer__title}>Reyna</h3>
                    <div className={style.Footer__column}>
                        <h4 className={style.Footer__column_title}>Reyna</h4>
                        <ul className={style.Footer__column_list}>
                            <li className={style.Footer__column_item}>Reyna Web</li>
                            <li className={style.Footer__column_item}>Reyna iOS</li>
                            <li className={style.Footer__column_item}>Reyna Android</li>
                            <li className={style.Footer__column_item}>Reyna API</li>
                            <li className={style.Footer__column_item}>Reyna SDK</li>
                        </ul>
                    </div>
                    <div className={style.Footer__column}>
                        <h4 className={style.Footer__column_title}>Company</h4>
                        <ul className={style.Footer__column_list}>
                            <li className={style.Footer__column_item}>Blog</li>
                            <li className={style.Footer__column_item}>Careers</li>
                            <li className={style.Footer__column_item}>Brand Assets</li>
                            <li className={style.Footer__column_item}>For DApp Listings</li>
                        </ul>
                    </div>
                    <div className={style.Footer__column}>
                        <h4 className={style.Footer__column_title}>Legal</h4>
                        <ul className={style.Footer__column_list}>
                            <li className={style.Footer__column_item}>Privacy</li>
                            <li className={style.Footer__column_item}>Terms</li>
                            <li className={style.Footer__column_item}>Cookie Policy</li>
                            <li className={style.Footer__column_item}>CCPA</li>
                        </ul>
                    </div>
                    <div className={style.Footer__column}>
                        <h4 className={style.Footer__column_title}>Support</h4>
                        <ul className={style.Footer__column_list}>
                            <li className={style.Footer__column_item}>Help Center</li>
                            <li className={style.Footer__column_item}>Request Feature</li>
                            <li className={style.Footer__column_item}>Add a Protocol</li>
                            <li className={style.Footer__column_item}>Bug Bounty</li>
                            <li className={style.Footer__column_item}>
                                <img src={footerSertificatedImg} alt="" className={style.Footer__column_img} />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={style.Footer__messangeres}>
                    <p className={style.Footer__messangeres_title}>© 2023 Reyna Ventures</p>
                    <ul className={style.Footer__messangeres_list}>
                        <li className={style.Footer__messangeres_item}>
                            <BsDiscord className={style.Footer__messangeres_img} />
                        </li>
                        <li className={style.Footer__messangeres_item}>
                            <BsTwitter className={style.Footer__messangeres_img} />
                        </li>
                        <li className={style.Footer__messangeres_item}>
                            <BiLogoTelegram className={style.Footer__messangeres_img} />
                        </li>
                        <li className={style.Footer__messangeres_item}>
                            <BiLogoFacebook className={style.Footer__messangeres_img} />
                        </li>
                        <li className={style.Footer__messangeres_item}>
                            <BiLogoLinkedin className={style.Footer__messangeres_img} />
                        </li>
                        <li className={style.Footer__messangeres_item}>
                            <BsGithub className={style.Footer__messangeres_img} />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;