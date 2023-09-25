import React from 'react';
import style from './GlobalErrorModal.module.scss';
import { RxCross2 } from 'react-icons/rx';
import { useReynaAppStore } from '../../../store/reynaApp';

function GlobalErrorModal() {

    const setGlobalError = useReynaAppStore((state) => state.setGlobalError);
    const globalError = useReynaAppStore((state) => state.globalError);
    const handleCancel = () => {
        setGlobalError(null);
    }

    return (
        <div className={style.modal} onClick={handleCancel}>
            <div className={style.AccNotExistModal} onClick={(e) => e.stopPropagation()}>
                <div className={style.AccNotExistModal__head}>
                    <p className={style.AccNotExistModal__title}>Ой, случилась ошибка!</p>
                    <RxCross2 className={style.AccNotExistModal__close} onClick={handleCancel} />
                </div>
                <div className={style.AccNotExistModal__body}>
                    <p className={style.AccNotExistModal__text}>{globalError}</p>
                </div>
                <div className={style.AccNotExistModal__btns}>
                    <button className={style.AccNotExistModal__btn} onClick={handleCancel}>Закрыть</button>
                </div>
            </div>
        </div>
    )
}

export default GlobalErrorModal;