module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    rules: {
        "template-curly-spacing": "off",
        indent: "off",
        'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-undef': 'off'

    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}