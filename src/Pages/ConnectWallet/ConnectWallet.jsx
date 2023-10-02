import React, { useState } from 'react';
import style from './ConnectWallet.module.scss';
import metamaskIcon from '../../assets/img/metaMaskIcon.png';
import { useWalletStore } from '../../store/walletStore';
import { useNavigate } from 'react-router-dom';
import ConnectWalletModal from '../../Components/Modals/ConnectWalletModal/ConnectWalletModal.tsx';
import axios from 'axios';
import AccNotExistModal from '../../Components/Modals/AccNotExistModal/AccNotExistModal';
import { useReynaAppStore } from '../../store/reynaApp';

function ConnectWallet() {

    const setWallet = useWalletStore((state) => state.setWallet);
    const setBalance = useWalletStore((state) => state.setBalance);
    const setAvatar = useWalletStore((state) => state.setAvatar);
    const setIsLoggedIn = useWalletStore((state) => state.setIsLoggedIn);
    const setProfit = useWalletStore((state) => state.setProfit);
    const setGlobalError = useReynaAppStore((state) => state.setGlobalError);
    const navigate = useNavigate();
    const [value, setValue] = useState('');
    const [isModalActive, setIsModalActive] = useState(false);
    const [isModalNotExistAccActive, setIsModalNotExistAccActive] = useState(false);

    const handleConnectWallet = () => {
        if(window.ethereum) {
            setIsModalActive(true);
            window.ethereum.request({ method: "eth_requestAccounts" })
            .then((account) => {
                requestRemoteAccs(account);
            })
            .catch((err) => setGlobalError(`something wrong: ${err.message}`))
        }   else {
            setGlobalError('Please, install metamask')
        }
    }

    const requestRemoteAccs = (account) => {
        axios.get('http://localhost/test/index.php').then(res => {
            const isAccountExist = res?.data?.find((acc) => acc?.wallet === account[0]);
            if(res?.data && isAccountExist) {
                let avatarUrl = `https://api.multiavatar.com/${account[0]}.png`;
                setWallet(account[0]);
                setBalance(isAccountExist?.balance);
                setAvatar(avatarUrl);
                setProfit(isAccountExist?.profit);
                setIsLoggedIn(true);
                navigate('/app/pocket');
            }   else {
                setIsModalActive(false);
                setIsModalNotExistAccActive(true);
            }
        });
    }

    return (
        <div className={style.ConnectWallet}>
            {isModalActive ? <ConnectWalletModal setModal={setIsModalActive} /> : null}
            {isModalNotExistAccActive ? <AccNotExistModal setModal={setIsModalNotExistAccActive} /> : null}
            <div className={style.ConnectWallet__connect}>
                <h1 className={style.ConnectWallet__title}>Подключение к Reyna</h1>
                <ul className={style.ConnectWallet__list}>
                    <li className={style.ConnectWallet__item} onClick={handleConnectWallet}>
                        <img src={metamaskIcon} alt='metamask' className={style.ConnectWallet__img}/>
                        <span className={style.ConnectWallet__name}>MetaMask</span>
                    </li>
                </ul>
                <p className={style.ConnectWallet__text}>Отслеживать любой кошелек</p>
                <div className={style.ConnectWallet__input_wrap}>
                    <input 
                        type='text' 
                        className={style.ConnectWallet__input} 
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder='Enter address, domain or identity'
                    />
                    <button className={style.ConnectWallet__add_btn}>Добавить</button>
                </div>
            </div>
        </div>
    )
}

export default ConnectWallet;