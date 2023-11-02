export const createPostMutation = `
	mutation CreatePost($input: PostCreateInput!) {
		postCreate(input: $input) {
			post {
				id
				title
				description
				createdBy {
					email
					name
				}
			}
		}
	}
`;

export const updatePostMutation = `
	mutation UpdatePost($id: ID!, $input: PostUpdateInput!) {
		postUpdate(by: { id: $id }, input: $input) {
			post {
				id
				title
				description
				createdBy {
					email
					name
				}
			}
		}
	}
`;

export const deletePostMutation = `
  mutation DeletePost($id: ID!) {
    postDelete(by: { id: $id }) {
      deletedId
    }
  }
`;
      
export const createUserMutation = `
	mutation CreateUser($input: UserCreateInput!) {
		userCreate(input: $input) {
			user {
				name
				email
				avatarUrl
				description
				id
			}
		}
	}
`;

const postSearchFields = 
`
query postSearch( $endcursor: String){
  postSearch(first: 2, after: $endcursor) {
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      node {
        title
        price
        description
        website
        id
        image
        country
        createdBy {
          id
          email
          name
          avatarUrl
        }
      }
    }
  }
}


`

export const postsQuery = postSearchFields
  
   

export const postsQueryAll = postSearchFields


export const getAllPostsQuery = `
query getAllPosts($endcursor: String) {
  postCollection(first: 8, after: $endcursor) {
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      node {
        id
        title
        description
        website
        image
        country
        createdBy {
          id
          email
          name
          avatarUrl
        }
      }
    }
  }
}
`;

export const getPostByIdQuery = `
  query GetPostById($id: ID!) {
    post(by: { id: $id }) {
      id
      title
      description
      image
      website
      country
      createdBy {
        id
        name
        email
        avatarUrl
      }
    }
  }
`;

export const getUserQuery = `
  query GetUser($email: String!) {
    user(by: { email: $email }) {
      id
      name
      email
      avatarUrl
      description
    }
  }
`;

// user_01HCJS5C2Z4X48W4FDV0Z1ZRFD
      
export const getPostsOfUserQuery = `
  query getUserPosts($id: ID!, $last: Int = 4) {
    user(by: { id: $id }) {
      id
      name
      email
      description
      avatarUrl
      posts(last: $last) {
        edges {
          node {
            id
            title
            image
          }
        }
      }
    }
  }
`;