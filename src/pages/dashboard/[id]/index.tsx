import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next"
import { ReactElement, useContext, useEffect } from "react";
import { DashboardLayout } from "../../../components/layouts/dashboard";
import { Guild, NextPageWithLayout } from "../../../utils/types";
import { ChakraProvider } from '@chakra-ui/react'
import { useWeb3 } from "@3rdweb/hooks" 
import { ThirdwebProvider } from "@3rdweb/react";
import dynamic from "next/dynamic";
import { ConnectionProvider } from "@solana/wallet-adapter-react";
import { fetchGuild } from "../../../utils/api";
import { GuildContext } from "../../../utils/contexts/GuldContext";

type Props = {
  guild: Guild;
};



const DashboardPage: NextPageWithLayout<Props> = ({ guild }) => {
  const supportedChainIds = [1, 4];
  const connectors = {injected: {}};    
  const { setGuild } = useContext(GuildContext);
  useEffect(() => {
      console.log(guild);
      setGuild(guild);
    }, []);
    return(

        <div className="page">{guild.name}</div>


        
        
    )
};

DashboardPage.getLayout = function (page: ReactElement) {
    const supportedChainIds = [1, 4];
    const connectors = {injected: {}};    
    return( 


    <DashboardLayout>{page}</DashboardLayout>

    )
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return fetchGuild(ctx);
}

export default DashboardPage;