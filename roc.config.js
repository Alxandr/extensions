module.exports = {
    settings: {
        repo: {
            targets: ['cjs'],
            babelPresetEnv: {
                targets: {
                    node: '9',
                },
            },
            mono: [
                // Examples are disabled for now
                // 'examples/*',
                'packages',
                'plugins',
            ],
        },
    },
};
