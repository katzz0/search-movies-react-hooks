import React from 'react'
import { Movie as MovieModel } from '../../store/movies/types'
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
`

const Poster = styled.div<{ imageSrc: string }>`
  position: relative;
  margin: 0;
  border-radius: 4px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: url(${ ({ imageSrc }) => imageSrc }) no-repeat center top;
  background-size: cover;
`

const Title = styled.span`
  position: absolute;
  text-align: center;
  bottom: 2%;
  left: 50%;
  transform: translateX(-50%);
  color: whitesmoke;
`

interface Props {
  movie: MovieModel
}

export default function Movie({ movie }: Props) {
  return (
    <Wrapper>
      <Poster imageSrc={movie.Poster}>
        <Title>{movie.Title}, {movie.Year}</Title>
      </Poster>
    </Wrapper>
  )
}
