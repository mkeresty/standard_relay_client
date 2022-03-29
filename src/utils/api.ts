import { GetServerSidePropsContext } from "next"
import axios from 'axios';
import { validateCookies } from "./helpers";
const API_URL = 'http://localhost:3001/api';
import { Guild } from './types'; 

export const fetchtest = async () => {
    console.log("api test");

    return fetch(`${API_URL}/auth/tester`);

};

export const fetchme = async (context: GetServerSidePropsContext)=> {
    console.log("fetching me.........");
    const headers = validateCookies(context);
    //if (!headers) return { redirect: {destination: '/' } };
    try{
        const me = await axios.get(`${API_URL}/guilds/test`);
        console.log(me);

    } catch(err){
        console.log(err);
        return { redirect: {destination: '/' } };


    }
};
export const fetchMutualGuilds = async (context: GetServerSidePropsContext)=> {
    const headers = validateCookies(context);
    if (!headers) return { redirect: {destination: '/' } };
    try{
        const { data: guilds } = await axios.get<Guild[]>(`${API_URL}/guilds`, { headers,
         });
        console.log(guilds);
        return { props: { guilds } };

    } catch(err){
        console.log(err);
        return { redirect: {destination: '/' } };


    }
};


export const fetchGuild = async (ctx: GetServerSidePropsContext)=> {
    const headers = validateCookies(ctx);
    if (!headers) return { redirect: {destination: '/' } };
    try{
        const { data: guild } = await axios.get<Guild>(`${API_URL}/guilds/${ctx.query.id}`, { headers,
        });
        console.log(guild);
        return {props: { guild } };
    } catch (err) {
        console.log(err);
        return { redirect: {destination: '/' } };


    }

};



export const fetchValidGuild = (id: string, headers: HeadersInit) => {
    return fetch(`${API_URL}/guilds/${id}/permissions`, {
        headers,
    });
};
