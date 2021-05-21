module.exports = {
  plugins: {
    'postcss-nested': {},
    'postcss-custom-media': {
      importFrom: [
        {
          customMedia: { '--xs': '(max-width: 320px)' }
        },
        {
          customMedia: { '--s': '(max-width: 480px)' }
        },
        {
          customMedia: { '--m': '(max-width: 768px)' }
        },
        {
          customMedia: { '--l': '(max-width: 1024px)' }
        },
        {
          customMedia: { '--xl': '(max-width: 1200px)' }
        }
      ]
    }
  }
}
