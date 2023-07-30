import {Component} from 'react'

import './index.css'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  //   changeFaqStatus=(id)=>{
  //       const {faqsList}=this.props
  //       const findTheFaq
  //       this.setState(prevState=>({
  //           faqsStatus:!prevState.faqsStatus
  //       }))
  //   }

  render() {
    const {faqsList} = this.props
    return (
      <div className="app-container">
        <div className="faqs-container">
          <h1 className="heading">FAQs</h1>
          <ul className="list-type">
            {faqsList.map(eachItem => (
              <FaqItem faqsDetails={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
