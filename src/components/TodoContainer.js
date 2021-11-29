import React from "react";
import ToDoList from "./TodosList";
import Header from "./Header";

class ToDoContainer extends React.Component{
  state = {
  todos: [
    {
      id: 1,
      title: "Setup development environment",
      completed: true
    },
    {
      id: 2,
      title: "Develop website and add content",
      completed: false
    },
    {
      id: 3,
      title: "Deploy to live server",
      completed: false
    }
  ]
  };
  handleChecked = (id) => {
    this.setState(prevState =>({ 
      todos: prevState.todos.map(todo => {
        if(todo.id === id){
          return {
            ...todo,
            completed : !todo.completed,
          }
        }
        return todo;
      })
    }));
  }
  render(){
      return (
        <React.Fragment>
          <Header/>
          <ToDoList todos = {this.state.todos} handler = {this.handleChecked}/>
        </React.Fragment>
      );
  }   
}
export default ToDoContainer;