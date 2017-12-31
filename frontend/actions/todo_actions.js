export const RECEIVE_ALL_TODOS = 'RECEIVE_ALL_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';

const receiveAllTodos = (todos) => ({
  type: RECEIVE_ALL_TODOS,
  todos
});

const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo
});
