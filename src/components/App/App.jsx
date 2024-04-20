import { useEffect, useState } from 'react';
import { fetchData } from '../../image-api';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageModal from '../ImageModal/ImageModal';


export default function App() {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState('');
    const [modalImage, setModalImage] =([])
    const [isOpen, setIsOpen] = useState(false)

    const handleSearch = (newQuery) => {
        setQuery(newQuery);
        setPage(1);
        setImages([]);
    };

    const handleLoadMore = () => {
        setPage(page+1)
    };

    useEffect(() => {
        if (query ==='') {
            return
        }
    
    async function getImages () {
        try {
            setError(false);
            setIsLoading(true);
            const data = await fetchData(query, page);
            setImages((prevImages) => {
                return [...prevImages, ...data];
            });
        } catch(error) {
            setError(true);
        } finally {
            setIsLoading(false)
        }
    }
        getImages();
    }, [page, query]);

    function openModal() {
        setIsOpen(true)
    };

    function closeModal() {
        setIsOpen(false)
    }

    const handleImageClick = (image) => {
        setModalImage(image);
        setIsOpen(true);
    };
    

    
    return(
        <div>
            <SearchBar onSearch = {handleSearch}/>
            {error && <ErrorMessage/>}
            {images.length > 0 && <ImageGallery items={images} onImageClick={handleImageClick}/>}
            {isLoading && <Loader/>}
            <LoadMoreBtn onClick ={handleLoadMore}/>
            <ImageModal 
            onClose={closeModal}
            onOpen={openModal}
            state={isOpen}
            img={modalImage}/>
        </div>
    )
}