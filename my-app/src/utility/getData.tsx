import axios from "axios";

export async function GetData() {
  {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
    );
    console.log(response);
  }
}
