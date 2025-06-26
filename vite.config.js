import { vercelPreset } from '@vercel/remix';
import tsconfigPaths from 'vite-tsconfig-paths';

/** @type {import('@vercel/remix').VercelViteConfig} */
export default {
  ...vercelPreset(),
  plugins: [tsconfigPaths()],
};
