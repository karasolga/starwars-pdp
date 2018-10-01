import React from 'react'

class Input extends React.Component {

  render() {
    const { value, placeholder, onChange } = this.props
    return (
      <input className="input" value={value} placeholder={placeholder} onChange={onChange}/>
    )
  }

}

export default Input
