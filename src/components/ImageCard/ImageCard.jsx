import css from './ImageCard.module.css'
export default function ImageCard({
    onImageClick,
    alt_description,
    description, 
    likes,
    urls,
    name,
    modalUrls
}) {
    const handleClick = () => {
        const imageData = {
            modalUrl: modalUrls
        };
        onImageClick(imageData);
    };
    return(
        <div>
            <div onClick={handleClick}>
                <img src={urls} alt={alt_description} />
            </div>
            <div>
                <ul className={css.list}>
                    <li className={css.item}>Author name: <span>{name}</span></li>
                    <li className={css.item}>Likes: <span>{likes}</span></li>
                </ul>
            </div>
        </div>
    )
}