import React from 'react';
import style from './AccNotExistModal.module.scss';
import { RxCross2 } from 'react-icons/rx';
import { useWalletStore } from '../../../store/walletStore';

function AccNotExistModal({ setModal }) {

    const wallet = useWalletStore((state) => state.wallet);
    const shortlyWallet = `${wallet?.slice(0, 6)}...${wallet?.slice(wallet?.length - 4, wallet?.length - 0)}`;

    const handleCancel = () => {
        setModal(false);
    }

    return (
        <div className={style.modal} onClick={handleCancel}>
            <div className={style.AccNotExistModal} onClick={(e) => e.stopPropagation()}>
                <div className={style.AccNotExistModal__head}>
                    <p className={style.AccNotExistModal__title}>Кошелек не существует</p>
                    <RxCross2 className={style.AccNotExistModal__close} onClick={handleCancel} />
                </div>
                <div className={style.AccNotExistModal__body}>
                    <p className={style.AccNotExistModal__text}>В нашей базе данных нет кошелька «{shortlyWallet}» </p>
                    <p className={style.AccNotExistModal__wallet}>Попробуйте войти с помощью другого кошелька</p>
                </div>
                <div className={style.AccNotExistModal__btns}>
                    <button className={style.AccNotExistModal__btn} onClick={handleCancel}>Закрыть</button>
                </div>
            </div>
        </div>
    )
}

export default AccNotExistModal;