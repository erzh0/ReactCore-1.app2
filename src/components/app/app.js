import React, { Component } from "react";

import NewTaskForm from "../new-task-form";
import TaskList from "../task-list";
import Footer from "../footer";

import "./app.css";

export default class App extends Component {
  state = {
    taskList: [
      {id: 1, timeNow: Date.now(), label: 'Completed task', completed: false}, 
      {id: 2, timeNow: Date.now(), label: 'Editing task', completed: false}, 
      {id: 3, timeNow: Date.now(), label: 'Active task', completed: false}
    ]
  }

  taskStatus = (id) => {
    this.setState(({taskList}) => {
      const indx = taskList.findIndex(el => el.id === id);
      let completed = taskList[indx].completed;

      const newArr = taskList.map((task, i) => {
        const newTask = {...task};
        if(i === indx) {
          newTask.completed = !completed;
        }
        return newTask;
      });

      return {
        taskList: newArr
      }
    });
  }

  deleteTask = (id) => {
    this.setState(({taskList}) => {
      const indx = taskList.findIndex(el => el.id === id);
      const newArr = [...taskList.slice(0, indx), ...taskList.slice(indx + 1)];
      return {
        taskList: newArr
      }
    });
  }

  render () {
    return (
      <section className="todoapp">
        <header>
          <h1>todos</h1>
          <NewTaskForm />
        </header>
        <section className="main">
          <TaskList 
            todos={this.state.taskList} 
            onCompleted={(id) => this.taskStatus(id)}
            onDeleted={(id) => this.deleteTask(id)} />
          <Footer />
        </section>
      </section>
    );
  }
}
