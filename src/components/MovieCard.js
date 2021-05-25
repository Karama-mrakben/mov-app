import React from 'react'
import {Card} from 'react-bootstrap'
import ReactStars from 'react-rating-stars-component'

function MovieCard({films}) {
    return (
        <div>
           <Card style={{ width:'350px' , heigth:'700px' }}>
  <Card.Img variant="top" src={films.Poster}/>
  <Card.Body>
    <Card.Title style={{color:'black'}}>{films.Title}</Card.Title>
    <Card.Text style={{color:'black'}}>{films.Year} </Card.Text>
    <ReactStars
    count={5}
    value={films.Rate}
    edit={false}
    size={24}
    activeColor="#ffd700"
  />,
  </Card.Body>
</Card>
        </div>
    )
}

export default MovieCard
