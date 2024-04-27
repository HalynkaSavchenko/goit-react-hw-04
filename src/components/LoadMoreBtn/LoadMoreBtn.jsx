import css from './LoadMoreBtn.module.css'
export default function LoadMoreBtn({onClick, hasMore}) {
    return(
        <div className={hasMore ? css.container : css.hidden}>
            <button className={css.btn} onClick={onClick} type="submit">Load more</button>
        </div>
    )
}