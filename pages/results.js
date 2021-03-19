import Heading from "../components/Heading";
import axios from "axios";

const Results = (props) => {
  return (
    <>
      <Heading heading="Results" />
      {props.movies.map((movie) => {
        return <h3 key={movie.id}>{movie.title}</h3>;
      })}
    </>
  );
};

export async function getStaticProps() {
  let movies = [];

  try {
    const response = await axios.get("https://ghibliapi.herokuapp.com/films/");
    console.log(response.data);
    movies = response.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      movies: movies,
    },
  };
}

export default Results;
