import { Movie as MovieModel } from '../../store/movies/types'
import Movie from './Movie'

interface Props {
  item: MovieModel
}

export default function MovieCard({ item }: Props): JSX.Element {
  return <Movie movie={item} />
}
