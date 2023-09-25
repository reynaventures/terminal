import React, { useEffect, useState } from 'react'
import style from './GetWallet.module.scss';
import { AiFillApple, AiFillAndroid } from 'react-icons/ai';
import { HiArrowRight } from 'react-icons/hi';
import { BsGooglePlay } from 'react-icons/bs';
import getWalletBG1 from '../../../assets/svg/getWalletBG1.png';
import getWalletBG2 from '../../../assets/svg/getWalletBG2.png';
import getWalletBG3 from '../../../assets/svg/getWalletBG3.png';
import getWalletBG4 from '../../../assets/svg/getWalletBG4.png';
import getWalletBG5 from '../../../assets/svg/getWalletBG5.png';

function GetWallet() {

/*     const [text, setText] = useState('');
    const [textToAnimate, setTextToAnimate] = useState('desktop');
    console.log('textToAnimate', textToAnimate)

    useEffect(() => {
        let currentIndex = 0;
        let intervalId;
        
        const animateText = () => {
            if (currentIndex < textToAnimate.length - 1) {
                setText((prevText) => prevText + textToAnimate[currentIndex]);
                currentIndex++;
          } else if (currentIndex === textToAnimate.length - 1) {
              clearInterval(intervalId);
              setTimeout(() => {
                  intervalId = setInterval(() => {
                      if (currentIndex > 0) {
                          setText((prevText) => prevText.slice(0, -1));
                          currentIndex--;
                        } else {
                            setTextToAnimate('mobile');
                            clearInterval(intervalId);
                        }
                    }, 100);
                }, 1000);
            }
        };
        
        intervalId = setInterval(animateText, 100);
        
        return () => {
            clearInterval(intervalId);
        }
      }, [textToAnimate]); */

    return (
        <div className={style.GetWallet}>
            {/* <h2 className={style.GetWallet__title}>{text}</h2> */}
            <div className={style.GetWallet__device}>desktop</div>
            <div className={style.GetWallet__btns}>
                <button className={style.GetWallet__btn}>
                    <AiFillApple className={style.GetWallet__btn_icon}/>
                    <span className={style.GetWallet__btn_title}>iOS & macOS</span>
                </button>
                <button className={style.GetWallet__btn}>
                    <BsGooglePlay className={style.GetWallet__btn_icon}/>
                    <span className={style.GetWallet__btn_title}>Google Play</span>
                </button>
                <button className={style.GetWallet__btn}>
                    <AiFillAndroid className={style.GetWallet__btn_icon}/>
                    <span className={style.GetWallet__btn_title}>APK 7.0+</span>
                </button>
            </div>
            <p className={style.GetWallet__link}>
                Get app link via QR code
                <HiArrowRight className={style.GetWallet__arrow}/>
            </p>
            <img src={getWalletBG1} alt="" className={style.GetWallet__bg_img_1} />
            <img src={getWalletBG2} alt="" className={style.GetWallet__bg_img_2} />
            <img src={getWalletBG3} alt="" className={style.GetWallet__bg_img_3} />
            <img src={getWalletBG4} alt="" className={style.GetWallet__bg_img_4} />
            <img src={getWalletBG2} alt="" className={style.GetWallet__bg_img_5} />
            <img src={getWalletBG5} alt="" className={style.GetWallet__bg_img_6} />
        </div>
    )
}

export default GetWallet;