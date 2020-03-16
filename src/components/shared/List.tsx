import React from 'react'
import styled from 'styled-components'

interface Props<T, I> {
  className?: string
  itemComponent: React.FunctionComponent<{ item: T }>
  data: I[]
}

const ContentWrapper = styled.ul`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 0;
  padding: 0.1em;
  list-style: none;
`

export default function List<T, I extends T & { id: string }>({
  className,
  itemComponent,
  data
}: Props<T, I>) {
  return (
    <ContentWrapper className={className}>
      {data.map(x => (
        <li key={x.id}>{React.createElement(itemComponent, { item: x })}</li>
      ))}
    </ContentWrapper>
  )
}
