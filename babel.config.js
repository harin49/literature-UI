module.exports = {
  presets: [
    ['@babel/preset-env', { useBuiltIns: 'usage', corejs: { version: 3, proposals: true } }],
    '@babel/preset-react',
  ],
  plugins: ['@babel/plugin-proposal-export-default-from', 'jsx-control-statements', 'named-asset-import'],
  env: {
    production: {
      plugins: ['transform-remove-console', 'transform-react-remove-prop-types'],
    },
  },
};
