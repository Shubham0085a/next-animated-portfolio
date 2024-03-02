/** @type {import('next').NextConfig} */
const nextConfig = {
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/portfolio': { page: '/portfolio' },
      '/contact': { page: '/contact' },
      // Add other routes as needed
    };
  },
  images: {
    loader: 'custom',
    loaderFile: './loader.js',
  },
};

export default nextConfig;

