export type MovieType = {
  name: string;
  rating: number;
  path: string;
};

export type BackEndDataRecovery = {
  backfrop_path?: string;
  genre_ids?: number[];
  overview?: string;
  poster_path: string;
  title: string;
  vote_average: number;
  vote_count?: number;
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
};

export type CardsShowingUsersProps = {
  title: string;
  icon: string;
  link: string;
  lable?: string;
  movie: BackEndData;
};
