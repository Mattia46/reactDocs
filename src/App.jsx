import React from 'react';

//Statefull means that can have state
export class App extends React.Component {
  constructor(){
    super()
    this.state = {
      name: 'Mario',
    }
  }

  updateName(e){
    this.setState({
      name: e.target.value
    })
  }

//Age runs the updateName method from outside
//Button shows the nested children (Heart and React string)
  render(){
    let age = this.props.age // or I can use this.state.age
    return (
      <div>
        <Age updateName={this.updateName.bind(this)} />
        { this.state.name }
        <Button>I <Heart /> React</Button>
      </div>
    )
  }
}

//Declare props type. age prop has a default validation
App.propTypes = {
  name: React.PropTypes.string,
  age: React.PropTypes.number.isRequired
}

//Assign default value to a props. If passed in the view will be overrided
App.defaultProps = {
  age: 32
}

//StateLess
const Age = (props) => <input type="text" onChange={props.updateName} />

const Button = (props) => <button>{props.children}</button>

const Heart = () => <span>&hearts;</span>
