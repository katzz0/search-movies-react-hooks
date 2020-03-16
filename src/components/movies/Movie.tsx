import React from 'react'
import { Movie as MovieModel } from '../../store/movies/types'

interface Props {
  movie: MovieModel
}

export default function Movie({ movie }: Props) {
  return (
    <div>
      <img src={movie.Poster} alt={movie.Title} />
      <dl>
        <dt>Title: </dt>
        <dd>{movie.Title}</dd>

        <dt>Year: </dt>
        <dd>{movie.Year}</dd>
      </dl>
    </div>
  )
}
