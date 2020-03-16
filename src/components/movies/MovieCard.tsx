import React from 'react'
import styled from 'styled-components'
import { Movie as MovieModel } from '../../store/movies/types'
import Movie from './Movie'

const Wrapper = styled.article`
  border: 1px solid deepskyblue;
  border-radius: 4px;
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
`

interface Props {
  item: MovieModel
}

export default function MovieCard({ item }: Props) {
  return (
    <Wrapper>
      <Movie movie={item} />
    </Wrapper>
  )
}
