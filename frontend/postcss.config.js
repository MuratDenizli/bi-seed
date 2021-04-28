module.exports = {
  plugins: {
    'postcss-nested': {},
    'postcss-custom-media': {
      importFrom: [
        {
          customMedia: { '--xs': '(min-width: 320px)' }
        },
        {
          customMedia: { '--s': '(min-width: 480px)' }
        },
        {
          customMedia: { '--m': '(min-width: 768px)' }
        },
        {
          customMedia: { '--l': '(min-width: 1024px)' }
        },
        {
          customMedia: { '--xl': '(min-width: 1200px)' }
        }
      ]
    }
  }
}
