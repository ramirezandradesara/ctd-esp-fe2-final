
import ModalPremium from "./ModalPremium";
import ModalNotPremium from "./ModalNotPremium";
import { ModalProps } from '../types/modalProps.types';

function Modal({ modal, isOpenModal }: ModalProps) {
    return (
        <div>
            {modal ?
                (
                    modal.esPremium
                        ? (<ModalPremium isOpenModal={isOpenModal} modal={modal} />)
                        : (<ModalNotPremium isOpenModal={isOpenModal} modal={modal} />)
                )
                : null}
        </div>
    )
};

export default Modal