"use client"

import Link from "next/link";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";

import { SessionInterface } from "@/common.types";

const ProfileMenu = ({ session }: { session: SessionInterface }) => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="flexCenter z-10 flex-col relative">
            {/* <Menu as="div"> */}
            <div>
                <div className="flexCenter" onMouseEnter={() => setOpenModal(true)}>
                    {session?.user?.image && (
                        <Image
                            src={session.user.image}
                            width={40}
                            height={40}
                            className="rounded-full"
                            alt="user profile image"
                        />

                    )}
                </div>

                { openModal &&
                    <div
                        className="flexStart profile_menu-items mt-0 absolute overlay px-4  bg-white shadow shadow-black flex flex-col rounded"
                        onMouseLeave={() => setOpenModal(false)}
                    >
                        <div className="flex items-center gap-x-4">
                            {session?.user?.image && (
                                <Image
                                    src={session?.user?.image}
                                    className="rounded-full pt-2"
                                    width={60}
                                    height={60}
                                    alt="profile Image"
                                />
                            )}
                            <p className="font-semibold">{session?.user?.name}</p>
                        </div>

                        <div className="flex flex-col gap-2 pt-2 items-start w-full">
                            <div>
                                <Link href={`/profile/${session?.user?.id}`} className="text-sm">Preferences</Link>
                            </div>
                            <div>
                                <Link href={`/profile/${session?.user?.id}`} className="text-sm">Settings</Link>
                            </div>
                            <div>
                                <Link href={`/profile/${session?.user?.id}`} className="text-sm">Profile</Link>
                            </div>
                        </div>
                        <div className="w-full flexStart border-t border-nav-border mt-5 pt-5">
                            <div>
                                <button type="button" className="text-sm pb-4" onClick={() => signOut()}>
                                    Sign out
                                </button>
                            </div>
                        </div>
                    </div>
                    }
                {/* </Transition> */}
            {/* </Menu> */}
            </div>
        </div>
    )
}

export default ProfileMenu