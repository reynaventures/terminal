import React, { useState } from 'react';
import style from './ReynaAppHeader.module.scss';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useReynaAppStore } from '../../store/reynaApp';

function ReynaAppHeader() {
    const [searchValue, setSearchValue] = useState('');
    const setBalanceVisibility = useReynaAppStore((state) => state.setBalanceVisibility);
    const isBalanceVisible = useReynaAppStore((state) => state.isBalanceVisible);

    return (
        <div className={style.ReynaAppHeader}>
            <div className={style.ReynaAppHeader__block}>
                <div className={style.ReynaAppHeader__input}>
                    <input 
                        value={searchValue} 
                        placeholder='Asset, wallet, domain or indetify' 
                        type='text'
                        onChange={(e) => setSearchValue(e.target.value)}
                        className={style.ReynaAppHeader__search}
                    />
                    <div className={style.ReynaAppHeader__input_letter}>F</div>
                </div>
                <ul className={style.ReynaAppHeader__list}>
                    <li className={style.ReynaAppHeader__item}>
                        <p>USD</p>
                        <MdOutlineKeyboardArrowDown className={style.ReynaAppHeader__arrow}/>
                    </li>
                    <li className={style.ReynaAppHeader__item}>
                        {isBalanceVisible
                        ?   <AiOutlineEye className={style.ReynaAppHeader__eye} onClick={() => setBalanceVisibility(false)} />
                        :   <AiOutlineEyeInvisible className={style.ReynaAppHeader__eye} onClick={() => setBalanceVisibility(true)} />
                        }
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ReynaAppHeader;