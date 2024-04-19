export default function ImageCard({
    alt_description,
    description, 
    likes,
    small,
    name
}) {
    return(
        <div>
            <div>
                <img src={small} alt={alt_description} />
            </div>
            <div>
                <ul>
                    <li>Photo title:<span>{description}</span></li>
                    <li>Author name:<span>{name}</span></li>
                    <li>Likes:<span>{likes}</span></li>
                </ul>
            </div>
        </div>
    )
}