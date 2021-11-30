import React from "react";
import styles from "./TodoItem.module.css";
class TodoItem extends React.Component{
  state = {
    editing : false,
  }
  handleEditing = () =>{
    this.setState({
      editing: true
    }); 
  }
  handleUpdate = (e) => {
    if(e.key ==='Enter'){
      this.setState({
        editing :false,
      });
    }
  }
  render(){
    const {completed, id, handler, title, deleteHandler, editHandler} = this.props;
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    }
    let viewMode = {};
    let editMode = {};
    if (this.state.editing) viewMode.display = 'none';
    else editMode.display = 'none';
    return (
      <li className = {styles.item}>
        <div onDoubleClick = {this.handleEditing} style = {viewMode}>
          <input
            type = "checkbox" 
            className = {styles.checkbox}
            checked = {completed} 
            onChange = {()=>handler(id)}/>
          <button onClick = {() => deleteHandler(id)}> Delete </button>
          <span style = {completed ? completedStyle : null}> {title} </span>
        </div>
        <input 
          type='text' 
          className = {styles.textInput} 
          style = {editMode}
          value = {title}
          onChange = {(e) => editHandler(id, e.target.value)}
          onKeyDown = {(e) => this.handleUpdate(e)}
        />
      </li>
    );
  }
}
export default TodoItem;