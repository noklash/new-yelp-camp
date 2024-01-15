// import { g, auth, config } from '@grafbase/sdk'


// // @ts-ignore
// const User = g.model('User', {
//   name: g.string().length({ min: 2, max: 100 }),
//   email: g.string().unique(),
//   avatarUrl: g.url(),
//   description: g.string().length({ min: 2, max: 1000 }).optional(), 
//   posts: g.relation(() => Post).list().optional(),
// }).auth((rules) => {
//   rules.public().read()
// })

// // @ts-ignore
// const Post = g.model('Post', {
//   title: g.string().length({ min: 3 }),
//   description: g.string(), 
//   image: g.url(), 
//   country: g.string(),
//   createdBy: g.relation(() => User),
// }).auth((rules) => {
//   rules.public().read()
//   rules.private().create().delete().update()
// })

// const jwt = auth.JWT({
//   issuer: 'grafbase',
//   secret:  g.env('NEXTAUTH_SECRET')
// })

// export default config({
//   schema: g,
//   auth: {
//     providers: [jwt],
//     rules: (rules) => rules.private()
//   },
// })

// OLD ENDS

// NEW STARTS

import { config, connector, graph, auth } from '@grafbase/sdk'


const g = graph.Standalone()



const mongo = connector.MongoDB('MongoDB', {
  url: g.env('MONGODB_API_URL'),
  apiKey: g.env('MONGODB_API_KEY'),
  dataSource: g.env('MONGODB_DATASOURCE'),
  database: g.env('MONGODB_DATABASE'),
})

g.datasource(mongo)

const jwt = auth.JWT({
  issuer: 'grafbase',
  secret:  g.env('NEXTAUTH_SECRET')
})

export default config({
  graph: g,
    auth: {
    providers: [jwt],
    rules: (rules) => rules.private()
  },
})
