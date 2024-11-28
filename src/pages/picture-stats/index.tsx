import React, { useContext } from 'react'
import Layout from '../../layout/userLayout'
import MovieList from '../../movie-list'
import { MovieContext } from '../../context/movie-context'

function Picture() {
    const {state} = useContext(MovieContext);
  return (
    // <Layout>
        <MovieList recommendList={state.movies}/>
    // </Layout>
  )
}

export default Picture