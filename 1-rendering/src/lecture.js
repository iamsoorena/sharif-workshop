import React from 'react'
import ReactDOM from 'react-dom'

let tacos = [
  {name: 'Carnitas', stars: 5},
  {name: 'Pollo', stars: 3},
  {name: 'Carne Asada', stars: 4},
  {name: 'Al Carbon', stars: 3},
  {name: 'Mole', stars: 5}
]

ReactDOM.render(
  <div>
    <h1>Welcome to React!</h1>
  </div>,
  document.getElementById('root')
)
