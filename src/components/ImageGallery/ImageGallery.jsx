import ImageCard from '../ImageCard/ImageCard'

export default function ImageGallery({items}) {
    return(
        <ul>
	      {items.map((item)=> (
            <li key={item.id}>
               <ImageCard
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