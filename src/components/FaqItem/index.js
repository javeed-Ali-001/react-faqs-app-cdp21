import {Component} from 'react'

import './index.css'

const plusImg =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const minusImg =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {
    faqsStatus: false,
  }

  onClickIcon = () => {
    this.setState(prevState => ({
      faqsStatus: !prevState.faqsStatus,
    }))
  }

  render() {
    const {faqsStatus} = this.state
    const {faqsDetails} = this.props
    const {answerText, questionText} = faqsDetails
    const plusOrMinusIcon = faqsStatus ? minusImg : plusImg
    const altImgText = faqsStatus ? 'minus' : 'plus'
    return (
      <li className="faqsItem-container">
        <div className="question-and-plusMinus-container">
          <h1 className="question-text">{questionText}</h1>
          <button
            onClick={this.onClickIcon}
            className="pm-button"
            type="button"
          >
            <img src={plusOrMinusIcon} alt={altImgText} className="img-icon" />
          </button>
        </div>
        {faqsStatus && <p className="answer-text">{answerText}</p>}
      </li>
    )
  }
}

export default FaqItem
