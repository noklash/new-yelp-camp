"use client"
import React from 'react'
import { signIn } from "next-auth/react";
import Image from 'next/image';

const SignIn = () => {
  return (
    <div className='flex gap-4 flex-col text-black'>
        <button onClick={() => signIn('google')} className="bg-white p-2 px-4 rounded-lg flex">
            <Image src="/google-circle.svg" alt='google logo' width={30} height={30} className='mr-3'/>
            Continue with Google
        </button>

        <button onClick={() => signIn('github')} className="bg-white p-2 px-4 rounded-lg flex">
            <Image src="/github-circle.svg" alt='github logo' width={30} height={30} className='mr-3'/>
            Continue with Github
        </button>
    </div>
  )
}

export default SignIn