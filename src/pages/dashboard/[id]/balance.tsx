import React, {useEffect} from 'react';
import { ReactElement } from "react";
import { DashboardLayout } from "../../../components/layouts/dashboard";
import { Guild, NextPageWithLayout } from "../../../utils/types";
import styles from './index.module.scss';
import { Button, Grid, GridItem, Stack } from '@chakra-ui/react'

import { IoMdWallet } from 'react-icons/io';
import { FaEthereum } from "react-icons/fa";
import { SiBinance } from 'react-icons/si';
import { Icon } from '@iconify/react';
import { useWeb3 } from "@3rdweb/hooks";

import { ThirdwebProvider, ConnectWallet } from '@3rdweb/react';

import { CustomConnect } from "../../../components/misc/Appbar";
import { useConnection, useWallet } from '@solana/wallet-adapter-react';

import help2 from './solabalance';

function help() {
  // You can do whatever you want with this data
  const { publicKey } = useWallet();
  console.log(publicKey)

  return (
    <div>
      Address: 
      <br />
      Chain ID: 
    </div>
  );
};

type Props = {
    guild: Guild;
  };

const ethbalance = async (address: { address: string | undefined; }) => {
    const Web3 = require("web3")

    const web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/3bcaa0448d9349dc8e1dbef57e533189"))

    const bal = await web3.eth.getBalance(address.address);
    const etherValue = Web3.utils.fromWei(bal, 'ether');

    console.log(etherValue);

    //var balance = Number(web3.fromWei(bal, "ether"));
    //console.debug("Balance for address["+address+"]="+balance);

    //var balance_element = document.getElementById("balance");
    //balance_element.innerHTML = balance.valueOf();
    document.getElementById("balance").innerHTML = etherValue;
    //console.log(bal)
    return(
        etherValue
    )
};

const polybalance = async (address: { address: string | undefined; }) => {
    const Web3 = require("web3")

    const web3 = new Web3(new Web3.providers.HttpProvider("https://polygon-rpc.com/"))

    const bal = await web3.eth.getBalance(address.address);
    const polyValue = Web3.utils.fromWei(bal, 'ether');

    console.log(polyValue);

    //var balance = Number(web3.fromWei(bal, "ether"));
    //console.debug("Balance for address["+address+"]="+balance);

    //var balance_element = document.getElementById("balance");
    //balance_element.innerHTML = balance.valueOf();
    document.getElementById("balance").innerHTML = polyValue;
    //console.log(bal)
    return(
        polyValue
    )
};
    
const bscbalance = async (address: { address: string | undefined; }) => {
    const Web3 = require("web3")

    const web3 = new Web3(new Web3.providers.HttpProvider("https://bsc-dataseed1.binance.org:443"))

    const bal = await web3.eth.getBalance(address.address);
    const bscValue = Web3.utils.fromWei(bal, 'ether');

    console.log(bscValue);

    //var balance = Number(web3.fromWei(bal, "ether"));
    //console.debug("Balance for address["+address+"]="+balance);

    //var balance_element = document.getElementById("balance");
    //balance_element.innerHTML = balance.valueOf();
    document.getElementById("balance").innerHTML = bscValue;
    //console.log(bal)
    return(
        bscValue
    )
};
   
const avaxbalance = async (address: { address: string | undefined; }) => {
    const Web3 = require("web3")

    const web3 = new Web3(new Web3.providers.HttpProvider("https://api.avax-test.network/"))

    const bal = await web3.eth.getBalance(address.address);
    const avaxValue = Web3.utils.fromWei(bal, 'ether');

    console.log(avaxValue);

    //var balance = Number(web3.fromWei(bal, "ether"));
    //console.debug("Balance for address["+address+"]="+balance);

    //var balance_element = document.getElementById("balance");
    //balance_element.innerHTML = balance.valueOf();
    document.getElementById("balance").innerHTML = avaxValue;
    //console.log(bal)
    return(
        avaxValue
    )
};

const hecobalance = async (address: { address: string | undefined; }) => {
    const Web3 = require("web3")

    const web3 = new Web3(new Web3.providers.HttpProvider("https://http-mainnet.hecochain.com"))

    const bal = await web3.eth.getBalance(address.address);
    const hecoValue = Web3.utils.fromWei(bal, 'ether');

    console.log(hecoValue);

    //var balance = Number(web3.fromWei(bal, "ether"));
    //console.debug("Balance for address["+address+"]="+balance);

    //var balance_element = document.getElementById("balance");
    //balance_element.innerHTML = balance.valueOf();
    document.getElementById("balance").innerHTML = hecoValue;
    //console.log(bal)
    return(
        hecoValue
    )
};
   

const cronosbalance = async (address: { address: string | undefined; }) => {
    const Web3 = require("web3")

    const web3 = new Web3(new Web3.providers.HttpProvider("https://evm.cronos.org/"))

    const bal = await web3.eth.getBalance(address.address);
    const cronosValue = Web3.utils.fromWei(bal, 'ether');

    console.log(cronosValue);

    //var balance = Number(web3.fromWei(bal, "ether"));
    //console.debug("Balance for address["+address+"]="+balance);

    //var balance_element = document.getElementById("balance");
    //balance_element.innerHTML = balance.valueOf();
    document.getElementById("balance").innerHTML = cronosValue;
    //console.log(bal)
    return(
        cronosValue
    )
};
   

const harmbalance = async (address: { address: string | undefined; }) => {
    const Web3 = require("web3")

    const web3 = new Web3(new Web3.providers.HttpProvider("https://api.s0.t.hmny.io"))

    const bal = await web3.eth.getBalance(address.address);
    const harmValue = Web3.utils.fromWei(bal, 'ether');

    console.log(harmValue);

    //var balance = Number(web3.fromWei(bal, "ether"));
    //console.debug("Balance for address["+address+"]="+balance);

    //var balance_element = document.getElementById("balance");
    //balance_element.innerHTML = balance.valueOf();
    document.getElementById("balance").innerHTML = harmValue;
    //console.log(bal)
    return(
        harmValue
    )
};


const fantbalance = async (address: { address: string | undefined; }) => {
    const Web3 = require("web3")

    const web3 = new Web3(new Web3.providers.HttpProvider("https://rpcapi.fantom.network"))

    const bal = await web3.eth.getBalance(address.address);
    const fantValue = Web3.utils.fromWei(bal, 'ether');

    console.log(fantValue);

    //var balance = Number(web3.fromWei(bal, "ether"));
    //console.debug("Balance for address["+address+"]="+balance);

    //var balance_element = document.getElementById("balance");
    //balance_element.innerHTML = balance.valueOf();
    document.getElementById("balance").innerHTML = fantValue;
    //console.log(bal)
    return(
        fantValue
    )
};


const solbalance = async ({ publicKey }) => {

    //const web3s = useWallet();
    //const { publicKey } = web3s;
    console.log({ publicKey });

    const web3 = require("@solana/web3.js");

    const solana = new web3.Connection("https://api.mainnet-beta.solana.com");

    const bal = await solana.getBalance(publicKey);

    console.log(bal);
    const bal2 = bal / 1000000000;

    //var balance = Number(web3.fromWei(bal, "ether"));
    //console.debug("Balance for address["+address+"]="+balance);

    //var balance_element = document.getElementById("balance");
    //balance_element.innerHTML = balance.valueOf();
    document.getElementById("balance2").innerHTML = bal2;
    //console.log(bal)
    return(
        bal2
    )
};

const BalancePage: NextPageWithLayout<Props> = ({ guild }) => {
    //const { publicKey } = useWallet();
    //console.log("LOOK");
    //console.log(publicKey);
    //const { connection } = useConnection();


    const web3 = useWeb3();
    
  
    const {
      address,
      chainId,
      connectWallet,
      disconnectWallet,
      getNetworkMetadata,
    } = web3

    const address2 = { address }
    //const etherValue = ethbalance({ address });

    const web3s = useWallet();
    const { publicKey } = web3s





    return( 
    
    <div color="white" className="page">
        <div className={styles.norm} color="white" >Balance Page</div>
        <div className={styles.container} >
            Ethereum 
            <div id="balance"></div>
        <Stack direction='row' spacing={4} align='center' >
        <Button onClick={()=> ethbalance({ address })} colorScheme='teal' variant='outline' h={70} w={65}>
            <FaEthereum color="white" size={48} />
        </Button>
        <Button onClick={()=> bscbalance({ address })} colorScheme='teal' variant='outline' h={70} w={65}>
            <SiBinance color="white" size={48} />
        </Button>
        <Button onClick={()=> polybalance({ address })} colorScheme='teal' variant='outline' h={70} w={65}>
            <Icon icon="cryptocurrency:matic" color="white" height="50" />
        </Button>
        <Button onClick={()=> avaxbalance({ address })} colorScheme='teal' variant='outline' h={70} w={65}>
            <img color="white" src="/avax.svg"></img>
        </Button>
        <Button onClick={()=> hecobalance({ address })} colorScheme='teal' variant='outline' h={70} w={65}>
            <img color="white" src="/heco.svg"></img>
        </Button>
        <Button onClick={()=> cronosbalance({ address })} colorScheme='teal' variant='outline' h={70} w={65}>
            <img color="white" src="/cronos.svg"></img>
        </Button>
        <Button onClick={()=> harmbalance({ address })} colorScheme='teal' variant='outline' h={70} w={65}>
            <img color="white" src="/harmony.svg"></img>
        </Button>
        <Button onClick={()=> fantbalance({ address })} colorScheme='teal' variant='outline' h={70} w={65}>
            <img color="white" src="/fantom.svg"></img>
        </Button>
        </Stack>

        </div>
        <div className={styles.container} >
            Kusama
            <div id="balance2"></div>
        <Stack onClick={()=> solbalance({ publicKey })} direction='row' spacing={4} align='center' >
        <Button colorScheme='teal' variant='outline' h={70} w={65}>
            <Icon icon="cryptocurrency:sol" color="white" height="50" />
        </Button>
        <Button colorScheme='teal' variant='outline' h={70} w={65}>
        <img width="40" height="40"  src="/movr.svg"></img>
        </Button>
        <Button colorScheme='teal' variant='outline' h={70} w={65}>
        <img width="40" height="40"  src="/shiden.svg"></img>
        </Button>
        </Stack>
        
        </div>
        <div className={styles.container} >
            Iotex
        <Stack direction='row' spacing={4} align='center' >
        <Button colorScheme='teal' variant='outline' h={70} w={65}>
        <img width="40" height="40"  src="/iotex.svg"></img>
        </Button>
        </Stack>
        
        </div>
    </div>
    
        
    )
};

BalancePage.getLayout = function (page: ReactElement) {
    return <DashboardLayout>{page}</DashboardLayout>;
};

export default BalancePage;

function publicKey(publicKey: any) {
    throw new Error('Function not implemented.');
}
