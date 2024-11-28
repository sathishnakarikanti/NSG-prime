import { ReactNode, createContext, useReducer } from "react";
import { MovieDataType, moviesData } from "../assets/data";

interface MovieContextProps {
  children: ReactNode;
}

interface MovieState {
  movies: MovieDataType[];
}

interface MovieAction {
  type: string;
  id: string;
}

// movies array
const MovieList: MovieDataType[] = moviesData;

//main object
const initialMovieState: MovieState = {
  movies: MovieList,
};

const MovieReducer = (state: MovieState, action: MovieAction): MovieState => {
  console.log(state, action, 'action');
  switch (action.type) {
    case "TOGGLE BOOKMARK":
      return {
        ...state,
        movies: state.movies.map((movie) => {
          if (movie.id === action.id) {
            return { ...movie, isBookmarked: !movie.isBookmarked };
          }
          return movie;
        }),
      };
    default:
      return state;
  }
};

export const MovieContext = createContext<{
  state: MovieState;
  dispatch: React.Dispatch<MovieAction>;
}>({
  state: initialMovieState,
  dispatch: () => {},
});

export const MovieProvider = ({ children }: MovieContextProps) => {
  console.log(children, 'children')
  const [state, dispatch] = useReducer(MovieReducer, initialMovieState);
  console.log(state, 'state');
  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};
