import React from 'react';
import style from './Coments.module.scss';
import { BsTwitter } from 'react-icons/bs';
import { AiFillApple } from 'react-icons/ai';
import { useHomePageStore } from '../../../store/homePageStore';

function Coments() {

    const commentsType = useHomePageStore((state) => state.commentsType);
    const commentsTwitter = useHomePageStore((state) => state.commentsTwitter);
    const commentsAppleStore = useHomePageStore((state) => state.commentsAppleStore);
    const setCommentsType = useHomePageStore((state) => state.setCommentsType);

    return (
        <div className={style.Coments}>
            <div className={style.Coments__block}>
                <div className={style.Coments__head}>
                    <h2 className={style.Coments__title}>Explore Web3 with People You Trust</h2>
                    <div className={style.Coments__btns}>
                        <button className={commentsType === 'twitter' ? style.Coments__btn_active : style.Coments__btn} onClick={() => setCommentsType('twitter')}>
                            <BsTwitter className={style.Coments__twitter}/>
                            Twitter
                        </button>
                        <button className={commentsType === 'appleStore' ? style.Coments__btn_active : style.Coments__btn} onClick={() => setCommentsType('appleStore')}>
                            <AiFillApple className={style.Coments__apple}/>
                            App Store
                        </button>
                    </div>
                </div>
                <ul className={style.Coments__list}>
                    {commentsType === 'twitter'
                        ?   commentsTwitter?.map((comment) => (
                            <li className={style.Coments__item}>
                                <div className={style.Coments__item_profile}>
                                    <img src={comment?.avatar} alt="" className={style.Coments__item_avatar} />
                                    <div>
                                        <p className={style.Coments__item_name}>{comment?.name}</p>
                                        <p className={style.Coments__item_tag}>{comment?.tag}</p>
                                    </div>
                                </div>  
                                <p className={style.Coments__text}>{comment?.text}</p>
                            </li>
                        ))
                        :  commentsType === 'appleStore'
                        ?   commentsAppleStore?.map((comment) => (
                            <li className={style.Coments__item}>
                                <p className={style.Coments__item_name}>{comment?.name}</p>
                                <p className={style.Coments__text}>{comment?.text}</p>
                            </li>
                        ))
                        : null
                    }
                </ul>
            </div>
        </div>
    )
}

export default Coments;
