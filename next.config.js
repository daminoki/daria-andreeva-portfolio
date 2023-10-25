/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    additionalData: '@import "src/styles/mixins.scss";',
  },
  images: {
    domains: ['cheery-sundae-aa15d8.netlify.app', 'cdn.sanity.io'],
  },
};

module.exports = nextConfig;
