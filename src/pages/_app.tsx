import { ThirdwebProvider } from '@3rdweb/react';
import { ChakraProvider } from '@chakra-ui/react';
import { ConnectionProvider } from '@solana/wallet-adapter-react';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { GuildContext } from '../utils/contexts/GuldContext';
import '../utils/styles/globals.scss';
import { AppPropsWithLayout, Guild } from '../utils/types';
import { MoralisProvider } from "react-moralis";


function MyApp({ Component, pageProps }: AppPropsWithLayout<any>) {
  const [guild, setGuild] = useState<Guild>();
  const getLayout = Component.getLayout ?? ((page)=> page);
  const supportedChainIds = [1, 4];
  const connectors = {injected: {}};    
  const endpoint = "https://ssc-dao.genesysgo.net";
  const WalletProvider = dynamic(
      () => import("./ClientWalletProvider"),
      {
        ssr: false,
      }
    );

    
  
  //return getLayout(<Component {...pageProps} />)
  return (
    <MoralisProvider serverUrl="https://68nyed7hmbp5.usemoralis.com:2053/server" appId="nntLH1oMqkzZoDsrRzzBFW7jZOIWNilOrQnNhNgw">
    <ThirdwebProvider supportedChainIds={supportedChainIds} connectors={connectors}>
      <ConnectionProvider endpoint={endpoint}>
      <WalletProvider>
      <ChakraProvider>
  <GuildContext.Provider value={{ guild, setGuild }}>
    {getLayout(<Component {...pageProps} />)}
  </GuildContext.Provider>
  </ChakraProvider>
    </WalletProvider>
    </ConnectionProvider>
  </ThirdwebProvider>
  </MoralisProvider>
  );
}

export default MyApp;
