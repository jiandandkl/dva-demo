import React from 'react';
import PropTypes from 'prop-types';
import { Button, Input } from 'antd';
import {
  SearchOutlined,
  CloseOutlined,
  CheckOutlined
} from '@ant-design/icons';

const TodoList = ({ onDelete, todos, onAdd, inputValue, onChange, handleCom, handleDel }) => {
  return (
    <div style={{
      width: '500px',
      margin: 'auto',
      marginTop: '50px'}}>
      <Input
        onPressEnter={onAdd}
        onChange={onChange}
        autoFocus={true}
        size="large"
        value={inputValue}
        style={{border: 'none'}}
        placeholder="Add A Todo" />
      {todos.map((item, index) => {
        return (
          <TodoItem data={item} complete={handleCom} handleDel={handleDel} key={index} />
        )
      })}
    </div>
  );
};

const TodoItem = ({data, complete, handleDel}) => {
  const isCompleted = data.completed
  return (
    <li style={{
      height: '40px',
      lineHeight: '40px',
      borderBottom: '1px solid #ccc',
      paddingLeft: '10px',
      backgroundColor: '#fff'
      }}>
      <Button
        onClick={() => complete(data.id)}
        size='small'
        className='button'
        shape="circle"
        icon={isCompleted ? <CheckOutlined style={{color: 'rgb(57, 203,150)'}} /> : <SearchOutlined style={{color: '#fff'}} />}></Button>
      <span className='lable' style={{
        width: '410px', 
        marginLeft: '20px',
        color: isCompleted ? '#ccc' : '#000',
        textDecoration: isCompleted ? 'line-through' : 'none',
        display: 'inline-block'}}>{data.content}</span>
      <CloseOutlined onClick={() => handleDel(data.id)} style={{color: '#af5b5e' }} />
    </li>
  )
}

TodoList.propTypes = {
  onAdd: PropTypes.func.isRequired,
  handleCom: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  handleDel: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
};

export default TodoList;