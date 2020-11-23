import React from 'react';

import { SubmitForm } from '../component/submit-form/submit-form.component'
import { TodoList } from '../component/todo-list/todo-list.component'
import { Link } from 'react-router-dom'

export class ViewTodoList extends React.Component {

    state = {
        tasks: ['task 1', 'task 2', 'task 3']
      };

    render() {
        return (
            <div>
                <SubmitForm onFormSubmit={this.handleSubmit} />
                <TodoList tasks={this.state.tasks} onDelete={this.handleDelete} />
                <Link to="/click-me-to-no-where">
                    <button>
                        click me
                    </button>
                </Link>
            </div>
        );
    }
};