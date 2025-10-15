export type MovieType = {
  name: string;
  rating: number;
  path: string;
};

export type BackEndDataRecovery = {
  backdrop_path?: string;
  id?: number;
  genre_ids?: number[];
  overview?: string;
  poster_path: string;
  title: string;
  vote_average: number;
  vote_count?: number;
  release_date?: Date;
  genres?: string;
};

export type BackEndData = {
  page: number;
  results: BackEndDataRecovery[];
  total_pages: number;
  total_results: number;
};

export type MovieGeneralType = {
  title: string;
  poster_path: string;
  vote_average: number;
  id?: number;
};

export type CardsShowingUsersProps = {
  title: string;
  icon: string;
  link: string;
  lable?: string;
  movie: BackEndData;
};

export type unitCrewType = {
  crew: crewType[];
  cast: castType[];
  id?: number;
};

export type castType = {
  name: string;
  order: number;
};

export type crewType = {
  name: string;
  job: string;
  credit_id: string;
};

export type genreType = {
  genre: genreInType[];
};

export type genreInType = {
  id: number;
  name: string;
};