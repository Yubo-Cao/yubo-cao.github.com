const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
const { PHASE_PRODUCTION_BUILD } = require("next/dist/shared/lib/constants");

module.exports = (phase) => {
    const config = {
        reactStrictMode: true,
        images: {
            remotePatterns: [
                {
                    protocol: "https",
                    hostname: "avatars.githubusercontent.com",
                    port: "",
                    pathname: "**"
                }
            ]
        },
    };

    if (phase !== PHASE_DEVELOPMENT_SERVER && phase !== PHASE_PRODUCTION_BUILD) {
        config.images.unoptimized = true;
        config.swcMinify = true;
    }

    return config;
};
