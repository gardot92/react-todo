import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {

    render() {
        return this.props.todos.map((todo) =>
            <TodoItem key={todo.id} todo={todo}
                      markComplete={this.props.markComplete}
                      deleteElement={this.props.deleteElement}/>
        );
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteElement: PropTypes.func.isRequired,
};

export default Todos;
