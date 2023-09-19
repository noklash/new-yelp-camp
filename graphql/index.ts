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
				githubUrl
				linkedinUrl
				id
			}
		}
	}
`;

export const postsQuery = `
  query getPosts($category: String, $endcursor: String) {
    postSearch(first: 8, after: $endcursor, filter: {category: {eq: $category}}) {
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
      facebookUrl
      linkedinUrl
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
      facebookUrl
      linkedinUrl
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