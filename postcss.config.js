module.exports = {
    plugins: {
        'postcss-import': {},
        'postcss-preset-env': {},
        'cssnano': { safe: true,preset: 'default',minimize:true }
    }
}