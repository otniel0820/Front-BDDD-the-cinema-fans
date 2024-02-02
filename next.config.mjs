/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        fallbackNodePolyfills: false,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.ibb.co',
                pathname: '/**',
              },
        ]
    }
};

export default nextConfig;
