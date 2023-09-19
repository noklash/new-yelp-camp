/** @type {import('next').NextConfig} */
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'avatars.githubusercontent.com',
          port: '',
          pathname: '/u/**',
        },
      ],
    },
  }

  //avatars.githubusercontent.com/u/123834419?v=4)

// module.exports = nextConfig
