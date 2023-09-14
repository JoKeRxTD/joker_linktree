/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost', 'cdn.discordapp.com', 'i.imgur.com'],
    },
    async redirects() {
        return [
            {
                source: '/login',
                destination: '/api/auth/signin',
                permanent: true,
            },
            {
                source: '/logout',
                destination: '/api/auth/signout',
                permanent: true,
            },
        ]
    }
}

module.exports = nextConfig
