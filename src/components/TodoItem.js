import React from "react";
class TodoItem extends React.Component{
  render(){
    const {completed, id, handler, title} = this.props;
    return (
      <li>
        <input type = "checkbox" checked = {completed} onChange = {()=>handler(id)}/>
        {title}
      </li>
    );
  }
}
export default TodoItem;