import css from "./SearchBar.module.css"
import { useSearchParams } from "react-router-dom";


export const SearchForm = ({ onSearch }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const title = searchParams.get("title");

    const handleSubmit = (evt) => {
     evt.preventDefault();
     const form = evt.target;
        const topic = form.elements.topic.value;
        if (form.elements.topic.value.trim() === "") {
   alert("Please enter search term!")
   return;
  }

  onSearch(topic);
    form.reset();
  };

    return (
        <div className={css.container}>
            <form className={css.form} onSubmit={handleSubmit}>
                <input type="text" name="topic"  value={title} placeholder="Enter movie title..." className={css.input} onSubmit={handleSubmit} />
                <button className={css.btn}>Search</button>
              
            </form>
        </div>

 );
};

