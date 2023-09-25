import React from 'react';
import style from './ConnectWalletModal.module.scss';
import { RxCross2 } from 'react-icons/rx';
import Loader from '../../Loader/Loader';

function ConnectWalletModal({ setModal }) {

    const handleDisconnect = () => {
        setModal(false);
    }

    return (
        <div className={style.modal} onClick={handleDisconnect}>
            <div className={style.ConnectWalletModal} onClick={(e) => e.stopPropagation()}>
                <div className={style.ConnectWalletModal__head}>
                    <p className={style.ConnectWalletModal__title}>Подключение к MetaMask</p>
                    <RxCross2 className={style.ConnectWalletModal__close} onClick={handleDisconnect} />
                </div>
                <div className={style.ConnectWalletModal__body}>
                    <Loader />
                    <p className={style.ConnectWalletModal__text}>Подключите MetaMask к Reyna, чтобы продолжить</p>
                    <p className={style.ConnectWalletModal__sequire_title}>Безопасность</p>
                    <p className={style.ConnectWalletModal__sequire_text}>Вы управляете вашими средствами и приватными ключами. Без перекрестной ассоциации с адресами кошельков.</p>
                </div>
                <button className={style.ConnectWalletModal__btn} onClick={handleDisconnect}>Отмена</button>
            </div>
        </div>
    )
}

export default ConnectWalletModal;