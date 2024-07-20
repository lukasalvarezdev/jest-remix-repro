import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

jest.useFakeTimers()

it('explicitly test specific event', async () => {
	const callback = jest.fn()

	const { user } = setup(<App callback={callback} />)
	await user.click(screen.getByRole('button'))

	jest.runAllTimers()

	expect(callback).toHaveBeenCalledTimes(1)
})

export function setup(jsx: JSX.Element) {
	return {
		user: userEvent.setup({
			advanceTimers: jest.advanceTimersByTime,
		}),
		...render(jsx),
	}
}

function App({ callback }: { callback: any }) {
	const onClick = () => {
		setTimeout(() => {
			callback(1)
		}, 1)
	}
	return <button onClick={onClick}>Click me</button>
}
