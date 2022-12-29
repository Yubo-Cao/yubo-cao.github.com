// @ts-check
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

/**
 *
 * @param {string} phase the current build phase, one of 'phase-production-build' | 'phase-development-server' | 'phase-export'
 * @param {import('next').NextConfig} options the default config
 * @returns {import('next').NextConfig}
 */
module.exports = (phase, { defaultConfig }) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            reactStrictMode: true
        };
    }

    return {
        reactStrictMode: true,
        swcMinify: true,
        images: {
            unoptimized: true
        }
    };
};
