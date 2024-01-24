

import { config, connector, g, auth } from '@grafbase/sdk'

const mongodb = connector.MongoDB('MongoDB', {
  url: g.env("MONGODB_API_URL"),
  apiKey: g.env("MONGODB_API_KEY"),
  dataSource: g.env("MONGODB_DATASOURCE"),
  database: g.env("MONGODB_DATABASE")
})



// @ts-ignore
 mongodb.model('User', {
  name: g.string().length({ min: 2, max: 100 }),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string().length({ min: 2, max: 1000 }).optional(), 
  posts: g.ref('Post').list().optional(),
}).auth((rules) => {
  rules.public().read()
}).collection('users')

// @ts-ignore
 mongodb.model('Post', {
  title: g.string().length({ min: 3 }),
  description: g.string(), 
  image: g.url(), 
  country: g.string(),
  createdBy: g.ref('User'),
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


