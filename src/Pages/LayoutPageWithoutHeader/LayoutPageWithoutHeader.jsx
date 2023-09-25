import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import style from './LayoutPageWithoutHeader.module.scss';
import LeftNavBar from '../../Components/LeftNavBar/LeftNavBar';
import ReynaAppHeader from '../../Components/ReynaAppHeader/ReynaAppHeader.tsx';
import { ethers } from 'ethers'
import { useWalletStore } from '../../store/walletStore';
import axios from 'axios';
import AccNotExistModal from '../../Components/Modals/AccNotExistModal/AccNotExistModal';
import { useReynaAppStore } from '../../store/reynaApp';
import GlobalErrorModal from '../../Components/Modals/GlobalErrorModal/GlobalErrorModal';

function LayoutPageWithoutHeader() {

  const setWallet = useWalletStore((state) => state.setWallet);
  const setBalance = useWalletStore((state) => state.setBalance);
  const setAvatar = useWalletStore((state) => state.setAvatar);
  const setIsLoggedIn = useWalletStore((state) => state.setIsLoggedIn);
  const setProfit = useWalletStore((state) => state.setProfit);
  const setGlobalError = useReynaAppStore((state) => state.setGlobalError);
  const globalError = useReynaAppStore((state) => state.globalError);
  const [isModalNotExistAccActive, setIsModalNotExistAccActive] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getCurrentWalletConnected();
  }, [])

  const getCurrentWalletConnected = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length > 0) {
            requestRemoteAccs(accounts);
        }
      } catch (err) {
        setGlobalError(err.message);
      }
    } else {
      setGlobalError("Please install MetaMask");
    }
  };

  const requestRemoteAccs = (account) => {
    axios.get('http://localhost/test/index.php').then(res => {
      const isAccountExist = res?.data?.find((acc) => acc?.wallet === account[0]);
      setWallet(account[0]);
      if(res?.data && isAccountExist) {
        setIsModalNotExistAccActive(false);
        let avatarUrl = `https://api.multiavatar.com/${account[0]}.png`;
        getBalance(account[0]);
        setAvatar(avatarUrl);
        setProfit(isAccountExist?.profit);
        setIsLoggedIn(true);
        navigate('/app/pocket');
      }   else {
            setIsLoggedIn(false);
            navigate('/app/connect-wallet');
            setIsModalNotExistAccActive(true);
        }
    });
}

  const getBalance = (account) => {
    window.ethereum.request({ 
        method: "eth_getBalance", 
        params: [account, "latest"],
    }).then((balance) => {
        setBalance(parseFloat(ethers.utils.formatEther(balance)).toFixed(4)); 
        return ethers.utils.formatEther(balance);
    })
  }

  const chainChange = () => {
    window.location.reload();
  }

  window.ethereum.on("accountsChanged", getCurrentWalletConnected);
  window.ethereum.on("chainChanged", chainChange);

    return (
        <div className={style.layoutPage}>
            {isModalNotExistAccActive ? <AccNotExistModal setModal={setIsModalNotExistAccActive} /> : null}
            {globalError ? <GlobalErrorModal/> : null}
            <LeftNavBar />
            <ReynaAppHeader />
            <Outlet />
        </div>
    )
}

export default LayoutPageWithoutHeader;