import vercel from '@vercel/remix';
import tsconfigPaths from 'vite-tsconfig-paths';

const { vercelPreset } = vercel;

/** @type {import('@vercel/remix').VercelViteConfig} */
export default {
  ...vercelPreset(),
  plugins: [tsconfigPaths()],
};
