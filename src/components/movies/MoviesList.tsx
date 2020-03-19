import React from 'react'
import styled from 'styled-components'
import List from '../shared/List'
import { Movie as MovieModel } from '../../store/movies/types'
import MovieCard from './MovieCard'

type MovieModelWithId = MovieModel & { id: string }

interface Props {
  className?: string
  movies: MovieModelWithId[]
}

function MoviesList({ className, movies }: Props) {
  return <List className={className} itemComponent={MovieCard} data={movies} />
}

export default styled(MoviesList)`
  grid-auto-rows: 250px;
`
