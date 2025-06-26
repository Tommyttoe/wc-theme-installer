import vercelPreset from '@vercel/remix';
import tsconfigPaths from 'vite-tsconfig-paths';

export default {
  ...vercelPreset(),
  plugins: [tsconfigPaths()],
};
