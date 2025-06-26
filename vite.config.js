import vercelPreset from "@vercel/remix/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { remix } from "@remix-run/dev/vite";

export default {
  ...vercelPreset,
  plugins: [
    remix(),       // 👈 Add this line
    tsconfigPaths()
  ],
};
