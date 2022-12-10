import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import SingleContent from "../../Component/SingleContent/SingleContent";
import "./Trending.css"
import CoustomPagination from "../../Component/Pagination/CoustomPagination";

const Trending = () => {
  const [content, setContent] = useState([]);
  const[page,setPage]=useState(1);
  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );
//    console.log(data.results);
    setContent(data.results);
  };
  useEffect(() => {
    fetchTrending();
  }, [page]);
  return (
    <div>
      <span className="pageTitle">Trending</span>
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
      <CoustomPagination page={page} setPage={setPage}/>
    </div>
  );
};

export default Trending;
