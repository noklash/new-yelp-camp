import { PostInterface, UserProfile } from "@/common.types"
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import PostCard from "./PostCard";


type Props = {
    user: UserProfile
}
const ProfilePage = ({ user }: Props) => (
    <section className="flexCenter flex-col max-w-10xl w-full mx-auto paddings my-14 pt-8 pb-4">
        <section className="flexBetween max-lg:flex-col gap-10 w-full">
            <div className="flex items-start flex-col w-full">
                
                    <Image 
                        src={user?.avatarUrl} 
                        width={100}
                        height={100}
                        className="rounded-full"
                        alt="user image"
                    />

                <p className="text-2xl font-bold mt-4 capitalize">{user?.name}</p>
                
                <p className=" text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam quo libero in itaque ipsum. Eius.</p>
            </div>
            {user?.posts?.edges?.length > 0 ? (
                // <Image
                //     src={user?.posts?.edges[0]?.node?.image}
                //     alt="post image"
                //     width={400}
                //     height={554}
                //     className="rounded-xl object-contain"
                //  />
                <p></p>
            ) : (
                <Image
                    src="/profile-post.png"
                    width={400}
                    height={554}
                    alt="project image"
                    className="rounded-xl"
                />
            )}
        </section>

        <section className="flexStart flex-col lg:mt-28 mt-16 w-full">
            <p className="w-full text-left text-lg font-semibold">Posts</p>

            <div className="profile_projects">
                {user?.posts?.edges?.map(
                    ({ node }: { node: PostInterface }) => (
                        <PostCard
                            key={`${node?.id}`}
                            id={node?.id}
                            image={node?.image}
                            title={node?.title}
                            name={user.name}
                            avatarUrl={user.avatarUrl}
                            userId={user.id}
                        />

                    )
                )}
            </div>
        </section>
    </section>
)

export default ProfilePage