import axios from "axios";

export async function GetData() {
  {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
    );
    console.log(response);
  }
}

export const getMovieDetails = async (MovieId: string) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${MovieId}?language=en-US`,
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY} `,
      },
    }
  );
  return res.data;
};

export const getMovieActors = async (id: string) => {
  const actors = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY} `,
      },
    }
  );
  console.log(actors);

  return actors.data;
};
// /movie/${id}/credits?language=en-US

export const getSimilarMovies = async (id: string) => {
  const similarMovies = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`,
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY} `,
      },
    }
  );

  return similarMovies.data;
};
// /movie/${id}/similar?language=en-US&page=1
