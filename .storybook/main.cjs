module.exports = {
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-coverage"],
  "framework": "@storybook/sveltekit",
  "features": {
    "storyStoreV7": true
  },
  docs: {
    docsPage: "automatic"
  }
};