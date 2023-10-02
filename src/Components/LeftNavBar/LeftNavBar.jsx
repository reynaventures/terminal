import React, { useRef, useState } from 'react';
import style from './LeftNavBar.module.scss';
import { useReynaAppStore } from '../../store/reynaApp';
import { BiPlus } from 'react-icons/bi';
import { AiFillApple } from 'react-icons/ai';
import { BsGooglePlay } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useWalletStore } from '../../store/walletStore';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiSolidWalletAlt } from 'react-icons/bi';
import { GrFormCheckmark } from 'react-icons/gr';
import { useClickOutsideAndClose } from '../../hooks/useOutcideClick';

function LeftNavBar() {

    const asideList = useReynaAppStore((state) => state.asideList);
    const navigate = useNavigate();
    const isLoggedIn = useWalletStore((state) => state.isLoggedIn);
    const wallet = useWalletStore((state) => state.wallet);
    const balance = useWalletStore((state) => state.balance);
    const avatar = useWalletStore((state) => state.avatar);
    const mobileReynaMenu = useReynaAppStore((state) => state.mobileReynaMenu);
    const setMobileReynaMenu = useReynaAppStore((state) => state.setMobileReynaMenu);
    const isBalanceVisible = useReynaAppStore((state) => state.isBalanceVisible);
    const shortlyWallet = `${wallet?.slice(0, 6)}...${wallet?.slice(wallet?.length - 4, wallet?.length - 0)}`
    const [open, setOpen] = useState(false);
    const paramsActivePage = window.location.pathname;
    const accOpenBlockRef = useRef();
    const mobileLeftMenuRef = useRef();
    useClickOutsideAndClose(accOpenBlockRef, () => setOpen(false));
    useClickOutsideAndClose(mobileLeftMenuRef, () => setMobileReynaMenu(false));

    const handleNavItem = (navItem) => {
        navigate(navItem.navigateUrl);
    };

    return (
        <aside className={mobileReynaMenu && window.innerWidth <= 991 ? style.navBar_mobile_active : style.navBar} ref={mobileLeftMenuRef}>
            {isLoggedIn
            ? (
                <div className={style.navBar__acc} onClick={() => setOpen(prev => !prev)}>
                    <div className={style.navBar__acc_info}>
                        <img src={avatar} alt="" className={style.navBar__acc_avatar} />
                        <div className={style.navBar__acc_wallet_inf}>
                            <p className={style.navBar__acc_wallet}>{shortlyWallet}</p>
                            <div className={style.navBar__acc_money}>
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
                            </div>
                        </div>
                    </div>
                    {open
                    ? <MdOutlineKeyboardArrowUp className={style.navBar__acc_arrow} />
                    : <MdOutlineKeyboardArrowDown className={style.navBar__acc_arrow} />
                    }
                    {open && (
                        <div className={style.navBar__accOpen} ref={accOpenBlockRef}>
                            <div className={style.navBar__accOpen_profile} onClick={() => navigate('/app/pocket')}>
                                <img src={avatar} alt="" className={style.navBar__accOpen_img} />
                                <div className={style.navBar__accOpen_infBlock}>
                                    <p className={style.navBar__accOpen_shortWallet}>{shortlyWallet}</p>
                                    <span className={style.navBar__accOpen_typeLogin}>MetaMask</span>
                                </div>
                                <GrFormCheckmark className={style.navBar__accOpen_checkmarkIcon} />
                            </div>
                            <div className={style.navBar__accOpen_item} onClick={() => navigate('/app/connect-wallet')}>
                                <AiOutlinePlus className={style.navBar__accOpen_addWallet_icon}/>
                                <p className={style.navBar__accOpen_item_text}>Подключить новый кошелек</p>
                            </div>
                            <div className={style.navBar__accOpen_item} onClick={() => navigate('/app/connect-wallet')}>
                                <BiSolidWalletAlt className={style.navBar__accOpen_controlWallet_icon}/>
                                <p className={style.navBar__accOpen_item_text}>Управление кошельками</p>
                            </div>
                        </div>
                    )}
                </div>
            )
            : (
                <div className={style.navBar__welcome}>
                    <div className={style.navBar__logo}>reyna</div>
                    <p className={style.navBar__title}>Добро пожаловать в Reyna</p>
                    <p className={style.navBar__text}>Подключите Ethereum кошелек, чтобы управлять своим портфелем</p>
                    <button className={style.navBar__add_wallet} onClick={() => navigate('/app/connect-wallet')}>
                        <BiPlus className={style.navBar__plus_icon} />
                        Подключить кошелек
                    </button>
                </div>
            )
            }
            <div className={style.navBar__menu}>
                <ul className={style.navBar__list}>
                    {asideList && isLoggedIn && asideList?.map((navItem) => (
                        <li 
                            className={navItem.navigateUrl === paramsActivePage ? style.navBar__item_active : style.navBar__item} 
                            key={navItem.id} 
                            onClick={() => navItem.id === 0 ? handleNavItem(navItem) : null}
                        >
                            <navItem.icon className={style.navBar__item_icon} />
                            {navItem.name}
                        </li>
                    ))}
                </ul>
            </div>
            <div className={style.navBar__bottomBlock}>
                <button className={style.navBar__download_btn}>
                    Download App
                    <div>
                        <AiFillApple className={style.navBar__bottomBlock_icon} />
                        <BsGooglePlay className={style.navBar__bottomBlock_icon} />
                    </div>
                </button>
                <div className={style.navBar__bottomBlock_footer}>
                    <div className={style.navBar__bottomBlock_logo}>reyna</div>
                    <div className={style.navBar__bottomBlock_vacansyes}>Вакансии</div>
                </div>
            </div>
        </aside>
    )
}

export default LeftNavBar;