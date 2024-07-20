import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

vi.useFakeTimers()

it('explicitly test specific event', async () => {
	const callback = vi.fn()

	const { user } = setup(<App callback={callback} />)
	await user.click(screen.getByRole('button'))

	vi.runAllTimers()

	expect(callback).toHaveBeenCalledTimes(1)
})

export function setup(jsx: JSX.Element) {
	return {
		user: userEvent.setup({
			advanceTimers: vi.advanceTimersByTime,
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
