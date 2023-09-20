/** @type {import('next').NextConfig} */
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'avatars.githubusercontent.com', // | "lh3.googleusercontent.com",
          port: '',
          pathname: '/u/**',
        },
        {
          protocol: 'https',
          hostname:  "lh3.googleusercontent.com",
          port: '',
          pathname: '/a/**',
        },
      ],
    },
  }

  //avatars.githubusercontent.com/u/123834419?v=4)

// module.exports = nextConfig
