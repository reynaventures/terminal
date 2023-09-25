import React, { useEffect, useState } from 'react'
import style from './header.module.scss';
import { BiWallet } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { useWalletStore } from '../../store/walletStore.js';

function Header() {

    const navigate = useNavigate();
    const isLoggedIn = useWalletStore((state) => state.isLoggedIn);
    const avatar = useWalletStore((state) => state.avatar);
    const wallet = useWalletStore((state) => state.wallet);
    const [hideHeader, setHideHeader] = useState(false);

    const handleLogo = () => {
        navigate('/')
    }
    const handleConnect = () => {
        navigate('app/connect-wallet');
    }

    useEffect(() => {
        let prevScrollPos = window.pageYOffset;
        window.addEventListener('scroll', function() {
            const currentScrollPos = window.pageYOffset;
            if (prevScrollPos > currentScrollPos) {
                setHideHeader(false);
            } else {
                setHideHeader(true);
            }
            prevScrollPos = currentScrollPos;
        });
    }, []);

    return (
        <header className={hideHeader ? style.header_hide : style.header}>
            <div className={style.header__container}>
                <div className={style.header__logo} onClick={handleLogo}>
                    <img src='' alt='' className={style.header__img}/>
                    <h2 className={style.header__title}>Reyna Ventures</h2>
                </div>
                <div className={style.header__rightPart}>
                    <ul className={style.header__nav}>
                        <li className={style.header__nav_item}>Reyna DNA</li>
                        <li className={style.header__nav_item}>Careers</li>
                        <li className={style.header__nav_item}>Blog</li>
                        <li className={style.header__nav_item}>Help Center</li>
                        <li className={style.header__nav_item}>Community</li>
                    </ul>
                    <button className={style.header__btn} onClick={handleConnect}>
                        <BiWallet className={style.header__btn_icon}/>
                        <p className={style.header__btn_name}>Reyna Web App</p>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;