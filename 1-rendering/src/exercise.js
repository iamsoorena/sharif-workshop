////////////////////////////////////////////////////////////////////////////////
// Exercise:
//
// - render DATA.title in an <h1>
// - render a <ul> with each of DATA.items as an <li> and display the name
// - limit the list to only mexican food (hint: use DATA.items.filter(...))
// - sort the items in alphabetical order by name
//   (hint: use sort-by https://github.com/staygrimm/sort-by#example)
////////////////////////////////////////////////////////////////////////////////

import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import sortBy from 'sort-by'

const DATA = {
  title: 'Menu',
  items: [
    {id: 1, name: 'tacos', type: 'mexican'},
    {id: 2, name: 'burrito', type: 'mexican'},
    {id: 3, name: 'tostada', type: 'mexican'},
    {id: 4, name: 'mushy peas', type: 'english'},
    {id: 5, name: 'fish and chips', type: 'english'},
    {id: 6, name: 'black pudding', type: 'english'}
  ]
}

const element = (
  // put your code here!
  <div>Make it happen</div>
)

ReactDOM.render(element, document.getElementById('root'))
