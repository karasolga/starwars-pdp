import React from 'react'
import Input from '../components/input'
import Card from '../components/card'
import { fetchData } from '../api'

export default class Dashboard extends React.Component {
  state = {
    value: '',
    people: [],
    planets: [],
    starships: []
  }

  render() {
    const { value, people, planets, starships } = this.state
    return (
      <div>
        <Input value={value} onChange={this.getValue}/>
        <p>The value is {this.state.value}</p>

        {people.map((item, idx) => <Card item={item} key={idx} type="people"/>)}
        {planets.map((item, idx) => <Card item={item} key={idx} type="planets"/>)}
        {starships.map((item, idx) => <Card item={item} key={idx} type="starships"/>)}
      </div>

    )
  }

  getValue = (evt) => {

    this.setState({
      value: evt.target.value
    })

    fetchData(evt.target.value, 'people').then(people => this.setState({ people }))
    fetchData(evt.target.value, 'planets').then(planets => this.setState({ planets }))
    fetchData(evt.target.value, 'starships').then(starships => this.setState({ starships }))

  }

}
