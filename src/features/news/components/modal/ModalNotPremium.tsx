import {
    CloseButton,
    TarjetaModal,
    ContenedorModal,
    DescripcionModal,
    ImagenModal,
    TituloModal,
    CotenedorTexto,
} from "../../styled";
import { CloseButton as Close } from "../../../../assets";
import { ModalProps } from '../../types/modalProps.types';

function ModalNotPremium({modal, isOpenModal }: ModalProps) {

    return (
        <ContenedorModal>
            <TarjetaModal>
                <CloseButton onClick={() => isOpenModal(null)}>
                    <img src={Close} alt="close-button" />
                </CloseButton>
                <ImagenModal src={modal?.imagen} alt="news-image" />
                <CotenedorTexto>
                    <TituloModal>{modal?.titulo}</TituloModal>
                    <DescripcionModal>{modal?.descripcion}</DescripcionModal>
                </CotenedorTexto>
            </TarjetaModal>
        </ContenedorModal>
    )
};

export default ModalNotPremium