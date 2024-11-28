import React, { useContext } from 'react';
import { MovieDataType } from '../../assets/data';
import { MovieContext } from '../../context/movie-context';
import { Box, Card, CardContent, Grid, Stack, Typography } from '@mui/material';
import movieIcon from '../../assets/icons/icon-category-movie.svg';
import TvSeriesIcon from '../../assets/icons/icon-category-tv.svg';
import BookmarkIcon from '../icons/bookmark-icon';
import BookmarkEmptyIcon from '../icons/bookmark-empy-icon'

interface MovieTrendCardProp {
    movie: MovieDataType
}
function MovieTrendCard({movie}: MovieTrendCardProp) {
    const {dispatch} = useContext(MovieContext)
    const handleToggleBookmark = (id:string) => {
        dispatch({type: "TOGGLE BOOKMARK", id})
    }
    console.log(movie,'movie');
    
  return (
        <Card key={movie.id} elevation={0} style={{backgroundColor:"transparent"}}>
            <CardContent style={{
                padding:0,
                position:"relative",
                // overflowX:"scroll",
                display:"flex"
            }}>
                <img src={movie.thumbnail.regular.large} alt={movie.title} style={{width:"250px", height:"180px", borderRadius:"8px"}} />
            <Box position="absolute" top={0} bottom={0} left={0} right={0} bgcolor="rgba(0,0,0,0.6)" borderRadius="8px" />
                <Stack mt="6" spacing={0} position="absolute" bottom={0} left={0} right={0} p={4}>
                    <Grid container alignContent="center" spacing={1}>
                    <Grid item>
                        <Typography fontSize={10} color='#E0E0E0' aria-label='Year of MOvie'>
                            {movie.year}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Box sx={{width:"1rem", height:"1rem", bg:"#E0E0E0", borderRadius:"full"}}>
                        </Box>
                    </Grid>
                    <Grid item>
                    <img 
                    src={movie.category === "Movies" ? movieIcon : TvSeriesIcon}
                    alt={movie.title} 
                    width="16"
                    height="18"
                     />
                    </Grid>
                    <Grid item>
                        <Typography fontSize={10} color='#E0E0E0' aria-label='Movie category'>
                            {movie.category}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Box sx={{width:"1rem", height:"1rem", bg:"#E0E0E0", borderRadius:"full"}}>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Typography fontSize={10} color='#E0E0E0' aria-label='Movie rating'>
                            {movie.rating}
                        </Typography>
                    </Grid>
                    </Grid>
                    <Typography  color='#E0E0E0' aria-label='Movie title' padding={0}>
                            {movie.title}
                    </Typography>
                </Stack>
                <Box style={{
                        position:"absolute",
                        top:"0",
                        right:"0",
                        left:"0",
                        display:"flex",
                        justifyContent:"flex-end",
                        padding:"16px"
                    }}>
                        <Box style={{
                        position:"absolute",
                        top:"0",
                        right:"0",
                        left:"0",
                        display:"flex",
                        justifyContent:"flex-end",
                        padding:"16px"
                    }}>

                        </Box>
                       
                        <Box
                        sx={{
                        p: "1rem",
                        backgroundColor: "black",
                        borderRadius: "100%",
                        cursor: "pointer",
                        "&: hover": { opacity: 0.8 },
                        }}
                        onClick={() => handleToggleBookmark(movie.id)}>
                                {movie.isBookmarked ? (<BookmarkIcon fill="#E0E0E0"/>) : (<BookmarkEmptyIcon />)}
                        </Box>
                </Box>
            </CardContent>  
        </Card>
  )
}

export default MovieTrendCard;