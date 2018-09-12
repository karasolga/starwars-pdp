import React, { Component } from 'react'
import Popup from './popup'
import IconPeople from './icon-people'

class Card extends Component {

  state = {
    isExpand: false,
    isPopupActive: false
  }

  render() {
    const { item } = this.props
    const { isExpand, isPopupActive } = this.state
    return (
      <div className="card">
        <div onClick={this.onClick}>{item.name}</div>
        <IconPeople/>
        {isExpand && this.renderDetails()}
        {isPopupActive && <Popup item={item} onClose={this.onClose}/> }
      </div>
    )
  }

  onClick = () => {
    this.setState({
      isExpand: !this.state.isExpand
    })
  }

  onClose = () => {
    this.setState({
      isPopupActive: !this.state.isPopupActive
    })
  }

  onShowMore = () => {
    this.setState({
      isPopupActive: !this.state.isPopupActive
    })

  }

  renderDetails = () => {
    const { item } = this.props

    return (
      <div className="card__details">
        <ul className="card__list">
          <li className="card__item">
            <span>Gender</span>
            <span>{item.gender}</span>
          </li>
          <li className="card__item">
            <span>Height</span>
            <span>{item.height}</span>
          </li>
          <li className="card__item">
            <span>Weight</span>
            <span>{item.mass}</span>
          </li>
        </ul>
        <div className="card__link" onClick={this.onShowMore}>show more</div>
      </div>
    )
  }

}

export default Card
