"use client"

import { getProviders, signIn } from 'next-auth/react';
import React, { useEffect, useState } from 'react'
import Link from "next/link"

import Button from './Button';

type Provider = {
    id: string;
    name: string;
    type: string;
    signinUrl: string;
    callbackUrl: string;
    signinUrlParams?: Record<string, string> | undefined;
  };
  
  type Providers = Record<string, Provider>;


const AuthProviders = () => {
    const [providers, setProviders] = useState<Providers | null>(null);

    useEffect(() => {
        const fetchProviders = async () => {
            const res = await getProviders();
    
            setProviders(res);
        }

        fetchProviders();
    }, []);

    if (providers) {
        return (
            <>
                {/* {Object.values(providers).map((provider: Provider, i) => (
                    <Button key={i} title='Sign In' handleClick={() => signIn("github")} />
                ))} */}
                <Link href="/api/auth/signin" className="btnn hover:bg-white hover:text-black text-center py-2 font-bold">Sign In</Link>
            </>
        )
    }
}

export default AuthProviders