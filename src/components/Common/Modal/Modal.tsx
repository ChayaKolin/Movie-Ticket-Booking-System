import React from 'react';
import ReactDOM from 'react-dom';
import { ModalProps } from './Modal.props.ts';
import { MODAL_SIZES } from './Modal.constants.ts';
import { useModal } from './UseModal.hooks.ts';
import styles from './Modal.module.scss';

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, size = MODAL_SIZES.MEDIUM }) => {
  const modalRef = useModal(isOpen, onClose);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.overlay}>
      <div className={`${styles.modalContent} ${styles[size]}`} ref={modalRef}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
