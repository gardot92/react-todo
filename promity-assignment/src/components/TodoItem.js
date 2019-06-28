import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

    getStyle = () => {
        return {
            marginTop: '10px',
            background: this.props.todo.completed ? 'linear-gradient(to right, #ffb76b 0%,#ffa73d 50%,#ffffff 81%)' : '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
        }
    };

    render() {
        const {id} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    {this.props.todo.title}

                </p>
            </div>
        );
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired
};

export default TodoItem;
