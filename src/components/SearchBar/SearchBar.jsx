import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css'
// import { Simulate } from 'react-dom/test-utils';
export default function SearchBar({onSearch}) {
    function handleSubmit(event) {
        const notify = () => toast ('Please enter a search value', {
            duration: 4000, 
            position: 'top-right',
            style: {
                backgroundColor: 'yellow'
            },
            icon: '👏'
        })
        event.preventDefault();
        const searchQuery = event.target.elements.search.value.trim();
        if (searchQuery !=='') {
            onSearch(searchQuery)
        }
       else {
        notify()
       }
    }
    return(
        <header>
            <form onSubmit={handleSubmit}>
                <input type='text' autoComplete='off' autoFocus placeholder="Search images and photos" name='search'/>
                <button type='submit'>Search</button>
                <Toaster/>
            </form>
        </header>
    )
}