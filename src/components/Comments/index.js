import {Component} from 'react'
import './index.css'
/*import 'CommentItem' from '../CommentItem'*/

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
  render() {
    return (
      <div className="bg-container">
        <h1>Comments</h1>
        <img
          className="img"
          alt="comments"
          src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
        />
        <div>
          <p>Say something about 4.0 Technologies</p>
          <form className="form-element" onSubmit={this.onSubmitEvent}>
            <input className="input-name" type="text" placeholder="Your Name" />
            <textarea className="text" placeholder="Your Comment"></textarea>
            <button type="submit" className="btn">
              Add Comment
            </button>
          </form>
        </div>
        <img src="" alt="" />
      </div>
    )
  }
}
export default Comments
