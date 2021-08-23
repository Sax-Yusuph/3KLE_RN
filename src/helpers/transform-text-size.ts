export type TextSizes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5'

export type TextSizeProps = Record<TextSizes, boolean>

export const GetTextSize = (size: TextSizes) => {
	switch (size) {
		case 'h1':
			return '4xl'
		case 'h2':
			return '3xl'
		case 'h3':
			return '2xl'
		case 'h4':
			return 'xl'
		case 'h5':
			return 'lg'
		default:
			'md'
	}
}
