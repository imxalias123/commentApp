import {Component} from 'react'

import {v4} from 'uuid'
import './index.css'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {
    commentList: [],
    name: '',
    comment: '',
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  updateLike = id => {
    this.setState(prevState =>
      prevState.commentList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return {eachComment}
      }),
    )
  }

  onDeleteFunction = id => {
    const {commentList} = this.state
    this.setState({
      commentList: commentList.filter(comment => comment.id !== id),
    })
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment, commentList} = this.state
    const ContainerBackgroundClassNames =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]

    const newComment = {
      id: v4(),
      name,
      comment,
      commentList,
      isLiked: false,
      date: new Date(),
      ClassNames: ContainerBackgroundClassNames,
    }
    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],

      name: '',
      comment: '',
    }))
  }

  render() {
    const {comment, name, commentList} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Comments</h1>
        <div className="flex-container">
          <img
            className="img"
            alt="comments"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
          />
          <div>
            <p className="para">Say something about 4.0 Technologies</p>
            <form className="form-element" onSubmit={this.onAddComment}>
              <input
                onChange={this.onChangeName}
                className="input-name"
                type="text"
                placeholder="Your Name"
                value={name}
              />
              <textarea
                placeholder="Your Comment"
                value={comment}
                onChange={this.onChangeComment}
                className="text"
                rows="10"
              />

              <button type="submit" className="btn">
                Add Comment
              </button>
            </form>
          </div>
        </div>
        <hr className="hr-line" />
        <p>
          <span className="commentCount">{commentList.length}</span>
          Comment
        </p>
        <ul>
          {commentList.map(each => (
            <CommentItem
              key={each.id}
              eachDetails={each}
              onDeleteFunction={this.onDeleteFunction}
              updateLike={this.updateLike}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Comments
