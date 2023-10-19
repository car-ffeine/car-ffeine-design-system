import { addons } from '@storybook/manager-api';
import type { StorybookConfig } from '@storybook/react-vite';

const { loadConfigFromFile, mergeConfig } = require('vite');

const path = require('path');

addons.setConfig({
  panelPosition: 'right',
});

const config: StorybookConfig = {
  stories: ['../src/lib/**/*.mdx', '../src/lib/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  async viteFinal(config) {
    const { config: userConfig } = await loadConfigFromFile(
      path.resolve(__dirname, '../vite.config.ts')
    );

    return mergeConfig(config, {
      ...userConfig,
      plugins: [],
    });
  },
};
export default config;