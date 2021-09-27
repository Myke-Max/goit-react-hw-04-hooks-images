import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react/cjs/react.development";
import s from "./searchBar.module.css";

export default function SearchBar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState("");
  const handleQueryValue = (e) => {
    setSearchQuery(e.currentTarget.value.toLowerCase());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === "") {
      return toast.error("Wow,specify your wishes");
    }
    onSubmit(searchQuery);
    setSearchQuery("");
  };
  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.SearchForm__button}>
          <span className={s.SearchForm__buttonLabel}>Search</span>
        </button>

        <input
          onChange={handleQueryValue}
          value={searchQuery}
          className={s.SearchForm__input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

// class SearchBar extends Component {
//   state = {
//     searchQuery: '',
//   };
//   handleQueryValue = e => {
//     this.setState({ searchQuery: e.currentTarget.value.toLowerCase() });
//   };
//   handleSubmit = e => {
//     e.preventDefault();
//     if (this.state.searchQuery.trim() === '') {
//       return toast.error('Wow,specify your wishes');
//     }
//     this.props.onSubmit(this.state.searchQuery);
//     this.setState({ searchQuery: '' });
//   };

//   render() {
//     const { searchQuery } = this.setState;
//     return (
//       <header className={s.Searchbar}>
//         <form className={s.SearchForm} onSubmit={this.handleSubmit}>
//           <button type="submit" className={s.SearchForm__button}>
//             <span className={s.SearchForm__buttonLabel}>Search</span>
//           </button>

//           <input
//             onChange={this.handleQueryValue}
//             value={searchQuery}
//             className={s.SearchForm__input}
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//           />
//         </form>
//       </header>
//     );
//   }
// }

// export default SearchBar;
