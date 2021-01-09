import React from 'react'
import { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import { useHistory } from 'react-router-dom'

const Description = (props) => {
  const history = useHistory()
  const [movies, setMovies] = useState([
    {
      id: 1,
      Title: 'Star Wars: Episode IV - A New Hope',
      description: 'description movie 1',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
      rate: 2,
      trailerLink: 'https://www.youtube.com/watch?v=8Qn_spdM5Zg',
    },
    {
      id: 2,
      Title: 'Star Wars: Episode V - The Empire Strikes Back',
      description: 'description movie 2',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
      rate: 5,
      trailerLink: 'https://www.youtube.com/watch?v=8Qn_spdM5Zg',
    },
    {
      id: 3,
      Title: 'Star Wars: Episode VI - Return of the Jedi',
      description: 'description movie 3',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
      rate: 9,
      trailerLink: 'https://www.youtube.com/watch?v=5UfA_aKBGMc',
    },
  ])

  props.location.pathname.split('/')
  console.log(props.location.pathname.split('/')[2])
  const Movie = movies.find(
    (element) => element.id == props.location.pathname.split('/')[2],
  )

  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Description</Card.Title>
          <ReactPlayer
            className="react-player fixed-bottom"
            url={Movie.trailerLink}
            width="100%"
            height="100%"
            controls={true}
          />
          <Card.Text>Synopsis : {Movie.description}</Card.Text>
          <Button variant="primary" onClick={() => history.push('/')}>
            Return Movies lists
          </Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default Description
