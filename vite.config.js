import vercelPreset from "@vercel/remix/vite";
import tsconfigPaths from "vite-tsconfig-paths";

/** @type {import('vite').UserConfig} */
export default {
  ...vercelPreset,
  plugins: [tsconfigPaths()],
};
