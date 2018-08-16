import React from 'react'
import Input from '../components/input'

export default class Dashboard extends React.Component {
  state = {
    value: ''
  }

  render() {
    const { value } = this.state
    return (
      <div>
        <Input value={value} onChange={this.getValue}/>
        <p>The value is {this.state.value}</p>
      </div>

    )
  }

  getValue = (evt) => {
    console.log('value', evt.target.value)

    this.setState({
      value: evt.target.value
    })
  }
}
