import Todo from './Todo';

import { useEffect, useState } from 'react';
import firebase from '../firebase';

const TodoList = () => {
  const [getTodoList, setTodoList] = useState();

  useEffect(() => {
    const todoRef = firebase.database().ref('Todo');
    todoRef.on('value', (snapshot) => {
      const todos = snapshot.val();
      const todoList = [];
      for (let id in todos) {
        todoList.push({ id, ...todos[id] });
      }
      setTodoList(todoList);
    });
  }, []);

  return (
    <div className="m-3">
      <ul>
        {getTodoList ? getTodoList.map((todo, index) => <Todo todo={todo} key={index} />) : ''}
      </ul>
    </div>
  );
};

export default TodoList;
