import Image from "next/image";
import Link from "next/link";

import { getCurrentUser } from "@/lib/session";
import Modal from "@/components/Modal";
import { getPostDetails } from "@/lib/actions";
import { PostInterface } from "@/common.types";

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
                        
                    </div>
                </div>
            </section>
        </Modal>

    )
}

