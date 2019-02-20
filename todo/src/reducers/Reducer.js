import { ADDTODO, COMPLETE_TODO, DELETE_TODO } from '../actions/Action';

const initialState = {
	title: 'Redux Todo List :)',
	todos: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADDTODO:
			let newTodos = [ ...state.todos, action.payloadTodo ];
			return { ...state, todos: newTodos };

		case COMPLETE_TODO:
			console.log('todo completed', COMPLETE_TODO);
			let toggleTodos = state.todos.slice();
			toggleTodos = toggleTodos.map(
				(todo) => (todo.id === action.id ? { ...todo, completed: !todo.completed } : todo)
			);
			return { ...state, todos: toggleTodos };

		case DELETE_TODO:
			console.log('todo deleted..', DELETE_TODO);
			let deleteTodos = state.todos.slice();
			deleteTodos = deleteTodos.filter((todo) => todo.completed !== true);
			return { ...state, todos: deleteTodos };
		default:
			return state;
	}
};

export default reducer;
