/** @type {import('next').NextConfig} */

const NEXT_CSP = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data:;
  font-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`
const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data:;
  font-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`

const GOOGLE_CSP = `
  object-src 'none';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' 'strict-dynamic' https: http:;
  base-uri 'none';
`

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

  // async headers() {
  //   return [
  //     {
  //       source: '/(.*)',
  //       headers: [
  //         {
  //           key: 'Content-Security-Policy',
  //           value: GOOGLE_CSP.replace(/\n/g, ''),
  //         },
  //         {
  //           key: 'X-Content-Type-Options',
  //           value: 'nosniff',
  //         },
  //       ],
  //     },
  //   ]
  // },
}

export default nextConfig
