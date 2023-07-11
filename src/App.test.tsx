import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'

import App from './App'
import { store } from './store'

test('Show App Component', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )

  expect(
    screen.getByText('PRE-SUSTAINABILITY - BOILERPLATE')
  ).toBeInTheDocument()
})

test('Working Counter', async () => {
  const user = userEvent.setup()
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  expect(getByText('count is: 0')).toBeInTheDocument()

  const button = getByText('Increment')

  await user.click(button)
  expect(getByText('count is: 1')).toBeInTheDocument()

  await user.click(button)
  expect(getByText('count is: 2')).toBeInTheDocument()

  await user.click(button)
  expect(getByText('count is: 3')).toBeInTheDocument()
})
