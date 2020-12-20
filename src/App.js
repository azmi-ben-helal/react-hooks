import logo from './logo.svg'
import './App.css'
import React, { useState, useEffect } from 'react'
import MovieList from './Components/MovieList'
import { Container, Row } from 'react-bootstrap'
import { Button, Form } from 'react-bootstrap'
import './App.css'
import Search from './Components/Filter'

function App() {
  const [data, setData] = useState({})

  const [movies, setMovies] = useState([
    {
      Title: 'Star Wars: Episode IV - A New Hope',
      description: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
      rate: 2,
    },
    {
      Title: 'Star Wars: Episode V - The Empire Strikes Back',
      description: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
      rate: 5,
    },
    {
      Title: 'Star Wars: Episode VI - Return of the Jedi',
      description: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
      rate: 9,
    },
  ])

  const handleSubmit = (e) => {
    e.preventDefault()
    setMovies([...movies, data])
  }
  return (
    <Container>
      <Row>
        <MovieList movies={movies} />
      </Row>
      <Row>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="">
            <Form.Label>Tile</Form.Label>
            <Form.Control
              type="title"
              placeholder="Enter title"
              onChange={(e) => {
                setData({ ...data, Title: e.target.value })
              }}
            />
          </Form.Group>
          <Form.Group controlId="">
            <Form.Label>description</Form.Label>
            <Form.Control
              type="description"
              placeholder="discription"
              onChange={(e) => {
                setData({ ...data, description: e.target.value })
              }}
            />
          </Form.Group>
          <Form.Group controlId="">
            <Form.Label>Image Path</Form.Label>
            <Form.Control
              type="path"
              placeholder="imagePath"
              onChange={(e) => {
                setData({ ...data, Poster: e.target.value })
              }}
            />
          </Form.Group>
          <Form.Group controlId="">
            <Form.Label>Rate</Form.Label>
            <Form.Control
              type="rate"
              placeholder="rate"
              onChange={(e) => {
                setData({ ...data, rate: e.target.value })
              }}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Row>
    </Container>
  )
}
export default App
