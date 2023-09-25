import React from 'react';
import style from './SendMoneyModal.module.scss';
import { RxCross2 } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';

function SendMoneyModal({ setModal }) {

    const navigate = useNavigate();
    const handleClose = () => {
        setModal(false);
        navigate('/app/pocket')
    }

    return (
        <div className={style.modal} onClick={handleClose}>
            <div className={style.SendMoneyModal} onClick={(e) => e.stopPropagation()}>
                <div className={style.SendMoneyModal__head}>
                    <p className={style.SendMoneyModal__title}>Оплата</p>
                    <RxCross2 className={style.SendMoneyModal__close} onClick={handleClose} />
                </div>
                <div className={style.SendMoneyModal__body}>
                    <p className={style.SendMoneyModal__text}>Спасибо за оплату!</p>
                    <p className={style.SendMoneyModal__sequire_title}>Вскоре мы проверим платеж и отправим валюту вам на счет</p>
                    <p className={style.SendMoneyModal__sequire_text}>@Reyna Ventures</p>
                </div>
                <div className={style.SendMoneyModal__btnBlock}>
                    <button className={style.SendMoneyModal__btn} onClick={handleClose}>Закрыть</button>
                </div>
            </div>
    </div>
    )
}

export default SendMoneyModal;