import React from 'react';
import style from './DisconnectWalletModal.module.scss';
import { RxCross2 } from 'react-icons/rx';
import { useWalletStore } from '../../../store/walletStore';
import { useNavigate } from 'react-router-dom';

function DisconnectWalletModal({ setModal }) {

    const wallet = useWalletStore((state) => state.wallet);
    const setClearWallet = useWalletStore((state) => state.setClearWallet);
    const shortlyWallet = `${wallet?.slice(0, 6)}...${wallet?.slice(wallet?.length - 4, wallet?.length - 0)}`;
    const navigate = useNavigate();

    const handleCancel = () => {
        setModal(false);
    }
    const handleDisconnect = () => {
        setClearWallet();
        navigate('/app/connect-wallet');
    }

    return (
        <div className={style.modal} onClick={handleCancel}>
            <div className={style.DisconnectWalletModal} onClick={(e) => e.stopPropagation()}>
                <div className={style.DisconnectWalletModal__head}>
                    <p className={style.DisconnectWalletModal__title}>Отключить кошелек</p>
                    <RxCross2 className={style.DisconnectWalletModal__close} onClick={handleCancel} />
                </div>
                <div className={style.DisconnectWalletModal__body}>
                    <p className={style.DisconnectWalletModal__text}>Вы уверены, что хотите отключить «{shortlyWallet}»? </p>
                    <p className={style.DisconnectWalletModal__wallet}>{wallet}</p>
                </div>
                <div className={style.DisconnectWalletModal__btns}>
                    <button className={style.DisconnectWalletModal__btn} onClick={handleCancel}>Отмена</button>
                    <button className={style.DisconnectWalletModal__btn} onClick={handleDisconnect}>Отключить</button>
                </div>
            </div>
        </div>
    )
}

export default DisconnectWalletModal;