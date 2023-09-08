/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  modularizeImports: {
    antd: {
      transform: "antd/lib/{{ kebabCase member }}",
    },
  },
};

module.exports = nextConfig;
