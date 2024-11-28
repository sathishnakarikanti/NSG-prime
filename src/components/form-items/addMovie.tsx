import { Box, Modal, TextField, IconButton, Typography, Button } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { MovieContext } from '../../context/movie-context';
import { MovieDataType } from '../../assets/data';
import { title } from 'process';

interface AddFilmProps {
  open: boolean;
  onClose: () => void;
}

// Common styles for TextField
const textFieldStyles = {
  mt: 2,
  '& .MuiInput-underline:before': { borderBottomColor: 'black' }, // Normal underline color
  '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottomColor: 'black' }, // Hover underline color
  '& .MuiInput-underline:after': { borderBottomColor: 'black' }, // Focus underline color
  '& .MuiInputLabel-root': { color: 'black' }, // Label color default
  '& .MuiInputLabel-root.Mui-focused': { color: 'black' }, // Label color on focus
};

interface TrendingInterface {
    small:string,
    large:string
}
interface RegularInterface {
    small:string,
    medium:string,
    large:string
}
interface FormData extends MovieDataType{ // for adding some other types to existed interface.
    // id: string;
    // title: string;
    // thumbnail:  {
    //     trending:TrendingInterface,
    //     regular:RegularInterface
    // };
    // year: number | null;
    // category: string;
    // rating: string;
    // isBookmarked: boolean;
    // isTrending: boolean;
    imageLink?:string;
}

interface ErrorFormData {
    title: string;
    category: string;
    rating: string;
    year: string;
}
function AddNewMovie({ open, onClose }: AddFilmProps) {
    let {state } = useContext(MovieContext)
  const [formData, setFormData] = useState<FormData>({
    id:"",
    title: "",
    category: "",
    year:  null,
    rating: "",
    imageLink:"",
    isBookmarked:false,
    isTrending:false,
    thumbnail: {
        trending:{
            small: "./thumbnails/bottom-gear/trending/small.jpg",
            large: "./thumbnails/bottom-gear/trending/large.jpg",
        },
        regular:{
            small: "./thumbnails/bottom-gear/regular/small.jpg",
            medium: "./thumbnails/bottom-gear/regular/medium.jpg",
            large: "./thumbnails/bottom-gear/regular/large.jpg",
        }
    }
  });

  const [errorFormData, setErrorFormData] = useState<ErrorFormData>({
    title: "",
    category: "",
    year:  "",
    rating: "", 
  })

  // Callback function to handle input changes
  const handleInputValues = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value } = target;
    setErrorFormData(prevState => ({...prevState, [name] : ""}))
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  const validateForm= ():boolean => {
    let status:boolean = true
    if(formData.title.trim() === ""){
        setErrorFormData(prevState =>  ({...prevState, title:"Please enter the title."} ));
        status = false;
    }if(formData.category.trim() === ""){
        setErrorFormData(prevState =>  ({...prevState, category:"Please enter the category."} ));
        status = false;
    }if(formData.rating.trim() === ""){
        setErrorFormData(prevState =>  ({...prevState, rating:"Please enter the rating."} ));
        status = false;
    }if(formData.year === null){
        setErrorFormData(prevState =>  ({...prevState, year:"Please enter the year."} ));
        status = false;
    }
    return status
  }

  const handleClick = () => {
    let status = validateForm();
    if(status){
     let obj = {...formData, id:(state.movies.length + 1).toString() }
    state.movies.unshift(obj as FormData);
    setFormData({
        id:"",
        title: "",
        category: "",
        year:  null,
        rating: "",
        imageLink:"",
        isBookmarked:false,
        isTrending:false,
    } as FormData)
    clearValidations()
    onClose()
    }
}

const clearValidations = () => {
    setErrorFormData({
        title: "",
        category: "",
        year:  "",
        rating: "", 
    })
}
const handleClose = () =>{
    clearValidations();
    onClose();
}
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        component="form"
        sx={{
          position: 'absolute', // Center the modal
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)', // Using transform for centering
          width: 500,
          backgroundColor: '#777b85', // Background color
          boxShadow: '0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12)', // Box shadow
          padding: 4, // Padding (32px)
          borderRadius: 2, // Border radius (8px)
          border: 'none', // No border
        }}
        noValidate
        autoComplete="off"
      >
        {/* Close Button */}
        <IconButton
          aria-label="close"
          onClick={() => handleClose()}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
          }}
        >
          <Typography variant="h6">X</Typography> {/* Use a simple X as close button */}
        </IconButton>

        {/* Form Fields */}
        <TextField
          id="standard-basic-title"
          label="Title"
          variant="standard"
          fullWidth
          sx={textFieldStyles}
          name="title"
          value={formData.title}
          onChange={(e) => handleInputValues(e)} // Use callback function here
        />
        <p style={{color:"red"}}>{errorFormData?.title}</p>
        <TextField
          id="standard-basic-year"
          label="Year"
          variant="standard"
          fullWidth
          sx={textFieldStyles}
          name="year"
          value={formData.year}
          onChange={(e) => handleInputValues(e)} // Use callback function here
        />
        <p style={{color:"red"}}>{errorFormData?.year}</p>
        <TextField
          id="standard-basic-category"
          label="Category"
          variant="standard"
          fullWidth
          sx={textFieldStyles}
          name="category"
          value={formData.category}
          onChange={(e) => handleInputValues(e)} // Use callback function here
        />
        <p style={{color:"red"}}>{errorFormData?.category}</p>
        <TextField
          id="standard-basic-rating"
          label="Rating"
          variant="standard"
          fullWidth
          sx={textFieldStyles}
          name="rating"
          value={formData.rating}
          onChange={(e) => handleInputValues(e)} // Use callback function here
        />
        <p style={{color:"red"}}>{errorFormData?.rating}</p>
         <TextField
          id="standard-basic-rating"
          label="Image Link"
          variant="standard"
          fullWidth
          sx={textFieldStyles}
          name="imageLink"
          value={formData.imageLink}
          onChange={(e) => handleInputValues(e)} // Use callback function here
        />
        <Button 
  variant="contained" 
//   disabled 
onClick={()=>handleClick()}
  sx={{
    mt: 5, 
    textAlign: "center", 
    backgroundColor: "black !important",  // Use !important to override MUI styles
    color: "white !important",            // Ensure the text is white
    '&.Mui-disabled': {                   // Target the disabled state
      backgroundColor: "black",           // Make sure the background stays black
      color: "white"                      // Ensure text remains white
    }
  }}
>
  Create
</Button>
    </Box>
    </Modal>
  );
}

export default AddNewMovie;
