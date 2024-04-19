import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';

const ACCESS_KEY = '6nDLBNSh_BS4DoWCbvaZUVp9Yf8CTTNWzejqNlnFLac';

export const fetchData = async (searchQuery, currentPage) => {
    const response = await axios.get('/search/photos', {
        params: {
            query: searchQuery,
            page: currentPage,
            per_page: 12,
            client_id: ACCESS_KEY,
        }
    });
    
    return response.data.results
}