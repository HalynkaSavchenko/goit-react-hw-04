
import css from './SearchBar.module.css'
export default function SearchBar({onSearch}) {
    function handleSubmit(event) {
        event.preventDefault();
        const searchQuery = event.target.elements.search.value.trim();
        onSearch(searchQuery)
    }
    return(
        <header>
            <form onSubmit={handleSubmit}>
                <input type='text' autoComplete='off' autoFocus placeholder="Search images and photos" name='search'/>
                <button type='submit'>Search</button>
            </form>
        </header>
    )
}