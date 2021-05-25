import React from 'react'
import MovieCard from './MovieCard'

function MovieList({films}) {
    return (
        <div className='listofmv'>
            {films.map(el=><MovieCard films={el}/>)}
        </div>
    )
    
}

export default MovieList
