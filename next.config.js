// @ts-check
const {PHASE_DEVELOPMENT_SERVER} = require("next/constants");

/**
 *
 * @param {string} phase the current build phase, one of 'phase-production-build' | 'phase-development-server' | 'phase-export'
 * @returns {import('next').NextConfig}
 */
module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            reactStrictMode: true,
            images: {
                remotePatterns: [
                    {
                        protocol: "https",
                        hostname: "avatars.githubusercontent.com",
                        port: '',
                        pathname: "**",
                    }
                ]
            }
        };
    }

    return {
        reactStrictMode: true,
        swcMinify: true,
        images: {
            remotePatterns: [
                {
                    protocol: "https",
                    hostname: "avatars.githubusercontent.com",
                    port: '',
                    pathname: "**",
                }
            ],
            unoptimized: true
        }
    }
};
