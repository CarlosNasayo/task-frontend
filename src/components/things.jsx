import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modall from './modal';
function Things({handlestatusdelete, id, handlestatus, index, title, description, completed, data, setData }) {
  const [isChecked, setChecked] = useState(false);
  const [show, setShow] = useState(false);
  const [modalBody, setModalBody] = useState('');
  const [modalHeading, setModalHeading] = useState('');
  const handleClose = (shouldDelete) => {
    setShow(false);
    if (shouldDelete && modalHeading === 'Eliminar tarea') {
      deleteTask();
    }
  };
  const handleShow = () => {
    setShow(true);
    setModalBody('¿Estas seguro de eliminar esta tarea?');
    setModalHeading('Eliminar tarea');
  };
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
          <Button variant="danger" onClick={handleShow} className='m-2'>
            Eliminar
          </Button>
          <Button variant="warning" className='m-2' >
            Editar
          </Button>
        </Card.Footer>
      </Card>
      <Modall
  show={show}
  handleClose={(shouldDelete) => handleClose(shouldDelete)}
  handleShow={handleShow}
  modalHeading={modalHeading}
  modalBody={modalBody}
/>
    </div>
  );
}

export default Things;
