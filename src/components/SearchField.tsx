import React, { FormEvent, useState } from 'react'
import styled from 'styled-components'

interface Props {
  className?: string
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

export default function SearchField({ className, searchRequest }: Props) {
  const [searchText, setSearchText] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    searchRequest(searchText)
  }

  return (
    <Form className={className} onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Enter Movies or Series name"
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />
      <Button>Search</Button>
    </Form>
  )
}
