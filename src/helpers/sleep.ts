export const Sleep = (time: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, time))

export const Queue = (cb: unknown, time = 1000) => {
	setTimeout(cb, time)
}
