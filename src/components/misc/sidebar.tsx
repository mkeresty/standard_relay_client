import Image from 'next/image';
import { MdSpaceDashboard } from 'react-icons/md';
import { BsTerminal } from 'react-icons/bs';
import { FaWrench } from 'react-icons/fa';
import { RiLogoutCircleLine } from 'react-icons/ri';
import styles from './index.module.scss';
import { useRouter } from 'next/router';
import { Guild } from '../../utils/types';
import { FC } from 'react';
import { getIcon } from '../../utils/helpers';

const routes = [
{
    name: 'dashboard',
    getPath: (id: string) => `/dashboard/${id}`,
    icon: <MdSpaceDashboard size={48} />
},
{
    name: 'commands',
    getPath: (id: string) => `/dashboard/${id}/commands`,
    icon: <BsTerminal size={48} />
},
{
    name: 'settings',
    getPath: (id: string) => `/dashboard/${id}/settings`,
    icon: <FaWrench size={48} />
},
{
    name: 'balance',
    getPath: (id: string) => `/dashboard/${id}/balance`,
    icon: <FaWrench size={48} />
},
];

type Props = {
    guild?: Guild;
}

export const Sidebar: FC<Props> = ({ guild }) => {
    const router = useRouter();
    return (

        <div className={styles.sidebar}>
            <Image className={styles.avatar} src={getIcon(guild)} height={80} width={80} alt="guild_avatar" />
            <div className={styles.icons}>
                {routes.map((route)=> (
                <div key={route.name} onClick={() => router.push(route.getPath(router.query?.id!.toString()))}>
                    {route.icon}
                </div>))}
                {/* <div>
                    <MdSpaceDashboard size={48} />
                </div>
                <div>
                    <BsTerminal size={48} />
                </div>
                <div>
                    <FaWrench size={48} />
                </div> */}
            </div>
            <div>
                <RiLogoutCircleLine size={48}/>
            </div>
        </div>
    );
}