import { FormEvent, useState } from 'react'
import styled from 'styled-components'

interface Props {
  className?: string
  placeholder?: string
  searchRequest: (searchText: string) => void
}

const Form = styled.form`
  display: flex;
  justify-content: center;
`

const Button = styled.button`
  border: 2px solid deepskyblue;
  font-size: 20px;
  padding: 0.3em 0.5em;
  margin-left: 0.3em;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:active {
    background-color: deepskyblue;
    color: whitesmoke;
  }
`

const Input = styled.input`
  border: 2px solid deepskyblue;
  width: 400px;
  max-width: 50%;
  font-size: 20px;
  padding: 0 0.3em;

  &:focus {
    outline: none;
  }
`

function SearchField({
  className,
  searchRequest,
  placeholder,
}: Props): JSX.Element {
  const [searchText, setSearchText] = useState('')

  const isInputValid = () => {
    return searchText.length > 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (!isInputValid()) {
      return
    }

    searchRequest(searchText)
  }

  return (
    <Form className={className} onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder={placeholder}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <Button disabled={!isInputValid()}>Search</Button>
    </Form>
  )
}

SearchField.defaultProps = {
  className: undefined,
  placeholder: undefined,
}

export default SearchField
