// vite.config.js
import { remix } from "@remix-run/dev/vite";
import { vercel } from "@vercel/remix";
import tsconfigPaths from "vite-tsconfig-paths";

/** @type {import('@vercel/remix').VercelViteConfig} */
export default {
  ...vercel.remix(), // This gives Vercel the correct config
  plugins: [
    remix(),          // Must include Remix plugin
    tsconfigPaths()
  ]
};
