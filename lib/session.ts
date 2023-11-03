import { getServerSession } from "next-auth";
import { NextAuthOptions } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github"
import jsonweboken from "jsonwebtoken";
import { JWT } from "next-auth/jwt";

import { User } from "next-auth";

import { createUser, getUser } from "./actions";
import { SessionInterface, UserProfile } from "@/common.types";

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),

        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!
        })

    ],
    jwt: {
        encode: ({ secret, token }) => {
            const encodedToken = jsonweboken.sign(
                {
                    ...token,
                    iss: "grafbase",
                    exp: Math.floor(Date.now() / 1000) + 60 *60,
                },
                secret
            );

            return encodedToken;
        }, 
        decode: async ({ secret, token }) => {
            const decodedToken = jsonweboken. verify(token!, secret);
            return decodedToken as JWT;
        },
    },
    theme: {
        colorScheme: "dark",
        logo: "/discoveryy.svg",
    }, 
    callbacks: {
        async session({ session }) {
            const email = session?.user?.email as string;


            try {
                const data = await getUser(email) as { user?: UserProfile }

                const newSession = {
                    ...session,
                    user: {
                        ...session.user,
                        ...data?.user,
                    },
                };

                return newSession;
            } catch (error: any){
                console.error("Error retrieving user data: ", error.message);
                return session;
            }
        },
        // from here
        async signIn({ user}: {
            user: AdapterUser | User
        }) {
            try {
                const userExists = await getUser(user?.email as string) as { user?: UserProfile }

                if (!userExists.user){
                    await createUser(user.name as string, user.email as string, user.image as string)
                }

                return true;            
            }  catch (error: any){
                console.log("Error checking if user exists: ", error.message);
                return false;
            }
        }
        // here
    }
}

export async function getCurrentUser(){
    const session = await getServerSession(authOptions) as SessionInterface;

    return session;
}