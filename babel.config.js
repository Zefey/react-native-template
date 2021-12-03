module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./src'],
                extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
                alias: {
                    '@actions/*': ['src/actions/*'],
                    '@components/*': ['src/components/*'],
                    '@pages/*': ['src/pages/*'],
                    '@reducers/*': ['src/reducers/*'],
                    '@store/*': ['src/store/*'],
                    '@utils/*': ['src/utils/*'],
                },
            },
        ],
    ],
};
