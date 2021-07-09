module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		[
			'module:react-native-dotenv',
			{
				moduleName: 'react-native-dotenv',
			},
		],
		[
			require.resolve('babel-plugin-module-resolver'),
			{
				root: ['.'],
				alias: {
					'@assets': './assets',
					components: './src/components',
					hooks: './src/hooks',
					localization: './src/localization',
					screens: './src/screens',
					'@utils': './src/utils',
					'@auth': './src/modules/auth',
					'@elements': './src/components/elements',
					'@form': './src/components/form',
					'@themes': './src/components/themes',
					'@views': './src/components/views',
					'@navigation': './src/navigation',
					'@types': './src/@types',
					'@screens': './src/screens',
					'@helpers': './src/helper',
					'@hooks': './src/hooks',
					'@modules': './src/modules',
				},
			},
		],
		'react-native-reanimated/plugin',
	],
}
