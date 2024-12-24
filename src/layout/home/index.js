import React from 'react'
import Introduce from './Introduce'
import CurrentlyShowingMovies from './CurrentlyShowingMovies'
import UpcomingMovies from './UpcomingMovies'
import MovieSchedule from './MovieSchedule/MovieSchedule'
import TopMovies from './TopMovie'

const Home = () => {
    return (
        <>
            <TopMovies />
            <CurrentlyShowingMovies />
            <UpcomingMovies />
            <MovieSchedule />
        </>
    )
}

export default Home