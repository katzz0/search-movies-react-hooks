import React from 'react'
import styled from 'styled-components'
import { Movie as MovieModel } from '../../store/movies/types'
import Movie from './Movie'

const Wrapper = styled.article`
  border: 1px solid deepskyblue;
  border-radius: 4px;
  box-shadow: 5px 10px #000;
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
