import React from 'react'
import './App.css';


import { AppWrapper } from './component/app-wrapper/app-warpper.component'
import { Header } from './component/header/header.component'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ViewTodoList } from './view/view-todo-list'

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
      <div>
        <AppWrapper>
          <Router>
            <Header numTodos={this.state.tasks.length} />
            <Route path="/" exact component={ViewTodoList}/>
          </Router>
        </AppWrapper>
      </div>

    );
  }
}

export default App;
