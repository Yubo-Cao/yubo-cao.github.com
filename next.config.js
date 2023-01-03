const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

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
        }
    };

    if (phase !== PHASE_DEVELOPMENT_SERVER) {
        config.images.unoptimized = true;
        config.swcMinify = true;
    }

    return config;
};
