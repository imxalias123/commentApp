// Write your code here
import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {eachDetails, onDeleteFunction, updateLike} = props
  const {id, name, isLiked, date, ClassNames, comment} = eachDetails

  const onClickDelete = () => {
    onDeleteFunction(id)
  }

  const onClickLike = () => {
    updateLike(id)
  }

  const likedClassName = isLiked ? 'buttonOn' : 'buttonOff'

  const likedOrNot = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const time = formatDistanceToNow(date)

  return (
    <li>
      <div className="flex-comment">
        <p className={`initial ${ClassNames}`}>{name[0].toUpperCase()}</p>
        <p className="name">{name}</p>
        <p className="date">{time} ago</p>
      </div>
      <p className="comment">{comment}</p>

      <div>
        <img src={likedOrNot} alt="like" />
        <button
          className={`like ${likedClassName}`}
          type="button"
          onClick={onClickLike}
        >
          Like
        </button>
        <button type="button" onClick={onClickDelete} data-testid="delete">
          <img
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}
export default CommentItem
