import { create } from "zustand";
import immer from 'immer';
import commentsCard1 from '../assets/img/commentsCard1.jpeg';
import commentsCard2 from '../assets/img/commentsCard2.jpeg';
import commentsCard3 from '../assets/img/commentsCard3.png';

export const useHomePageStore = create()(immer((set) => ({
    commentsTwitter: [
        {
            avatar: commentsCard1,
            name: 'Crews 🔴_🔴',
            tag: '@theyoungcrews',
            text: 'logged into @zerion_io & found $5k i forgot about in some random dapp on a chain i dont use anymore never found that much in a jacket pocket',
        },
        {
            avatar: commentsCard2,
            name: 'Altcoin Psycho',
            tag: '@AltcoinPsycho',
            text: `A piece of advice: If you're trying to swap USDT for USDC, do so on @zerion_io as it will aggregate the best possible swap for you. It should give you ~99 cents on the dollar. Hearing a lot of people getting killed on spreads elsewhere, as bad as 95 cents on the dollar`,
        },
        {
            avatar: commentsCard3,
            name: 'w1tch.eth🍀(she/her/boss)',
            tag: '@Cicchelli_Tarot',
            text: 'Checking floor prices on the @zerion_io app like I do every morning 🤓 & I notice they updated it to bulk collections together for ease of navigation. Thank you @zerion_io ❤️',
        },
    ],
    commentsAppleStore: [
        {
            name: 'Sad Francisco',
            text: 'Best Crypto App In love with this app. It’s super intuitive, and shows you portfolio specifics and even found balances on chains and staked in protocols that I had forgotten about. It also shows the floor price for your NFT collection individual and en masse and that’s super cool as well. I have a wanted exactly this app for so long but just didn’t know it already existed.',
        },
        {
            name: 'lonesound',
            text: 'Wonderful App! I’m new to crypto but I have to admit, this particular app is really quite diverse and extremely simple to use.',
        },
        {
            name: 'iloox',
            text: 'Awesome App! Puts all my coins in one place. Includes my staked coins and tokens and also my NFTs. Complete package! Must have if you have spread out crypto',
        },
    ],
    commentsType: 'twitter',

    setCommentsType: (type) => {
        set(() => ({
            commentsType: type,
        }))
    },
})));
