

import { config, connector, g, auth } from '@grafbase/sdk'

const mongodb = connector.MongoDB('MongoDB', {
  url: g.env("MONGODB_API_URL"),
  apiKey: g.env("MONGODB_API_KEY"),
  dataSource: g.env("MONGODB_DATASOURCE"),
  database: g.env("MONGODB_DATABASE")
})



// @ts-ignore
// const User = 


const post = g.type('post', {
  title: g.string(),//.length({ min: 3 }),
  description: g.string(), 
  image: g.url(), 
  country: g.string(),
  createdBy: g.string(),
})

const user = g.type('user', {
  name: g.string(),
  email: g.string(),
  avatarUrl: g.url(),
  description: g.string(),
  posts: g.string().list()
})



 mongodb.model('User', {
  name: g.string().length({ min: 2, max: 100 }),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string().length({ min: 2, max: 1000 }).optional(), 
  posts: g.ref(post).list().optional(),
}).auth((rules) => {
  rules.public().read()
}).collection('users')

// @ts-ignore
// const Post = 
mongodb.model('Post', {
  title: g.string().length({ min: 3 }),
  description: g.string(), 
  image: g.url(), 
  country: g.string(),
  createdBy: g.ref(user).optional(),
}).auth((rules) => {
  rules.public().read()
  rules.private().create().delete().update()
}).collection('posts')

g.datasource(mongodb)

const jwt = auth.JWT({
  issuer: 'grafbase',
  secret:  g.env('NEXTAUTH_SECRET')
})

export default config({
  schema: g,
  auth: {
    providers: [jwt],
    rules: (rules) => rules.private()
  },
})


