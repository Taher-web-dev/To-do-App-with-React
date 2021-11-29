import React from "react";
import TodoItem from "./TodoItem";
class ToDoList extends React.Component {
  render(){
    const {todos, handler, deleteHandler} = this.props;
    return (
      <ul>
        {todos.map(todo => {
          const { id, title, completed } = todo;
          return (<TodoItem key= {id} id= {id} title = {title} completed = {completed} handler = {handler} deleteHandler = {deleteHandler}/>)
        }
        )
        }
      </ul>
    );
  }
}
export default ToDoList;