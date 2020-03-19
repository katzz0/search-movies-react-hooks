import { connect } from 'react-redux'
import SearchField from '../shared/SearchField'
import { searchRequest as searchMoviesRequest } from '../../store/movies/actions'

export const mapDispatchToProps = {
  searchRequest: (searchText: string) => searchMoviesRequest(searchText)
}

const SearchMoviesField = connect(undefined, mapDispatchToProps)(SearchField)

export default SearchMoviesField
