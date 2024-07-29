import React from "react";
import css from "../components/MovieInfo.module.css"

export default function MovieInfo({ movie: {title, overview, vote_average, tagline, poster_path, release_date }
}) {
    const baseUrl = "https://image.tmdb.org/t/p/w500/";
    const posterUrl = `${baseUrl}${poster_path}`;
    
    return (
        <div className={css.container}>
            <h2>{title}</h2>
            <img src={posterUrl} alt={title} style={{ width: '200px', height: 'auto' }} />
            <p> <strong> User Score: </strong>  {vote_average} </p>
            <p> <strong>Release date: </strong> {release_date}</p>
            <p> <strong> Overview: </strong> {overview}</p>
            <p> <strong> Tagline: </strong>  {tagline}</p>
          
        </div>
  );
};
