import { useRef } from 'react';
import { ModalBackground, ModalBody, ModalClose } from './styles';

interface ModalProps {
  showModal: boolean;
  setShowModal: Function;
  children?: JSX.Element | JSX.Element[] | null;
}

function Modal(props: ModalProps) {
  const { showModal, setShowModal, children = null } = props;

  const modalRef = useRef<HTMLDivElement>(null);

  const handleBackgroungOnClick = (e: React.MouseEvent) => {
    e.target === modalRef.current && setShowModal(false);
  };

  const handleCloseOnClick = () => {
    setShowModal(false);
  };

  return showModal ? (
    <ModalBackground ref={modalRef} onClick={handleBackgroungOnClick} showModal={showModal}>
      <ModalBody>
        <ModalClose onClick={handleCloseOnClick} children={<span />} />
        {children}
      </ModalBody>
    </ModalBackground>
  ) : null;
}

export default Modal;
