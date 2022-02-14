import Todo from './Todo';

import { useEffect, useState } from 'react';
import firebase from '../firebase';

const TodoList = () => {
  const [getTodoList, setTodoList] = useState([]);
  const username = localStorage.getItem('username');

  useEffect(() => {
    const todoRef = firebase.database().ref('todos');
    todoRef.orderByChild('user').equalTo(username).on('value', (snapshot) => {
      const todoList = [];
      const todos = snapshot.val();
      for (let id in todos) {
        todoList.push({ id, ...todos[id] });
      }
      setTodoList(todoList);
    });
  });

  return (
    <div className="m-3">
      {getTodoList.length > 0 ?
        <ul>{getTodoList.map((todo, index) => <Todo todo={todo} key={index} />)}</ul> :
        <div className="text-center pt-3">
          Your todo list is empty
        </div>
      }
    </div>
  );
};

export default TodoList;
