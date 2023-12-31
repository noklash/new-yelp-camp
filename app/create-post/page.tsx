import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/session";
import Modal from "@/components/Modal";
import PostForm from "@/components/PostForm";



const CreatePost = async () => {
  const session = await getCurrentUser();

  if (!session?.user) redirect("/")
  return (
    <Modal>
      <h3 className="modal-head-text">Create Post</h3>

      <PostForm type="create" session={session} />
    </Modal>
  )
}

export default CreatePost