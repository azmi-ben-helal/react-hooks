import React from 'react'
import { useState } from 'react'
import { Route, Link, Redirect } from 'react-router-dom'

const MovieCard = (props) => {
  return (
    <>
      <Link to={`/description/${props.movie.id}`}>
        <div className="movie-card">
          <div className="movie-card card">
            <img
              className="card-img-top"
              src={props.movie.Poster}
              alt=""
              width="250px"
              height="250px"
            />
            <div className="card-body">
              <h4 className="card-title">{props.movie.Title}</h4>

              <p className="text-justify" style={{ fontSize: '14px' }}>
                {props.movie.description}
              </p>
            </div>
            <div className="card-footer">
              <div className="clearfix">
                <div className="float-left mt-1">{props.movie.rate}</div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default MovieCard
