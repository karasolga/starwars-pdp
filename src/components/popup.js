import React, { Component } from 'react'
import RowDetails from './row-details'

class Popup extends Component {
  render () {
    const { onClose, item } = this.props
    return (
      <div className="popup__container">
        <div className="popup">
          <div className="popup__close" onClick={onClose}>&#10005;</div>
          <div className="popup__title">{item.name}</div>
          <div className="popup__content">
            {this.renderContent()}
          </div>
        </div>
      </div>
    )
  }

  renderContent = () => {
    const { item, type } = this.props
    switch (type) {
      case 'people':
        return (<React.Fragment>
          <RowDetails label="height" value={item.height}/>
          <RowDetails label="mass" value={item.mass}/>
          <RowDetails label="eye color" value={item.eye_color}/>
          <RowDetails label="hair color" value={item.hair_color}/>
          <RowDetails label="birth year" value={item.birth_year}/>
          <RowDetails label="gender" value={item.gender}/>
        </React.Fragment>)
      case 'planets':
        return (<React.Fragment>
          <RowDetails label="climate" value={item.climate}/>
          <RowDetails label="diameter" value={item.diameter}/>
          <RowDetails label="population" value={item.population}/>
          <RowDetails label="terrain" value={item.terrain}/>
          <RowDetails label="gravity" value={item.gravity}/>
          <RowDetails label="orbital period" value={item.orbital_period}/>
          <RowDetails label="surface water" value={item.surface_water}/>
        </React.Fragment>)
      case 'starships':
        return (<React.Fragment>
          <RowDetails label="starship class" value={item.starship_class}/>
          <RowDetails label="consumables" value={item.consumables}/>
          <RowDetails label="manufacturer" value={item.manufacturer}/>
          <RowDetails label="model" value={item.model}/>
          <RowDetails label="passengers" value={item.passengers}/>
          <RowDetails label="crew" value={item.crew}/>
          <RowDetails label="hyperdrive rating" value={item.hyperdrive_rating}/>
        </React.Fragment>)

    }
  }
}

export default Popup
