import React from 'react'

export const PeopleDetailsPreview = (props) => {
  const { item, onClick } = props
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
      <div className="card__link" onClick={onClick}>show more</div>
    </div>
  )
}
