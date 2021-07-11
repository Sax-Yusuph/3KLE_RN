const { resolve } = require('path')

module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				root: ['.'],
				extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
				alias: {
					components: './src/components',
					hooks: './src/hooks',
					localization: './src/localization',
					screens: './src/screens',
					'@utils': './src/utils',
					'@assets': './assets',
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
