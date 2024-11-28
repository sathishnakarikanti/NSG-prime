import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Error from "../pages/errors";
import Movies from "../pages/movie";
import Bookmark from "../pages/bookmark";
import TVSeries from "../pages/tv-series";
import AddFilm from "../pages/picture-stats";
import Login from "../pages/login/index";
import HomeIcon from "../assets/icons/icon-nav-home.svg"
import BookmarksIcon from "../assets/icons/icon-nav-bookmark.svg"
import TVSeriesIcon from "../assets/icons/icon-nav-tv-series.svg"
import MovieIcon from "../assets/icons/icon-nav-movies.svg"

export const userRoutes = [
    {
        path:"/home",
        element: <Home />,
        errorElement : <Error />,
        layout:"/user",
        name: "Home",
        icon: HomeIcon,
        link: "/user/home"
    },
    {
        path :"/movies",
        element:<Movies />,
        errorElement:<Error />,
        layout:"/user",
        name: "Movies",
        icon: MovieIcon,
        link: "/user/movies"
    },
    {
        path:"bookmarks",
        element:<Bookmark />,
        errorElement:<Error />,
        layout:"/user",
        name: "Bookmarks",
        icon: BookmarksIcon,
        link: "/user/bookmarks"
    },
    {
        path:"tv-series",
        element:<TVSeries />,
        errorElement:<Error />,
        layout:"/user",
        name: "TV-Series",
        icon: TVSeriesIcon,
        link: "/user/tv-series"
    },
    // {
    //     path:"/user-sign-in",
    //     element:<Login />,
    //     errorElement:<Error />
    // }
];