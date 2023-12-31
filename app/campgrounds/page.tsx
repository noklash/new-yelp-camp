import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link';

import { PostInterface } from "@/common.types"
import PostCard from "@/components/PostCard"
// import LoadMore from "@/components/LoadMore";
import { fetchAllPosts, getUserPosts } from "@/lib/actions";

type SearchParams = {
  endcursor?: string | null
}

type Props = {
  searchParams: SearchParams
}

type PostSearch = {
  postCollection: {
    edges: { node: PostInterface }[];
    pageInfo: {
      hasPreviousPage: boolean;
      hasNextPage: boolean;
      startCursor: string;
      endCursor: string;

    };
  }
}



export const dynamic = "force-dynamic";
export const dynamicParams = true;
export const revalidate = 0;




const campgrounds = async ({ searchParams: { endcursor} }: Props ) => {
  const data = await fetchAllPosts(endcursor) as PostSearch
  // const data = await getUserPosts(id)
  // console.log(`data is: ${data}`)

  const postsToDisplay = data?.postCollection?.edges || []
  const reversePosts = postsToDisplay.reverse()
  console.log(postsToDisplay)

  if (postsToDisplay.length === 0){
    return (
      <section className='flexStart flex-col paddings'>
        <p className='no-result-text text-center'>No posts found go create some</p>
      </section>
    )
  }

  return (
    <section className='projects-grid py-20 px-8'> 
      {reversePosts.map(({ node }: { node: PostInterface}) => (
        <PostCard
          key={`${node.id}`}
          id={node?.id}
          image={node?.image}
          title={node?.title}
          name={node?.createdBy.name}
          avatarUrl={node?.createdBy.avatarUrl}
          userId={node?.createdBy.id}
        />
      ))}

    </section>

  )
  
}

export default campgrounds