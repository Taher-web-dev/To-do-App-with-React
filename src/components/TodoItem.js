import React from "react";
class TodoItem extends React.Component{
  render(){
    const {completed, id, handler, title, deleteHandler} = this.props;
    return (
      <li>
        <input type = "checkbox" checked = {completed} onChange = {()=>handler(id)}/>
        <button onClick = {() => deleteHandler(id)}> Delete </button>
        {title}
      </li>
    );
  }
}
export default TodoItem;