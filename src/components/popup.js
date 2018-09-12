import React, { Component } from 'react'
import RowDetails from './row-details'

class Popup extends Component {
  render () {
    const { onClose, item } = this.props
    return (
      <div className="popup__container">
        <div className="popup">
          <div className="popup__close" onClick={onClose}>&#10005;</div>
          <div className="popup__content">
            <RowDetails label="name" value={item.name}/>
            <RowDetails label="height" value={item.height}/>
            <RowDetails label="mass" value={item.mass}/>
            <RowDetails label="eye color" value={item.eye_color}/>
            <RowDetails label="hair color" value={item.hair_color}/>
            <RowDetails label="birth year" value={item.birth_year}/>
            <RowDetails label="gender" value={item.gender}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Popup
