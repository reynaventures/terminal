import React from 'react';
import style from './FAQs.module.scss';
import Accordion from '../../Accordion/Accordion';

function FAQs() {
    return (
        <div className={style.FAQs}>
            <div className={style.FAQs__block}>
                <h2 className={style.FAQs__title}>FAQ</h2>
                <Accordion
                    title="Is Reyna Wallet safe?"
                    text={`Reyna Wallet is a non-custodial cryptocurrency wallet that secure open source technologies and lets you stay in control of your private keys and seedphrase. 

                    Instead of acting as custodian for your crypto (like exchanges do), Zerion Wallet stores your private keys locally on your device and not on a central server. And your crypto assets are stored on the blockchain. You can access the assets using the private keys that are encrypted and safely stored on your phone. 

                    This is arguably the safest way to hold crypto — hackers won’t even know that you have assets in a Zerion Wallet (unless of course you talk about it online). Even the Zerion team doesn’t know who you are and which crypto address belongs to you. 

                    The smart contracts that Reyna Wallet uses were independently audited by Trail of Bits and Vulners. These smart contracts have safely processed over $1.2 billion in crypto transactions.`}
                />
                <Accordion
                    title="How do I transfer money to Reyna crypto wallet?"
                    text={`You can send assets from any crypto exchange or a crypto wallet app. To transfer crypto from an exchange, click withdraw in your exchange or ‘send’ in your and wallet app and enter the address of your Zerion crypto wallet. 

                    You can also buy crypto in Zerion Wallet: just tap the blue button in the center of your screen, select ‘Buy’, and you will be taken to the dialogue window where you can buy crypto with a credit or debit card. 

                    Please note that you will not be able to transfer crypto from Revolut, PayPal or a similar neobank that does not offer crypto withdrawals.`}
                />
                <Accordion
                    title="Can I create wallets for different chains in Reyna Wallet?"
                    text={`A wallet created with Zerion Wallet automatically works with all supported networks that are compatible with Ethereum. This includes Arbitrum, Binance Smart Chain, Polygon, Optimism, Fantom and more.`}
                />
                <Accordion
                    title="Can I make money with Reyna Wallet?"
                    text={`Zerion Wallet is a non-custodial wallet for crypto that gives you access to a broad range of opportunities across DeFi and NFTs. 

                    With Zerion Wallet you can easily lend out your cryptocurrency and generate a yield. You can also provide liquidity and earn trading fees. In some protocols you can write options and earn premiums. Your Zerion Wallet will track all these positions and neatly show you your rewards.  

                    You can also trade tokens in your Zerion crypto wallet, automatically sourcing the best price from across various decentralized exchanges. Your Zerion Wallet will calculate your costs and profits.`}
                />
                <Accordion
                    title="How does trading work with Reyna crypto wallet?"
                    text={`Zerion Wallet automatically sources the best cryptocurrency prices from across different decentralized exchanges (DEXes) such as Uniswap, 1Inch, Balancer, or Sushiswap. 

                    This is done using DeFi SDK, the open-source library developed by Zerion to integrate with leading DeFi protocols. In practice, when swapping tokens in Zerion Wallet, you’ll get the best price that is currently available on various DEXes.`}
                />
                <Accordion
                    title="Does Reyna offer DeFi portfolio tracker and where to find it?"
                    text={`Yes, Zerion Wallet offers a built-in DeFi portfolio tracker, which automatically finds and tracks all your DeFi positions, debts, and rewards. 

                    You can find all your DeFi portfolio by tapping the ‘Tokens’ section and then changing the layout to ‘By Platform’ to arrange your assets by protocol. Zerion integrated DeFi tracking for over 500 protocols so it’s very likely that your DeFi assets will be tracked.`}
                />
                <Accordion
                    title="What is the best free crypto portfolio tracker?"
                    text={`The best crypto portfolio tracking depends on what exactly you need to track. 

                    Zerion Wallet offers a free portfolio tracker for DeFi and NFTs: it automatically finds and tracks all your tokens. However, this only works for non-custodial wallets, and Zerion will not be able to show assets you own on centralized exchanges.`}
                />
                <Accordion
                    title="How do I track my DeFi coins?"
                    text={`Zerion Wallet automatically tracks all DeFi coins you own. There is no need to add any token or coin manually, they will all show up in the ‘Tokens’ section of your wallet. To see how DeFi tracking works with Zerion, you can first connect your existing wallet and Zerion will automatically track DeFi coins. 

                    Zerion crypto wallet tracks all major coins listed on Coingecko as well as any other ERC-20 (for new assets you might see a warning and would need to double check the coin’s smart contract).`}
                />
                <Accordion
                    title="How to track staked DeFi tokens, LPs, and rewards?"
                    text={`In Reyna Wallet, staked tokens, LPs, rewards, debts, and other DeFi positions are automatically tracked. Zerion Wallet’s built-in DeFi tracker can be found in the ‘Tokens’ section of your wallet. 

                    If your DeFi positions have any earned and unclaimed rewards, Zerion Wallet will list them in your DeFi dashboard. If you see that, you can go ahead and claim those rewards in the protocol.`}
                />
                <Accordion
                    title="Can Reyna crypto wallet hold Bitcoin?"
                    text={`Zerion Wallet currently does not support Bitcoin. However, you can buy WBTC or wrapped Bitcoin. These are ERC-20 tokens that represent locked BTC and closely track the price of Bitcoin.`}
                />
            </div>
        </div>
    )
}

export default FAQs;