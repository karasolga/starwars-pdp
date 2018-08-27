import React from 'react'

class Input extends React.Component {

  render() {
    const { value, onChange } = this.props
    return (
      <input className="input" value={value} onChange={onChange}/>
    )
  }

}

export default Input
