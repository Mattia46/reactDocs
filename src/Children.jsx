import React from 'react';

class Children extends React.Component {
  render(){
    return(
      <Parent>
        <div>dd</div>
        </Parent>
    )
  }
}

class Parent extends React.Component {
  //render(){
    //console.log('main', this.props.children)
    //let items = this.props.children.map(child => child)
    //console.log('childre', items) 
    //return null
  //}
  //render(){
    //console.log('main', this.props.children)
    //let items = React.Children.map(this.props.children, child => child)
    //return null
  //}
  //render(){
    //let items = React.Children.toArray(this.props.children)
    //console.log(items)
    //return null
  //}
  render(){
    let items = React.Children.only(this.props.children)
    console.log(items)
    return null
  }
  //render(){
    //let items = React.Children.forEach(this.props.children, child => console.log(child))
  //}
}


export default Children
