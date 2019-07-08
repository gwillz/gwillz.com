// @ts-nocheck

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    map: !isProduction,
    plugins: {
        'postcss-import': {},
        'postcss-preset-env': {
            stage: 0,
        },
        'postcss-calc': {},
        'autoprefixer': {},
    },
}

if (isProduction) {
    module.exports.plugins =
    Object.assign(module.exports.plugins, {
        'cssnano': {
            preset: 'default',
        },
    })
}
