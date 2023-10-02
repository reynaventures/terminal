import { create } from "zustand";
import immer from 'immer';
import { AiFillEye, AiOutlineStar, AiOutlineCompass } from 'react-icons/ai';
import { IoIosSend } from "react-icons/io";
import { CgArrowsExchangeAlt } from 'react-icons/cg';
import { BiArrowFromTop } from "react-icons/bi";
import { CiSettings } from 'react-icons/ci';

export const useReynaAppStore = create()(immer((set) => ({
    asideList: [
        { id: 0, name: 'Обзор', icon: AiFillEye, navigateUrl: '/app/pocket' },
        { id: 1, name: 'Инвестиции', icon: AiOutlineCompass, navigateUrl: '/app/explore' },
        { id: 2, name: 'Избранное', icon: AiOutlineStar, navigateUrl: '/app/favorites' },
        { id: 3, name: 'Отправить', icon: IoIosSend, navigateUrl: '/app/send' },
        { id: 4, name: 'Обмен', icon: CgArrowsExchangeAlt, navigateUrl: '/app/swap' },
        { id: 5, name: 'Bridge', icon: BiArrowFromTop, navigateUrl: '/app/bridge' },
        { id: 6, name: 'Настройки', icon: CiSettings, navigateUrl: '/app/settings' },
    ],
    activeBlock: 'connect',
    isBalanceVisible: true,
    globalError: null,
    mobileReynaMenu: false,

    setActiveBlock: (name) => {
        set(() => ({
            activeBlock: name,
        }))
    },
    setBalanceVisibility: (isVisible) => {
        set(() => ({
            isBalanceVisible: isVisible,
        }))
    },
    setGlobalError: (errorText) => {
        set(() => ({
            globalError: errorText,
        }))
    },
    setMobileReynaMenu: (isOpen) => {
        set(() => ({
            mobileReynaMenu: isOpen,
        }))
    },
})));
