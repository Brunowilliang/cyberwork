module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
          alias: {
            '@': './src',
            '@assets': './src/assets',
            '@components': './src/components',
            '@provider': './src/provider',
            '@styles': './src/styles',
            '@services': './src/services',
            '@screens': './src/screens',
          },
        }
      ],
      ['react-native-reanimated/plugin']
    ],
  }; 
};
