import React, {Component} from "react";
class InputToDo extends Component{
    state = {
      title : ''
    }
    inputHandler = (e) => {
      this.setState({[e.target.name]: e.target.value})
    }
    handleSubmit = e => {
      e.preventDefault();
      this.props.addTask(this.state.title);
      this.setState({title : ''});
    }
    render(){
      return (
        <form onSubmit = {this.handleSubmit}>
          <input name = 'title' type = 'text' placeholder = 'Add todo ...' value = {this.state.title} onChange = {this.inputHandler}/>
          <button type = 'submit'> Submit </button>
        </form>
      )
    }
}
export default InputToDo;