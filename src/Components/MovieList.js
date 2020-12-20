import React from 'react'
import PropTypes from 'prop-types'
import MovieCard from './MovieCard'
import { Col } from 'react-bootstrap'
import Search from './Filter'

const getMovies = (movies) => {
  const filtredMovies = movies.filter((movie) =>
    movie.Title.toLowerCase().includes(e.target.value.toLowerCase()),
  )
  return (
    <div>
      <div>
        <Search />
      </div>
      <Col>
        {filtredMovies.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </Col>
    </div>
  )
}

const MovieList = (props) => <div>{getMovies(props.movies)}</div>

MovieList.defaultProps = {
  movies: [],
}

MovieList.propTypes = {
  movies: PropTypes.array,
}

export default MovieList
