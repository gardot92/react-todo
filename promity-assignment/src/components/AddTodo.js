import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {

    state = {
        title : '',
        validationError: ''
    };

    onChange = (e) => {
        this.setState( {title: e.target.value});
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.title) {
            this.props.addTodo(this.state.title);
            this.setState({title: ''});
        } else {
            this.setState({validationError: 'Pleasse fill input'});
        }

    };

    render() {
        return (
          <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
              <input
                  type = "text"
                  name= "title"
                  placeholder= "Type in to add next item..."
                  style={{flex: '10', padding: '5px'}}
                  value={this.state.title}
                  onChange={this.onChange}
              />
              <input type= "submit" value="Submit" className="btn" style={{flex: '1'}}/>
              {this.state.validationError && <span style={{color: 'red'}}>{this.state.validationError}</span>}
          </form>
        )
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
};

export default AddTodo;
