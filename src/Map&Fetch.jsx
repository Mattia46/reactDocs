import React from 'react';

class MapFetch extends React.Component {
  constructor(){
    super();
    this.state = {items: []}
  }
  componentWillMount(){
    fetch( 'https://swapi.co/api/people/?format=json' )
      .then( response => response.json() )
      .then( ({results: items}) => this.setState({items}))
      .then(console.log('items'))
  }
  filter(e){
    this.setState({filter: e.target.value})
  }
  render(){
    let items = this.state.items;
    if(this.state.filter){
      items = items.filter( item =>
        item.name.toLowerCase()
          .includes(this.state.filter.toLowerCase()))
    }
    return (
      <div>
        <input type="text"
      onChange={this.filter.bind(this)}/>
        {items.map(item =>
          <Person key={item.name} person={item} />)}
        </div>
    )
  }
}

const Person = (props) => 
  <div>
  <ul>
  <li>
  <h3>{props.person.name}</h3>
  <h4>{props.person.birth_year}</h4>
  </li>
  </ul>
  </div>

  export default MapFetch
