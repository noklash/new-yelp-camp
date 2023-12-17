import Image from "next/image";
import Link from "next/link";

import { getCurrentUser } from "@/lib/session";
import Modal from "@/components/Modal";
import { getPostDetails } from "@/lib/actions";
import { PostInterface } from "@/common.types";
import PostDescription from "@/components/PostDescription";



const Post = async ({ params: { id } }: { params: { id: string } }) => {
    const session = await getCurrentUser()
    const result = await getPostDetails(id) as { post?: PostInterface }

    if (!result?.post) return (
        <p className="no-result-text">Failed to fetch post info</p>
    )

    const postDetails = result?.post

    const renderLink = () => `/profile/${postDetails?.createdBy?.id}`

    return (
        <Modal>
            <section className="flexBetween gap-y-8 max-w-4xl max-xs:flex-col w-full">
                <div className="flex-1 flex items-start gap-5 w-full max-xs:flex-col">
                    <Link href={renderLink()}>
                        <Image
                            src={postDetails?.createdBy?.avatarUrl}
                            width={50}
                            height={50}
                            alt="profile"
                            className="rounded-full"
                        />
                    </Link>

                        

                    <div className="flex-1 flexStart flex-col gap-1">
                        <p className="self-start text-lg font-semibold">
                            {postDetails?.title}
                        </p>

                        <div className="user-info">
                            <Link href={renderLink()}>
                                {postDetails?.createdBy?.name}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {session?.user.email === postDetails?.createdBy?.email && (
                <div className="flex justify-end items-center gap-2">
                    {/* <PostActions postId={postDetails?.id}/> */}
                </div>
            )}

            <section className="mt-14">
                <Image
                    src={`${postDetails?.image}`}
                    className="object-cover rounded-2xl"
                    width={1064}
                    height={798}
                    alt="poster"
                />
            </section>

                

            <section className="flexCenter flex-col mt-5">
                
                 <PostDescription text={postDetails?.description} />
                

                {/* <div className="flex flex-wrap mt-5 gap-5">
                            <Link href={postDetails?.website} target="_blank" rel="noreferrer" className="flexCenter gap-2 text-sm font-medium text-primary-purple">
                                <span className="underline">Website</span>
                            </Link>
                </div> */}
            </section>
        </Modal>

    )
}

export default Post