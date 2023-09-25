import { create } from "zustand";
import immer from 'immer';
import { AiFillEye } from 'react-icons/ai';

export const useReynaAppStore = create()(immer((set) => ({
    asideList: [
        { id: 0, name: 'Обзор', icon: AiFillEye, navigateUrl: '/app/pocket' },
    ],
    activeBlock: 'connect',
    isBalanceVisible: true,
    globalError: null,

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
})));
