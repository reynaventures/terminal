import React, { useRef, useState } from 'react'
import style from './pocketPage.module.scss';
import { useWalletStore } from '../../store/walletStore';
import { IoIosShareAlt } from 'react-icons/io';
import { MdOutlineContentCopy, MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Tokens from './Components/Tokens/Tokens.tsx';
import { useClickOutsideAndClose } from '../../hooks/useOutcideClick';
import clipboardCopy from "clipboard-copy";
import { useReynaAppStore } from '../../store/reynaApp';
import DisconnectWalletModal from '../../Components/Modals/DisconnectWalletModal/DisconnectWalletModal';
import TokensNotFound from './Components/TokensNotFound/TokensNotFound';

function PocketPage() {

    const wallet = useWalletStore((state) => state.wallet);
    const balance = useWalletStore((state) => state.balance);
    const avatar = useWalletStore((state) => state.avatar);
    const isBalanceVisible = useReynaAppStore((state) => state.isBalanceVisible);
    const profit = useWalletStore((state) => state.profit);
    const shortlyWallet = `${wallet?.slice(0, 6)}...${wallet?.slice(wallet?.length - 4, wallet?.length - 0)}`;
    const [openWalletMenu, setOpenWalletMenu] = useState(false);
    const [openDisconectWallet, setOpenDisconectWallet] = useState(false);
    const [handleCopy, setHandleCopy] = useState(false);
    const walletRef = useRef(null);
    useClickOutsideAndClose(walletRef, () => setOpenWalletMenu(false));

    const handleDisconnect = () => {
        setOpenDisconectWallet(true);
    };
    const handleCopyWallet = () => {
        clipboardCopy(wallet);
        setOpenWalletMenu(false)
        setHandleCopy(true);
        setTimeout(() => setHandleCopy(false), 1500);
    }

    return (
        <div className={style.PocketPage_wrap}>
            {openDisconectWallet && <DisconnectWalletModal setModal={setOpenDisconectWallet} />}
            <div className={style.PocketPage}>
                <div className={style.PocketPage__head}>
                    <div className={style.PocketPage__head_info}>
                        <img src={avatar} alt="" className={style.PocketPage__avatar} />
                        <div className={style.PocketPage__info_block}>
                            <div className={style.PocketPage__info_wallet}>
                                <p className={style.PocketPage__info_short_wallet}>{shortlyWallet}</p>
                                <MdOutlineKeyboardArrowDown className={style.PocketPage__arrow_icon} onClick={() => setOpenWalletMenu(prev => !prev)} />
                                {handleCopy && <div className={style.PocketPage__info_copied}>Copied</div>}
                                {openWalletMenu && (
                                    <div className={style.PocketPage__walletMenu} ref={walletRef}>
                                        <div className={style.PocketPage__copy} onClick={handleCopyWallet}>
                                            <MdOutlineContentCopy className={style.PocketPage__copy_icon}/>
                                            <div className={style.PocketPage__copy_block}>
                                                <p className={style.PocketPage__copy_title}>Копировать адрес</p>
                                                <p className={style.PocketPage__copy_wallet}>{wallet}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                                }
                            </div>
                            <div className={style.PocketPage__money}>
                                {isBalanceVisible
                                ?   `${balance} $`
                                :   (
                                    <div className={style.blur_container}>
                                        <div className={style.square}></div>
                                        <div className={style.square}></div>
                                        <div className={style.square}></div>
                                    </div>
                                )
                                }
                            </div>
                            <p className={profit >= 0 ? style.PocketPage__profit_positive : style.PocketPage__profit_negative}>
                                +{profit}% (
                                    <div className={style.PocketPage__profit_balance}>
                                        {isBalanceVisible
                                            ?   '0,00 $'
                                            :   (
                                                <div className={style.blur_container_profit}>
                                                    <div className={style.square}></div>
                                                    <div className={style.square}></div>
                                                    <div className={style.square}></div>
                                                </div>
                                            )
                                        }
                                    </div>
                                )
                            </p>
                        </div>
                    </div>
                    <div className={style.PocketPage__head_actions}>
                        <div className={style.PocketPage__head_share}>
                            <IoIosShareAlt />
                        </div>
                        <button className={style.PocketPage__head_off} onClick={handleDisconnect}>Отключить кошелек</button>
                    </div>
                </div>
                <ul className={style.PocketPage__row}>
                    <li className={style.PocketPage__row_item_active}>Tokens</li>
                </ul>
                {+balance === 0 
                ?   <TokensNotFound />
                :   <Tokens />
                }
            </div>
        </div>
    )
}

export default PocketPage;