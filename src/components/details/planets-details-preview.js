import React from 'react'

export const PlanetsDetailsPreview = (props) => {
  const { item, onClick } = props
  return (
    <div className="card__details">
      <ul className="card__list">
        <li className="card__item">
          <span>climate</span>
          <span>{item.climate}</span>
        </li>
        <li className="card__item">
          <span>diameter</span>
          <span>{item.diameter}</span>
        </li>
        <li className="card__item">
          <span>population</span>
          <span>{item.population}</span>
        </li>
      </ul>
      <div className="card__link" onClick={onClick}>show more</div>
    </div>
  )
}
