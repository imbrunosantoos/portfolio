import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  // nothing custom here yet — the defaults are fine for a mostly-static site
};

// this plugin hooks next-intl into the build and points it at
// src/i18n/request.ts (where the messages get loaded per request)
const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
