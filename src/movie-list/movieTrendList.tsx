import { Box, Grid, Paper } from '@mui/material';
import React from 'react';
import MovieTrendCard from '../components/movie-card/movieTrend';
import { MovieDataType } from '../assets/data';

interface MovieTrendListProps {
    trendingList: MovieDataType[];
}

function MovieTrendList({ trendingList }: MovieTrendListProps) {
    if (!trendingList || trendingList.length === 0) {
        return <Box>No trending movies available</Box>; // Handle empty or undefined list
    }
    return (
        <Box sx={{ display: "flex", gap: 2,
        //  overflowX: "scroll"
          }}>
            {trendingList.map((movie: any) => (
                <Grid item key={movie.id}>
                    <Paper elevation={0} sx={{ backgroundColor: "transparent" }}>
                        <MovieTrendCard movie={movie} />
                    </Paper>
                </Grid>
            ))}
        </Box>
    );
}

export default MovieTrendList;
