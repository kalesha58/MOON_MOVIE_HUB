import axios from "axios";
import React from "react";
import { useEffect } from "react";
import Chip from '@mui/material/Chip';

const Genres = ({
  genres,
  setGenres,
  selectedGenres,
  setSelectedGenres,
  setPage,
  type,
}) => {
    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter((g) => g.id !== genre.id));
        setPage(1);
      };
    
      const handleRemove = (genre) => {
        setSelectedGenres(
          selectedGenres.filter((selected) => selected.id !== genre.id)
        );
        setGenres([...genres, genre]);
        setPage(1);
      };

  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setGenres(data.genres);
  };
  console.log(genres);
  useEffect(() => {
    fetchGenres();
    // FOR UNMOUNTED
    return () => {
        setGenres({});
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div style={{ padding: "6px 0" }}>
      {selectedGenres &&
        selectedGenres.map((el) => (
          <Chip
            style={{ margin: 2 }}
            label={el.name}
            key={el.id}
            color="success"
            clickable
            size="small"
            onDelete={() => handleRemove(el)}
          />
        ))}
         {genres && genres.map((genre) => (
        <Chip
          style={{ margin: 2 }}
          label={genre.name}
          key={genre.id}
          clickable
          size="small"
          color="primary"
          onClick={() => handleAdd(genre)}
        />
      ))}
      
    </div>
  );
};

export default Genres;
