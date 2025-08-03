import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import path from "path";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src \"self\"; script-src \"none\"; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nlojrowwjmfmabjrkkqv.supabase.co",
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "sass")],
    prependData: `
      @use "_variables" as *;
      @use "_mixins" as *;
      @use "_colors" as *;
    `,
    silenceDeprecations: ["legacy-js-api"],
  },
};

export default withNextIntl(nextConfig);
