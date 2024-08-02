import React from "react";
import css from "./SearchBar.module.css"
import { useSearchParams } from "react-router-dom";


export const SearchForm = ({ onSearch }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query") || "";

    const handleSubmit = (evt) => {
     evt.preventDefault();
     const form = evt.target;
     const topic = form.elements.topic.value.trim();
      if (topic === "") {
        alert("Please enter search term!");
        return;
      };
      onSearch(topic);
      setSearchParams({ query: topic });
      form.reset();
    };
  



    return (
        <div className={css.container}>
            <form className={css.form} onSubmit={handleSubmit}>
          <input type="text" name="topic" value={query}
        onChange={(e) => setSearchParams({ query: e.target.value })}
           placeholder="Enter movie title..." className={css.input}  />
                <button type="submit" className={css.btn}>Search</button>
              
        </form>
       
        </div>

 );
};

