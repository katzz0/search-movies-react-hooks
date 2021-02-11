import React from 'react'
import styled from 'styled-components'
import { Movie as MovieModel } from '../../store/movies/types'

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
  background: darkslategrey url(${({ imageSrc }) => imageSrc}) no-repeat center
    top;
  background-size: cover;
`

const Title = styled.div`
  position: absolute;
  text-align: center;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.7em 0;
  bottom: 0;
  color: whitesmoke;
`

interface Props {
  movie: MovieModel
}

export default function Movie({ movie }: Props): JSX.Element {
  return (
    <Wrapper>
      <Poster imageSrc={movie.Poster}>
        <Title>
          {movie.Title}, {movie.Year}
        </Title>
      </Poster>
    </Wrapper>
  )
}
