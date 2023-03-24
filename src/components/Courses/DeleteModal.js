import { Modal } from "react-bootstrap";
import CoursesService from "../services/ApiCoursesService";

const DeleteModel = ({ courseId, setModalIsOpen, modalIsOpen }) => {

    const handleCloseModal = () => {
        setModalIsOpen(false);
    }

    const deleteCourse = () => {
      CoursesService.deleteCourse(courseId)
      .then(data => {
        console.log(data);        
    })
    .catch(error => {
        alert(error);
    })

    }
    return (
        <div>
            {/* <button className="btn btn-danger mt-3 ms-1" onClick={() => setModalIsOpen(true)}>Delete</button> */}
            <Modal
                show={modalIsOpen}
                onHide={handleCloseModal}
                dialogClassName="modal-width"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h4 className="modal-title w-100">Are you sure?</h4>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body">
                    <p>Do you really want to delete this course?</p>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-success" onClick={handleCloseModal}>Cancel</button>                    
                    <button onClick={deleteCourse} className="btn btn-danger">Delete</button>
                </Modal.Footer>

            </Modal>
        </div>
    );
};

export default DeleteModel;