import { GetServerSidePropsContext, NextPage } from "next";
import { useRouter } from "next/router";
import { GuildMenuItem } from "../../components/guilds/GuildMenuItem";
import { fetchme, fetchMutualGuilds } from "../../utils/api";
import { Guild } from "../../utils/types";
import styles from './index.module.scss';

type Props = {
    guilds: Guild[];
};

const MenuPage: NextPage<Props> = ({ guilds })=> {
    const router = useRouter();

    return (
        <div className="page">
            <div className={styles.containter}>
                <h1>Please select a guild</h1>
                {guilds.map((guild) => (
                    <div key={guild.id} onClick={() => router.push(`/dashboard/${guild.id}`)}><GuildMenuItem guild={guild}/>    
                    </div>
                ))}
            </div>
        </div>
    );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
    return( 
        fetchMutualGuilds(context)
        //fetchme(context)
    );
}

export default MenuPage;