import { defineChain } from "viem/utils";
import { chainConfig } from "viem/zksync";

// TODO: temporary fix, PR: https://github.com/wevm/viem/pull/3135
export const cronoszkEVMTestnet = defineChain({
  ...chainConfig,
  id: 240,
  name: "Cronos zkEVM Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Cronos zkEVM Test Coin",
    symbol: "zkTCRO",
  },
  rpcUrls: {
    default: { http: ["https://testnet.zkevm.cronos.org"] },
  },
  blockExplorers: {
    default: {
      name: "Cronos zkEVM Testnet Explorer",
      url: "https://explorer.zkevm.cronos.org/testnet",
    },
    native: {
      name: "Cronos zkEVM Testnet Explorer",
      url: "https://explorer.zkevm.cronos.org/testnet",
    },
  },
  testnet: true,
});

export const cronosZKEVMMainnet = defineChain({
  ...chainConfig,
  id: 388,
  name: "Cronos zkEVM",
  nativeCurrency: {
    decimals: 18,
    name: "Cronos zkEVM Coin",
    symbol: "zkCRO",
  },
  rpcUrls: {
    default: { http: ["https://seed.zkevm.cronos.org/"] },
  },
  blockExplorers: {
    default: {
      name: "Cronos zkEVM Explorer",
      url: "https://explorer.zkevm.cronos.org",
    },
    native: {
      name: "Cronos zkEVM Explorer",
      url: "https://explorer.zkevm.cronos.org",
    },
  },
  testnet: false,
});
