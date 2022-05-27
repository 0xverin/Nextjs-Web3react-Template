import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { Web3ReactContextInterface } from "@web3-react/core/dist/types";
import { NetworkContextName } from "config/index";

export function useActiveWeb3React(): Web3ReactContextInterface<Web3Provider> {
  const context = useWeb3React<Web3Provider>();
  const contextNetwork = useWeb3React<Web3Provider>(NetworkContextName);

  return context.active ? { ...context } : { ...contextNetwork };
}
