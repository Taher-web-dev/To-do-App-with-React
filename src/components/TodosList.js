import React from "react";
import TodoItem from "./TodoItem";
class ToDoList extends React.Component {
  render(){
    return (
      <ul>
        {this.props.todos.map(todo => {
          const { id, title, completed } = todo;
          return (<TodoItem key= {id} id= {id} title = {title} completed = {completed} handler = {this.props.handler}/>)
        }
        )
        }
      </ul>
    );
  }
}
export default ToDoList;