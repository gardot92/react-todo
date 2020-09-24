import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Todos from './components/Todos';
import Header from './components/Header';
import AddTodo from "./components/AddTodo";
import About from './components/About';
import axios from 'axios';

class App extends Component {

    addTodo = (title) => {
        axios.post('https://jsonplaceholder.typicode.com/todos', {
            title: title,
            completed: false
        }).then(response => {
            this.setState({todos: [...this.state.todos, response.data]})
        })
    };


    markComplete = (id) => {
        const index = this.state.todos.findIndex(todo => todo.id === id);
        if (index >= 0) {
            axios.patch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                completed: !this.state.todos[index].completed
            }).then(() => {
                this.setState({
                    todos: [
                        ...this.state.todos.slice(0, index),
                        {
                            ...this.state.todos[index],
                            completed: !this.state.todos[index].completed
                        },
                        ...this.state.todos.slice(index + 1)
                    ]
                })
            })
        }
    };

    deleteTodo = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(response => {
            this.setState({todos: this.state.todos.filter(todo => todo.id !== id)})
        })
    };

    state = {
        todos: []
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then(response => {
                this.setState({todos: response.data})
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <Header/>
                        <Route exact path="/" render={props => (
                            <React.Fragment>
                                <AddTodo addTodo={this.addTodo}/>
                                <Todos todos={this.state.todos}
                                       markComplete={this.markComplete}
                                       deleteElement={this.deleteTodo}/>
                            </React.Fragment>
                        )}/>
                        <Route path="/about">
                            <About />
                        </Route>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
