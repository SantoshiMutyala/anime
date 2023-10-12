import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import axios from 'axios';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = () => {
  
    axios.get('http://localhost:3001/posts')
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.error('Error fetching todos:', error);
      });
  };

  const addTodo = () => {
    const newTodoObj = {
      title: newTodo,
      completed: false,
    };

    axios.post('http://localhost:3001/posts', newTodoObj)
      .then(() => {
        fetchTodos(); 
        setNewTodo('');
      })
      .catch((error) => {
        console.error('Error adding todo:', error);
      });
  };

  const deleteTodo = (id) => {
    axios.delete(`http://localhost:3001/posts/${id}`)
      .then(() => {
        fetchTodos();
      })
      .catch((error) => {
        console.error('Error deleting todo:', error);
      });
  };

  const updateTodo = (id, updatedData) => {
   
    axios.put(`http://localhost:3001/posts/${id}`, updatedData)
      .then(() => {
        fetchTodos();
      })
      .catch((error) => {
        console.error('Error updating todo:', error);
      });
  };

  return (
    <div>
      <Box p={3}>
        <h1>To-Do List</h1>
        <TextField
          label="New Todo"
          variant="outlined"
          fullWidth
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={addTodo}
          disabled={!newTodo}
        >
          Add Todo
        </Button>
        <List>
          {todos.map((todo) => (
            <ListItem key={todo.id}>
              <ListItemText primary={todo.title} />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="edit"
                  onClick={() => {
                    const updatedTitle = prompt('Edit Todo:', todo.title);
                    if (updatedTitle !== null) {
                      const updatedData = { title: updatedTitle };
                      updateTodo(todo.id, updatedData);
                    }
                  }}
                >
                  <Edit />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => deleteTodo(todo.id)}
                >
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
}

export default TodoList;