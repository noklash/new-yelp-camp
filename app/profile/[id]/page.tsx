import { getUserPosts } from "@/lib/actions"
import { UserProfile } from "@/common.types"

type Props = {
  params: {
    id: string,
  }
}

const Profile = async ({ params }: Props) => {
  const result = await getUserPosts(params.id, 100) 
  return (
    <div className=''>
      {
        result?.posts?.edges?.map(
        )
      }
    </div>
  )
}

export default Profile