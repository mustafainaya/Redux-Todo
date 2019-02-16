import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>{this.props.appTitle} Redux Todo List :)</h1>
				<TodoList />
				<TodoInput />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		appTitle: state.title,
		todos: state.todos
	};
};

export default connect(mapStateToProps)(App);
