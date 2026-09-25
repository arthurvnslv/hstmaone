import type {NextConfig} from 'next';

const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const isGithubPages = process.env.GITHUB_PAGES === 'true' || isGithubActions;

// In GitHub Actions, GITHUB_REPOSITORY is in the format "owner/repo-name"
// If repo is "<username>.github.io", basePath should be ""
// Otherwise, basePath is "/<repo-name>"
let repoBasePath = '';
if (isGithubPages) {
  if (process.env.NEXT_PUBLIC_BASE_PATH) {
    repoBasePath = process.env.NEXT_PUBLIC_BASE_PATH;
  } else if (process.env.GITHUB_REPOSITORY) {
    const repoName = process.env.GITHUB_REPOSITORY.split('/')[1];
    if (repoName && !repoName.endsWith('.github.io')) {
      repoBasePath = `/${repoName}`;
    }
  }
}

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // If building for GitHub Pages, export as static HTML
  ...(isGithubPages
    ? {
        output: 'export',
        basePath: repoBasePath || undefined,
        assetPrefix: repoBasePath || undefined,
        images: {
          unoptimized: true,
        },
      }
    : {
        output: 'standalone',
        images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: 'picsum.photos',
              port: '',
              pathname: '/**',
            },
          ],
        },
      }),
  transpilePackages: ['motion'],
  webpack: (config, {dev}) => {
    // HMR is disabled in AI Studio via DISABLE_HMR env var.
    // Do not modify—file watching is disabled to prevent flickering during agent edits.
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    return config;
  },
};

export default nextConfig;
