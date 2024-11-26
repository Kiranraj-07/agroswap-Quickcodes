import { BrowserRouter,Routes,Route } from "react-router-dom";
import Swap from "./Swap";
import Landing from "./Landing";
import { ContractProvider } from './providers/Contract';
import { AgoricProvider } from '@agoric/react-components';
import MintNFT from "./Nftmint";
import { wallets } from 'cosmos-kit';
import Marketplace from "./Marketplace";

function App() {
  return (
    <BrowserRouter>
    <AgoricProvider
          // @ts-expect-error XXX _chainWalletMap' is protected but type 'MainWalletBase' is not a class derived from 'MainWalletBase
          wallets={wallets.extension}
          agoricNetworkConfigs={[
            {
              testChain: {
                chainId: 'agoriclocal',
                chainName: 'agoric-local',
                iconUrl: 'agoric.svg', // Optional icon for dropdown display
              },
              apis: {
                rest: ['http://localhost:1317'],
                rpc: ['http://localhost:26657'],
              },
            },
            {
              testChain: {
                chainId: 'agoric-emerynet-8',
                chainName: 'emerynet',
                iconUrl: 'agoric.svg',
              },
              apis: {
                rest: ['https://emerynet.api.agoric.net'],
                rpc: ['https://emerynet.rpc.agoric.net'],
              },
            },
          ]}
          defaultChainName="agoric-local"
        >
          <ContractProvider>
      <div>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/swap" element={<Swap/>}/>
          <Route path="/mint" element={<MintNFT/>}/>
          <Route path="/market" element={<Marketplace/>} />
        </Routes>
      </div>
      </ContractProvider>
        </AgoricProvider>
    </BrowserRouter>
  )
}

export default App