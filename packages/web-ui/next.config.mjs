/** @type {import('next').NextConfig} */

const nextConfig = {
  //
  // For react-spring-bottom-sheet, see:
  // https://github.com/stipsan/react-spring-bottom-sheet/issues/210
  //
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  poweredByHeader: false,
}

export default nextConfig
