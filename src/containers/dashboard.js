import React from 'react'
import Input from '../components/input'
import Card from '../components/card'

export default class Dashboard extends React.Component {
  state = {
    value: '',
    results: []
  }



  render() {
    const { value, results } = this.state
    console.log('RESULTS', results)
    const items = results.results ? results.results : []
    return (
      <div>
        <Input value={value} onChange={this.getValue}/>
        <p>The value is {this.state.value}</p>

        {items.length > 0 && items.map((item, idx) => <Card item={item} key={idx} />)}
      </div>

    )
  }

  getValue = (evt) => {
    console.log('value', evt.target.value)

    this.setState({
      value: evt.target.value
    })

    fetch(`https://swapi.co/api/people/?search=${evt.target.value}`)
      .then(response => response.json())
      .then(json => this.setState({ results: json }))
  }
}
