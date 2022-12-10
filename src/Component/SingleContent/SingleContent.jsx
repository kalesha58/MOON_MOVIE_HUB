import React from "react";
import {img_300, unavailable} from "../../config/config"
import Badge from '@mui/material/Badge';
import "./SingleContent.css"
import TransitionsModal from "../ContentModal/ContentModal";
const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
    const d=vote_average>6;
  return <TransitionsModal media_type={media_type} id={id}>
     <Badge badgeContent={vote_average} color={d?"primary":"secondary"}>
  
    </Badge>
    <img className="poster" src={poster?`${img_300}/${poster}`:unavailable} alt={title} />
    <b className="title">{title}</b>
    <span className="subtitle">{media_type==="tv"?"Tv series":"Movie"}
    <span className="subtitle">{date}</span>
    </span>
  </TransitionsModal>;
};

export default SingleContent;
