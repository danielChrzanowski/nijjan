import { Modal, Button } from "react-bootstrap";
import './signOutModal.scss';

export function SignOutModal(props) {
    const t = props.t;
    const user = props.user;
    const theme = props.theme;

    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className={theme}
        >
            <Modal.Header closeButton >
                <Modal.Title id="contained-modal-title-vcenter">
                    {t('signOutModal.sign_out')}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>{user.displayName}</h4>
                <p>
                    {t('signOutModal.areYouSure')}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={theme} onClick={props.onHide}>  {t('signOutModal.closeBtn')}</Button>
            </Modal.Footer>
        </Modal>
    );
}