import { getUserPosts } from "@/lib/actions"
import { UserProfile } from "@/common.types"
import ProfilePage from "@/components/ProfilePage"

type Props = {
  params: {
    id: string,
  }
}

const Profile = async ({ params }: Props) => {
  const result = await getUserPosts(params.id, 100) as { user: UserProfile }

  if(!result?.user){
    return <p className="no-result-text">Failed to fetch user info</p>
  }
  return (
    <ProfilePage user={result?.user} />
  )
}

export default Profile