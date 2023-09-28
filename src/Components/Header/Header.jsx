import React, { useEffect, useState } from 'react'
import style from './header.module.scss';
import { BiWallet } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
import MobileHeader from '../MobileHeader/MobileHeader';

function Header() {

    const navigate = useNavigate();
    const [hideHeader, setHideHeader] = useState(false);
    const [mobileHeader, setMobileHeader] = useState(false);

    const handleLogo = () => {
        navigate('/')
    }
    const handleConnect = () => {
        navigate('app/connect-wallet');
    }
    const [burger, setBurger] = useState(false);

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

    const openMobileHeader = () => {
        setMobileHeader(true);
        document.body.style.overflow = 'hidden';
    }
    const closeMobileHeader = () => {
        document.body.style.overflow = 'auto';
        setMobileHeader(false)
    }

    return (
        <header className={hideHeader ? style.header_hide : style.header}>
            <div className={style.header__container}>
                <div className={style.header__logo} onClick={handleLogo}>
                    <img src='' alt='' className={style.header__img}/>
                    <p className={style.header__title}>Reyna</p>
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
                    <div className={style.header__burger} onClick={() => setBurger(prev => !prev)}>
                        {burger 
                            ? <AiOutlineClose className={style.header__burger_icon} onClick={closeMobileHeader} /> 
                            : <RxHamburgerMenu className={style.header__burger_icon} onClick={openMobileHeader} />
                        }
                    </div>
                    <MobileHeader active={mobileHeader}/>
                </div>
            </div>
        </header>
    )
}

export default Header;