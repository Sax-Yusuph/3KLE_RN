export interface Option {
	id: number
	value: string
}

export type Entries<T> = {
	[K in keyof T]: [K, T[K]]
}[keyof T][]
