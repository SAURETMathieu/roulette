import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
};

export default withNextIntl(nextConfig);

//only this if you don't need next-intl
/*
const nextConfig = {
  reactStrictMode: true,
}

export default nextConfig
*/
