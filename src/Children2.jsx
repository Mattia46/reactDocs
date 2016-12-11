import React from 'react';

class Main extends React.Component {
  render(){
    return (
      <Parent>
        <button>Ciao Matti</button>
        <button>Ciao Mau</button>
        <button>Ciao Mauro</button>
        </Parent>
    )
  }
}

class Parent extends React.Component {
  constructor(){
    super()
    this.state = {
      child: 'nessuno'
    }
  }

  change(child){
    console.log('cc', child)
    this.setState({child})
  }

  render(){
    console.log('childrem', this.props.children)
    let fn = child =>
      React.cloneElement(child, {
        onClick:this.change.bind(this, child.props.value)
      });
    let child = React.Children.map(this.props.children, fn)
    return(
      <div>
        <h2> { this.state.child } </h2>
        <h3>{child}</h3>
        </div>

    )
  }
}

export default Main
