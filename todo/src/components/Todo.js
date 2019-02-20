import React from 'react';
import { completeTodo, deleteTodo } from '../actions/Action';
import { connect } from 'react-redux';

const Todo = (props) => {
	console.log(props.todo);
	return (
		<div
			onClick={() => props.completeTodo(props.todo.id)}
			className={props.todo.completed ? 'taskComplete' : 'taskNotComplete'}
		>
			<h2>
				{props.todo.todo} <button onClick={() => props.deleteTodo()}>Delete Todo</button>
			</h2>
		</div>
	);
};

function mapStateToProps(state) {
	return { todos: state.todos };
}
export default connect(mapStateToProps, { completeTodo, deleteTodo })(Todo);
