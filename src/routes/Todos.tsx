import * as React from 'react';
import {useState} from 'react';
import { connect } from 'dva';
import TodoList from '../components/Todos'

const Todos = ({ dispatch, todos }) => {
  const [inputValue, setInputValue] = useState('')
  function handleTodo (data) {
      dispatch({
        type: 'todos/add',
        payload: data.target.value,
      });
      setInputValue('')
  }
  function handleChange (data) {
    setInputValue(data.target.value)
  }
  function handleCom (id) {
    dispatch({
      type: 'todos/complete',
      payload: id,
    });
  }
  function handleDel (id) {
    dispatch({
      type: 'todos/delete',
      payload: id,
    });
  }
  return (
    <TodoList
      onAdd={handleTodo}
      handleCom={handleCom}
      onChange={handleChange}
      inputValue={inputValue}
      handleDel={handleDel}
      todos={todos} />
  )
}
export default connect(({ todos }) => ({
  todos,
}))(Todos);