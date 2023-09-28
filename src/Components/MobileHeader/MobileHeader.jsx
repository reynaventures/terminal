import React from 'react';
import style from './mobileHeader.module.scss';

function MobileHeader({ active }) {
    return (
        <div className={active ? style.mobileHeader_active : style.mobileHeader}>
            <ul className={style.mobileHeader__nav}>
                <li className={style.mobileHeader__nav_item}>Reyna DNA</li>
                <li className={style.mobileHeader__nav_item}>Careers</li>
                <li className={style.mobileHeader__nav_item}>Blog</li>
                <li className={style.mobileHeader__nav_item}>Help Center</li>
                <li className={style.mobileHeader__nav_item}>Community</li>
            </ul>
        </div>
    )
}

export default MobileHeader;