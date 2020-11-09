import React from 'react'
import './App.css';


import { AppWrapper } from './component/app-wrapper/app-warpper.component'
import { Header } from './component/header/header.component'
import { SubmitForm } from './component/submit-form/submit-form.component'
import { TodoList } from './component/todo-list/todo-list.component'


class App extends React.Component {

  state = {
    tasks: ['task 1', 'task 2', 'task 3']
  };

  handleSubmit = task => {
    this.setState({ tasks: [...this.state.tasks, task] });
  }

  handleDelete = (index) => {
    const newArr = [...this.state.tasks];
    newArr.splice(index, 1);
    this.setState({ tasks: newArr });
  }

  render() {
    return (
      <AppWrapper>
        <Header numTodos={this.state.tasks.length} />
        <SubmitForm onFormSubmit={this.handleSubmit} />
        <TodoList tasks={this.state.tasks} onDelete={this.handleDelete} />
      </AppWrapper>);
  }
}

export default App;
