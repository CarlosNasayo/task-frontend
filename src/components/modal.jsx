import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Modall({show,handleClose,handleShow,modalHeading,modalBody}) {
  return (
    <>
 

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalHeading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalBody}</Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={() => handleClose(false)}>
  Cerrar
</Button>

          <Button variant="primary" onClick={() => handleClose(true)}>
  Si, eliminar
</Button>

        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modall;