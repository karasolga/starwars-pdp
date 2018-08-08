import React from 'react'

class Input extends React.Component {

  state = {
    value: ''
  }

  render() {
    const {value} = this.state
    return (
      <input value={value} onChange={this.onChange}/>
    )
  }

  onChange = (evt) => {
    console.log('evt', evt.target.value)
    this.setState({
      value: evt.target.value
    })


  }
}

export default Input