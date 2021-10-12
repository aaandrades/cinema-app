export const initialMovieState: MoviesState = {
  results: [],
  loading: true,
};

export interface MoviesState {
  results: MovieInterface[];
  loading: Boolean;
  currentMovie?: any;
  searchResults?: any;
}

export interface MovieInterface {
  id: string;
  rank: string;
  title: string;
  fullTitle: string;
  year: string;
  image: string;
  crew: string;
  imDbRating: string;
  imDbRatingCount: string;
}

export interface ResultsInterface {
  erroMesage: string;
  items: MovieInterface[];
}

export interface MassiveResultsInterface {
  errorMessage: string;
  expression: string;
  results: Array<any>;
  searchType: string;
}

export const initialSearch = {
  errorMessage: '',
  expression: '',
  results: [],
  searchType: '',
};
