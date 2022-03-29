import { useWeb3, useSwitchNetwork } from "@3rdweb/hooks" 
import styles from './index.module.scss'
import { RiMenu3Line } from 'react-icons/ri';
import { useRouter } from 'next/router';
import { HiChevronDown } from 'react-icons/hi'
import { IoMdWallet } from 'react-icons/io'
import dynamic from 'next/dynamic'
import { FC, useState } from "react";
import { getWalletAdapters } from "@solana/wallet-adapter-wallets";


import {
    Box,
    Button,
    Container,
    Flex,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
  } from '@chakra-ui/react'
import ConnectToPhantom from "./MyWallet";

import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Guild } from "../../utils/types";
import { GuildContext } from "../../utils/contexts/GuldContext";
/////


type Props = {
  guild?: Guild;
};


  const NetworkMetadata = (props: {
    icon: React.ComponentType | string
    chainName: string
    symbol: string
    isTestnet: boolean
  }) => {
    const { chainName } = props
    if (!props || !chainName) {
      return <></>
    }
    const { icon, symbol, isTestnet } = props
  
    const ChainIconElement = icon
    const iconSize = symbol === 'MATIC' ? 5 : 3
  
    return (
      <Flex gap={2}>
        <Box w={iconSize} h={iconSize}>
          <ChainIconElement />
        </Box>
        <Text>{chainName}</Text>
        {isTestnet && <Text color="grey">(testnet)</Text>}
      </Flex>
    )
  }
  

  const Chains = () => {
    return 
    <Menu>
      <MenuButton color="black" background-color="purple" colorScheme="purple" minH={10} as={Button}>
      <MenuList>
      <MenuItem>
      <CustomConnect/>
      </MenuItem>
      <MenuItem>
      <div><WalletMultiButton /></div>
      </MenuItem>
      </MenuList>
      </MenuButton>
    </Menu>
  }

function getaddy(addy: string) {

}

  export const CustomConnect = () => {
    const web3 = useWeb3()
  
    const {
      address,
      chainId,
      connectWallet,
      disconnectWallet,
      getNetworkMetadata,
    } = web3
    const { switchNetwork } = useSwitchNetwork()
    console.log({ address} );
    
    
    
    let networkMetadata = null
  
    if (chainId) {
      networkMetadata = getNetworkMetadata(chainId);
      
    }
    
    // If a wallet is connected, show disconnect and switch network options
    return ( 
      <>
        {address ? 
        
        (        
          <Menu>
            <MenuButton color="black" background-color="purple" colorScheme="purple" minH={10} as={Button} rightIcon={<HiChevronDown />}>
              {networkMetadata && <NetworkMetadata {...networkMetadata} />}
            </MenuButton>
            
            <MenuList justifyContent="center">
              <MenuItem justifyContent="center" color="black" onClick={() => switchNetwork(80001)}>
                Switch to Polygon Mumbai
              </MenuItem>
              <MenuItem justifyContent="center" color="black" onClick={() => switchNetwork(4)}>
                Switch to Rinkeby
              </MenuItem>
              <MenuItem justifyContent="center" color="black" onClick={disconnectWallet}>Switch Wallet</MenuItem>
              <MenuItem justifyContent="center" color="purple">{address}</MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <>
            <Button
              onClick={() => connectWallet('injected')}
              leftIcon={<IoMdWallet />}
              colorScheme="purple"
            >
              Connect MetaMask
            </Button>
          </>
        )}
      </>
    )
  }


export const Appbar: FC<Props> = ({ guild })=> {
    const router = useRouter();

    return (

        <div className={styles.appbar}>
            <div className={styles.menu} onClick={() => router.push('/menu')}>
                <RiMenu3Line size={65}/>
                <p>Menu</p>
            </div>
            <div>
                <p>
                  {guild?.name}
                </p>
            </div>
            <div>
                <p> </p>
            </div>
            <div><WalletMultiButton /></div>
            <div color="purple" >
                {/* <CustomConnect /> */}
                {/* <button onClick={() => connectWallet('injected')}> Connect Wallet </button> */}
                <Container colorScheme="purple" background-color="purple" maxW="container.md">
                    <Flex background-color="purple" flexDirection="column" w="100%" h="100%">
                        <Flex background-color="purple" justifyContent="flex-end" m={5}>
                            <CustomConnect />
                        </Flex>
                    </Flex>
                </Container>
            </div>
        </div>
        
    );
}