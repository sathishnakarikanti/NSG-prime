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
import AddIcon from "../../assets/icons/add-button-svgrepo-com.svg"
import AddNewMovie from "../../components/form-items/addMovie";
import { useLocation } from "react-router-dom";
function Movies() {
  const [search, setSearch] = useState("");
  const [active, setActive] = useState(false);
  const [searchList, setSearchList] = useState<MovieDataType[]>([]);
  const { state } = useContext(MovieContext);
  const { movies } = state;

  const location = useLocation();
  console.log(location.pathname.split("/")[1],'location');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setSearch(searchValue);
    const newList = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchList(newList);
  };

  // Toggle modal open/close
  const HandleToggle = () => {
    setActive((prevActive) => !prevActive); // Toggles the modal state
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
      <AddNewMovie open={active} onClose={HandleToggle} /> {/* Close modal with HandleToggle */}
      <Box py={2} px={4}>
        {search === "" ? (
          <Box width="100%">
            <Box width="100%">
              <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="h5" component="h1" my={6} fontWeight={400}>
                  Movies
                </Typography>
                { location.pathname.split("/")[1] === "admin" ?  
                <img
                  src={AddIcon}
                  alt="text"
                  style={{
                    width: "40px",
                    height: "40px",
                    marginLeft: "15px",
                    cursor: "pointer",
                  }}
                  onClick={HandleToggle} // Open modal on click
                />
                : ""}
              </Box>
              <MovieList recommendList={search === "" ? movies : searchList} />
            </Box>
          </Box>
        ) : (
          <Box width="100%">
            <Typography>
              Found {searchList.length} results for "{search}"
            </Typography>
            <MovieList recommendList={searchList} />
          </Box>
        )}
      </Box>
    </>
  );
}
export default Movies;