import { MovieDataType } from '../assets/data'
import MovieCard from '../components/movie-card'

import { Grid, Paper } from "@mui/material";
interface MovieListProps {
  recommendList: MovieDataType[];
}

const MovieList = ({ recommendList }: MovieListProps) => {
  return (
    <Grid container spacing={2}>
      {recommendList.map((item) => (
        <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
          <Paper elevation={0} sx={{ backgroundColor: "transparent" }}>
            <MovieCard movie={item} />
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieList;
