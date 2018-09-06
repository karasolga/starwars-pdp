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
    const items = results
    return (
      <div>
        <Input value={value} onChange={this.getValue}/>
        <p>The value is {this.state.value}</p>

        {items.length > 0 && items[0].map((item, idx) => <Card item={item} key={idx} />)}
      </div>

    )
  }

  getValue = (evt) => {

    this.setState({
      value: evt.target.value
    })

    fetchResults(evt.target.value).then(results => this.setState({ results }))

  }

}


async function fetchResults (text) {
  let results = []

  try {
    let response = await fetch(`https://swapi.co/api/people/?search=${text}`)
    let data = await response.json()
    results = [...results, data.results]
    return results
  } catch (err) {
    console.log('ERROR!!!', err)
  }

}
