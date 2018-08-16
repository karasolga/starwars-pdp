import React from 'react'
import ReactDOM from 'react-dom'
import Dashboard from './containers/dashboard'
const App = () => {
  return (
    <div>
      <Dashboard/>
    </div>
  )
}
export default App

ReactDOM.render(<App/>, document.getElementById('app'))