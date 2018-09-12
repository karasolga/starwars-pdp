import React, { Component } from 'react'

class RowDetails extends Component {
  render () {
    const { label, value } = this.props
    return (
      <div className="row">
        <div className="row__label">{label}</div>
        <div className="row__value">{value}</div>
      </div>
    )
  }
}

export default RowDetails
