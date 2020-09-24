import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

    getStyle = () => {
        return {
            display: 'flex',
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
                <p style={{flexGrow: 1}}>
                    {this.props.todo.title}

                </p>
                <input type="button" value="Delete" className="btn" onClick={() => this.props.deleteElement(id)} />
                <input type="button" value={this.props.todo.completed ? 'Uncomple' : 'Complete'} className="btn" style={{marginLeft:5}} onClick={() => this.props.markComplete(id)} />
            </div>
        );
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteElement: PropTypes.func.isRequired
};

export default TodoItem;
