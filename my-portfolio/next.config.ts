import type { NextConfig } from 'next';
const intlConfig = require('./next-intl.config.js');


const nextConfig: NextConfig = {
  ...intlConfig,
};

export default nextConfig;
