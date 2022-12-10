import axios from "axios";
import React, { useEffect, useState } from "react";
import Genres from "../../Component/Genres";
import CoustomPagination from "../../Component/Pagination/CoustomPagination";
import SingleContent from "../../Component/SingleContent/SingleContent";
import useGenre from "../../Hooks/useGenre";

const Movies = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumofPages] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const genreforURL = useGenre(selectedGenres);
  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
    );
    console.log(data);
    setContent(data.results);
    setNumofPages(data.total_pages);
  };
  useEffect(() => {
    fetchMovies();
  }, [page,genreforURL]);
  return (
    <div>
      <span className="pageTitle">Movies</span>
      <Genres
        type="movie"
        genres={genres}
        setGenres={setGenres}
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        setPage={setPage}
      />

      <div className="trending">
        {content &&
          content.map((el) => (
            <SingleContent
              key={el.id}
              id={el.id}
              poster={el.backdrop_path}
              title={el.title || el.name}
              date={el.first_air_date || el.release_date}
              media_type={el.media_type}
              vote_average={el.vote_average}
            />
          ))}
      </div>
      {numOfPages > 1 && (
        <CoustomPagination
          page={page}
          setPage={setPage}
          numOfPages={numOfPages}
        />
      )}
    </div>
  );
};

export default Movies;
