import remix from "@remix-run/dev/config/vite.js";
import { vercel } from "@vercel/remix";
import tsconfigPaths from "vite-tsconfig-paths";

/** @type {import('@vercel/remix').VercelViteConfig} */
export default {
  ...vercel(),
  plugins: [remix(), tsconfigPaths()],
};
