import { render, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Teste } from '../components/assets/Calendario'
import Calendario from '../components/assets/Calendario'

describe('teste1', () => {
  it('is button left is rendered', () => {
    const { findByText, queryByText } = render(<Calendario />)

    expect(findByText('left')).toBeInTheDocument()
  })

})

describe('teste2', () => {
  it('is button as clicked', () => {
    const { findByText, getByText, queryByText } = render(<Teste />)

    const btn = getByText('left')

    userEvent.click(btn)

    expect(queryByText('Junho')).toBeInTheDocument()
  })
})