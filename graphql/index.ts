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

const postSearchFields = `
type Query {
  postSearch(first: Int, after: String): PostConnection
}

type PostConnection {
  pageInfo: PageInfo
  edges: [PostEdge]
}

type PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor: String
  endCursor: String
}

type PostEdge {
  node: Post
}

type Post {
  title: String
  price: Float
  description: String
  website: String
  id: ID
  image: String
  country: String
  createdBy: User
}

type User {
  id: ID
  email: String
  name: String
  avatarUrl: String
}

`

export const postsQuery = `
  query getAllPosts( $endcursor: String) {
    ${postSearchFields}
  }
`;

export const postsQueryAll = `
query getPosts($endcursor: String){
  ${postSearchFields}
}
`;

export const getAllPostsQuery = `
  query getAllPosts( $endcursor: String) {
    postCollection(first: 8 ) {
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
`;

export const getPostByIdQuery = `
  query GetPostById($id: ID!) {
    post(by: { id: $id }) {
      id
      title
      description
      image
      website
      price
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