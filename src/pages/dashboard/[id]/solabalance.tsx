import { ReactElement } from "react";
import { useWallet } from '@solana/wallet-adapter-react';
import React, { FC, useEffect } from 'react';


export const help2 = () => {
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

  export default help2;