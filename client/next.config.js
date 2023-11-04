/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    env: {
        API_KEY_NEWSAPI: process.env.API_KEY_NEWSAPI,
    }
}

module.exports = nextConfig
