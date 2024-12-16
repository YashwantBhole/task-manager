import React from 'react';
import { List, ListItem, ListItemText, IconButton, Tooltip, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const TaskList = ({ tasks, onDeleteTask, onUpdateTask }) => {
  return (
    <List>
      {tasks.map((task, index) => (
        <React.Fragment key={index}>
          <ListItem
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              bgcolor: '#f4f4f4',
              borderRadius: 1,
              marginBottom: 1,
              padding: 2,
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            }}
          >
            <ListItemText primary={task.text} secondary={`Added on: ${task.createdAt}`} />
            <div>
              <Tooltip title="Edit Task">
                <IconButton color="primary" onClick={() => onUpdateTask(index)}>
                  <EditIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Delete Task">
                <IconButton color="error" onClick={() => onDeleteTask(index)}>
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </div>
          </ListItem>
          {index < tasks.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </List>
  );
};

export default TaskList;
