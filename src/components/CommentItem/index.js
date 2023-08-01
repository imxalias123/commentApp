// Write your code here
import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {eachDetails, onDeleteFunction} = props
  const {id, name, isLiked, date, ClassNames, comment} = eachDetails
  const onClickDelete = () => {
    onDeleteFunction(id)
  }
  const likedOrNot = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'

  const time = formatDistanceToNow(date)

  return (
    <li>
      <div className={ClassNames}>
        <p className="initial">{name[0].toUpperCase()}</p>
        <p className="name">{name}</p>
        <p className="date">{time}</p>
      </div>
      <p>{comment}</p>
      <div>
        <img src={likedOrNot} alt="like" />
        <button type="button" data-testid="delete" onClick={onClickDelete}>
          <img
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          />
        </button>
      </div>
    </li>
  )
}
export default CommentItem
