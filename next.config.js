/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    PBIRUST_URL: 'https://pbirust.herokuapp.com'
  }
}

module.exports = nextConfig
