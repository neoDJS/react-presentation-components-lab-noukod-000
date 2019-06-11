// Code SimpleComponent Here
import React from 'react';

<<<<<<< HEAD
export default class SimpleComponent extends React.Component {
=======
export default class SimpleComponent extends Reacct.Component {
>>>>>>> ebb1b813d5d12ce087b279cf60ed669d5a663232
  state = {
    mood: "happy"
  }

  handleClick = ()=>{
      this.setState({
        mood: (this.state.mood == "happy")? "sad" : "happy"
      })
  }

  render(){
    return(<div onClick={this.handleClick}>{this.state.mood}</div>);
  }
}
