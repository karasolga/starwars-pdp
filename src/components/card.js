import React from 'react'

class Card extends React.Component {

  state = {
    isExpand: false
  }

  render() {
    const { item } = this.props
    const { isExpand } = this.state
    return (
      <div className="card" onClick={this.onClick}>
        <div>{item.name}</div>
        {isExpand && this.renderDetails()}
      </div>
    )
  }

  onClick = () => {
    this.setState({
      isExpand: !this.state.isExpand
    })
  }

  renderDetails = () => {
    const { item } = this.props

    return (
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
    )
  }

}

export default Card
