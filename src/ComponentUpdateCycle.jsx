import React from 'react';
import ReactDOM from 'react-dom';


export class ComponentUpdateCycle extends React.Component {
  constructor(){
    super();
    this.state = {increasing: false}
  }
  update(){
    ReactDOM.render(
      <ComponentUpdateCycle val={this.props.val + 1} />,
      document.getElementById('validation'))
  }
  componentWillReceiveProps(nextProps){
    console.log('will receive props', nextProps, this.props.val);
    this.setState({increasing: nextProps.val > this.props.val})
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('should receive props', nextProps, nextState);
    return nextProps.val % 5 === 0;
  }
  render(){
    console.log(this.state.increasing)
    return (
      <button onClick={this.update.bind(this)}>
        {this.props.val}
      </button>
    )
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("did update", prevProps, prevState);
    console.log(`preProps: ${prevProps.val}`)
  }
}

ComponentUpdateCycle.defaultProps = {val: 0}
