import { create } from "zustand";
import immer from 'immer';

export const useWalletStore = create()(immer((set) => ({
    wallet: null,
    balance: null,
    avatar: null,
    isLoggedIn: false,
    accets: [],
    accounts: [],
    profit: 0.0,

    setWallet: (wallet) => {
        set(() => ({
            wallet: wallet,
        }))
    },
    setBalance: (balance) => {
        set(() => ({
            balance: balance,
        }))
    },
    setAvatar: (avatar) => {
        set(() => ({
            avatar: avatar,
        }))
    },
    setIsLoggedIn: (isLoggedIn) => {
        set(() => ({
            isLoggedIn: isLoggedIn,
        }))
    },
    setClearWallet: () => {
        set(() => ({
            wallet: null,
            balance: null,
            avatar: null,
            isLoggedIn: false,
        }))
    },
    setProfit: (profit) => {
        set(() => ({
            profit: profit,
        }))
    },
})));
