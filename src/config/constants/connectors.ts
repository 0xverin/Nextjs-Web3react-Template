import { InjectedConnector } from "@web3-react/injected-connector";
// import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
// import { WalletLinkConnector } from "@web3-react/walletlink-connector";

const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 97, 56],
});

// const walletconnect = new WalletConnectConnector({
//   rpc: { 1: process.env.NEXT_PUBLIC_RPCURL || "" },
//   bridge: "https://bridge.walletconnect.org",
//   qrcode: true,
// });

// const walletlink = new WalletLinkConnector({
//   url: `https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161`,
//   appName: "web3-react-demo",
// });

interface Connectors {
  [key: string]: any;
}

export const connectors: Connectors = {
  injected: injected,
  // walletconnect: walletconnect,
  //   coinbaseWallet: walletlink,
};
