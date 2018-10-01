import React, { Component } from 'react'
import Popup from './popup'
import IconPeople from './icon-people'
import IconPlanet from './icon-planet'
import IconStarship from './icon-starship'
import { PeopleDetailsPreview } from './details/people-details-preview'
import { PlanetsDetailsPreview } from './details/planets-details-preview'
import { StarshipsDetailsPreview } from './details/starships-details-preview'

class Card extends Component {

  state = {
    isExpand: false,
    isPopupActive: false
  }

  render() {
    const { item, type } = this.props
    const { isExpand, isPopupActive } = this.state
    return (
      <div className="card">
        <div onClick={this.onClick}>{item.name}</div>
        {this.renderIcon()}
        {isExpand && this.renderDetails()}
        {isPopupActive && <Popup item={item} onClose={this.onClose} type={type} /> }
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

  renderIcon = () => {
    const { type } = this.props

    switch (type) {
      case 'people':
        return <IconPeople/>
      case 'planets':
        return <IconPlanet/>
      case 'starships':
        return <IconStarship/>

    }
  }

  renderDetails = () => {
    const { item, type } = this.props
    switch (type) {
      case 'people':
        return <PeopleDetailsPreview item={item} onClick={this.onShowMore}/>
      case 'planets':
        return <PlanetsDetailsPreview item={item} onClick={this.onShowMore}/>
      case 'starships':
        return <StarshipsDetailsPreview item={item} onClick={this.onShowMore}/>

    }
  }

}

export default Card
