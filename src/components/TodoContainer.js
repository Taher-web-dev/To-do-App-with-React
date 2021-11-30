import React from "react";
import ToDoList from "./TodosList";
import Header from "./Header";
import InputToDo from "./InputToDo";
import { v4 as uuidv4 } from "uuid";

class ToDoContainer extends React.Component{
  state = {
  todos: [
    {
      id: uuidv4(),
      title: "Setup development environment",
      completed: true
    },
    {
      id: uuidv4(),
      title: "Develop website and add content",
      completed: false
    },
    {
      id: uuidv4(),
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
  deleteHandler = (id) => {
    this.setState( prevState => ({
      todos: prevState.todos.filter(todo => {
          return todo.id !== id;
      })
    }));
  }
  addTask = (tit) => {
    this.setState({
      todos: [
        ...this.state.todos , 
        {
          id: uuidv4(),
          title: tit,
          completed: false,
        }
      ]
    });
  }
  editTask = (id,tit) => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if(todo.id === id){
          return {
            ...todo,
            title: tit,
          };
        }
        return todo;
      })
    }))
  }
  render(){
      return (
        <div className = 'container'>
          <div className = 'inner'>
            <Header/>
            <InputToDo addTask = {this.addTask}/>
            <ToDoList 
            todos = {this.state.todos} 
            handler = {this.handleChecked} 
            deleteHandler = {this.deleteHandler}
            editHandler = {this.editTask}
            />
          </div>
        </div>
      );
  }   
}
export default ToDoContainer;