/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  modularizeImports: {
    antd: {
      transform: "antd/lib/{{ kebabCase member }}",
    },
  },
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ["en", "fr", "zh"],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: "en",
  },
  experimental: {
    swcPlugins: [["@lingui/swc-plugin", {}]],
  },
};

module.exports = nextConfig;
