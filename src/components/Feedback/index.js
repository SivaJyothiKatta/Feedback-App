// Write your React code here.

import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    isSelected: false,
  }

  isClickEmoji = () => {
    this.setState({
      isSelected: true,
    })
  }

  renderFeedback = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="container">
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emoji-list">
          {emojis.map(emoji => (
            <li key={emoji.id}>
              <button
                className="button"
                type="button"
                onClick={this.isClickEmoji}
              >
                <img className="image" src={emoji.imageUrl} alt={emoji.name} />
                <br />
                <span className="emoji-text">{emoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankYou = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thank-you-container">
        <img className="love-emoji" src={loveEmojiUrl} alt="love emoji" />
        <h1 className="thank-you-heading">Thank You</h1>
        <p className="description">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isSelected} = this.state

    return (
      <div className="main-container">
        <div className="card">
          {isSelected ? this.renderThankYou() : this.renderFeedback()}
        </div>
      </div>
    )
  }
}

export default Feedback
