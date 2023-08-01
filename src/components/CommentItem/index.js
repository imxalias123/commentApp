// Write your code here
import './index.css'

const CommentItem = props => {
  const {eachDetails, onDeleteFunction} = props
  const {id, name, isLiked, date, ClassNames, comment} = eachDetails
  const onClickDelete = () => {
    onDeleteFunction(id)
  }
  const likedOrNot = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'

  return (
    <li>
      <div className={ClassNames}>
        <p className="initial">{name[0]}</p>
        <p className="name">{name}</p>
        <p className="date">{date}</p>
      </div>
      <p>{comment}</p>
      <div>
        <img src={likedOrNot} alt="like" />
        <button type="button" onClick={onClickDelete}>
          <img
            data-testid="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          />
        </button>
      </div>
    </li>
  )
}
export default CommentItem
