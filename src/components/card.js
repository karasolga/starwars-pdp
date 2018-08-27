import React from 'react'

class Card extends React.Component {

  render() {
    const { item } = this.props
    return (
      <div className="card" onClick={this.onClick}>
        <div>{item.name}</div>
      </div>
    )
  }

  onClick = () => {
    console.log('onclick')
  }

}

export default Card
