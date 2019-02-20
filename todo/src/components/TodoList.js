import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

const TodoList = (props) => {
	console.log(props, 'clicked!');
	return (
		<div>
			<div>{props.todos.map((todo) => <Todo key={todo.id} todo={todo} />)} </div>
		</div>
	);
};

function mapStateToProps(state) {
	return {
		todos: state.todos
	};
}
export default connect(mapStateToProps)(TodoList);
