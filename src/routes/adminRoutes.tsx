// import MovieIcon from "../components/icons/movie-icon";
import Bookmark from "../pages/bookmark";
import Error from "../pages/errors";
import Home from "../pages/home";
import Movies from "../pages/movie";
import TVSeries from "../pages/tv-series";
import HomeIcon from "../assets/icons/icon-nav-home.svg"
import BookmarksIcon from "../assets/icons/icon-nav-bookmark.svg"
import TVSeriesIcon from "../assets/icons/icon-nav-tv-series.svg"
import MovieIcon from "../assets/icons/icon-nav-movies.svg"


export interface AdminRoutes {
    path:string,
    element:React.ReactNode,
    errorElement:React.ReactNode,
    layout:string,
    name:string,
    icon?:string,
    link:string
}
export const adminRoutes:AdminRoutes[] = [
    {
        path:"/home",
        element: <Home />,
        errorElement : <Error />,
        layout:"/admin",
        name: "Home",
        icon: HomeIcon,
        link: "/admin/home"
    },
    {
        path :"/movies",
        element:<Movies />,
        errorElement:<Error />,
        layout:"/admin",
        name: "Movies",
        icon: MovieIcon,
        link: "/admin/movies"
    },
    {
        path:"bookmarks",
        element:<Bookmark />,
        errorElement:<Error />,
        layout:"/admin",
        name: "Bookmarks",
        icon: BookmarksIcon,
        link: "/admin/bookmarks"
    },
    {
        path:"tv-series",
        element:<TVSeries />,
        errorElement:<Error />,
        layout:"/admin",
        name: "TV-Series",
        icon: TVSeriesIcon,
        link: "/admin/tv-series"
    },
    // {
    //     path:"picture-stats",
    //     element:<AddFilm />,
    //     errorElement:<Error />
    // },
]