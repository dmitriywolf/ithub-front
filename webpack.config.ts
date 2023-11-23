import type webpack from 'webpack';
import path from 'path';
import { buildWebpackConfig } from './webpack/buildWebpackConfig';
import { type BuildPaths, type BuildEnv } from './webpack/types/config';

export default (env: BuildEnv): webpack.Configuration => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    src: path.resolve(__dirname, 'src'),
    html: path.resolve(__dirname, 'public'),
    dist: path.resolve(__dirname, 'dist'),
  };

  const mode = env.mode ?? 'development';
  const PORT = env.port ?? 3000;

  const isDev = mode === 'development';

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  });

  return config;
};
