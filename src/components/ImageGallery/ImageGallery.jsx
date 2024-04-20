import ImageCard from '../ImageCard/ImageCard'

export default function ImageGallery({items, onImageClick}) {
  const handleImageClick = (image) => {
    if (onImageClick) {
        onImageClick(image);
    }
};

    return(
        <ul>
	      {items.map((item)=> (
            <li key={item.id}>
               <ImageCard
               onImageClick={handleImageClick}
               alt_description={item.alt_description}
               description={item.description}
               likes={item.likes}
               urls={item.urls.small}
               name={item.user.name}/>
            </li>
          ))}   
        </ul>
    )
}