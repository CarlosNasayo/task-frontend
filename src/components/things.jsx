import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Things({handlestatusdelete, id, handlestatus, index, title, description, completed, data, setData }) {
  const [isChecked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(completed);
  }, [completed]);

  const change = () => {
    const newStatus = !isChecked;
    handlestatus(id, newStatus);
    
  };
  const deleteTask = () => {
    handlestatusdelete(id);
  }
    

  return (
    <div className='p-2'>
      <Card border="primary" style={{ width: '18rem' }}>
        <Card.Header>Plan por hacer No {index +1}</Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          {completed? <Form.Check
            type="checkbox"
            label="Marcar como no completada"
            checked={isChecked}
            onChange={change}
            custom
            inline
          />:<Form.Check
          type="checkbox"
          label="Marcar como completada"
          checked={isChecked}
          onChange={change}
          custom
          inline
        />}
 
        </Card.Body>
        <Card.Footer className='text-center'>
          <Button variant="danger" onClick={deleteTask}>
            Eliminar
          </Button>
          <Button variant="warning" >
            Editar
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default Things;
