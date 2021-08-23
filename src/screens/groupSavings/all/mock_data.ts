export interface SavingsGroup {
	title: string
	deadline: string
	description: string
	members: string[]
	status: 'Active' | 'Pending' | 'Completed'
}

export const __GROUP_SAVINGS_MOCK_DATA: SavingsGroup[] = [
	{
		title: 'RAINY DAY GROUP',
		deadline: '19th Dec 2021',
		description: 'This group is to help members of Unilag alumnis save towards personal projects.',
		members: ['a', 'b', 'c', 'd'],
		status: 'Active',
	},
	{
		title: 'RAINY DAY GROUP',
		deadline: '19th Dec 2021',
		description: 'This group is to help members of Unilag alumnis save towards personal projects.',
		members: ['a', 'b', 'c', 'd'],
		status: 'Active',
	},
	{
		title: 'RAINY DAY GROUP',
		deadline: '19th Dec 2021',
		description: 'This group is to help members of Unilag alumnis save towards personal projects.',
		members: ['a', 'b', 'c', 'd'],
		status: 'Active',
	},
]
