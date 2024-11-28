import React, { useState, SetStateAction, useContext } from "react";
import Layout from "../../layout/userLayout";
import {
  Box,
  Paper,
  InputBase,
  InputAdornment,
  Typography,
} from "@mui/material";
import SearchIcon from "../../assets/icons/icon-search.svg";
import { MovieDataType } from "../../assets/data";
import { MovieContext } from "../../context/movie-context";
import MovieList from "../../movie-list";

 const  Bookmark = () => {
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState<MovieDataType[]>([]);
  const { state } = useContext(MovieContext);
  const { movies } = state;
  const bookMarks = movies.filter((movie) => movie.isBookmarked === true)
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value; // This is guaranteed to be a string
    setSearch(searchValue); // Update the search state with the string value
    const newList = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchValue.toLowerCase()) // Now you can safely use toLowerCase()
    );
    setSearchList(newList);
  };
  
  return (
    <>
      <Box>
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "default",
            p: 1,
            backgroundColor: "#10141f",
            border: "none",
          }}
        >
          <InputBase
            placeholder="Search for movies or TV series"
            sx={{
              ml: 1,
              flex: 1,
              color: "white",
              border: "none",
            }}
            value={search}
            onChange={handleSearch}
            startAdornment={
              <InputAdornment position="start">
                <img
                  src={SearchIcon}
                  alt="search icon"
                  width={20}
                  height={20}
                />
              </InputAdornment>
            }
          />
        </Paper>
      </Box>
      <Box py={2} px={4}>
        {search === "" ? (
          <Box width="100%">
            <Box width="100%">
              <Typography variant="h5" component="h1" my={6} fontWeight={400}>
                Bookmarks
              </Typography>
              <MovieList recommendList={search === ""  ? bookMarks : searchList} />
            </Box>
          </Box>
        ) : (
          <Box width="100%">
            <Typography>
              Found {searchList.length} results for "{search}"{""}
            </Typography>
            <MovieList recommendList={searchList} />
          </Box>
        )}
      </Box>
    </>
  )
}

export default Bookmark;