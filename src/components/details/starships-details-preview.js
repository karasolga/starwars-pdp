import React from 'react'

export const StarshipsDetailsPreview = (props) => {
  const { item, onClick } = props
  return (
    <div className="card__details">
      <ul className="card__list">
        <li className="card__item">
          <span>starship</span>
          <span>{item.name}</span>
        </li>
        <li className="card__item">
          <span>lenght</span>
          <span>{item.lenght}</span>
        </li>
        <li className="card__item">
          <span>cargo capacity</span>
          <span>{item.cargo_capacity}</span>
        </li>
      </ul>
      <div className="card__link" onClick={onClick}>show more</div>
    </div>
  )
}
