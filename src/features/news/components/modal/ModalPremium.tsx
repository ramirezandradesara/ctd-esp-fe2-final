import {
    CloseButton,
    TarjetaModal,
    ContenedorModal,
    DescripcionModal,
    ImagenModal,
    TituloModal,
    BotonSuscribir,
    CotenedorTexto,
} from "../../styled";
import { SuscribeImage, CloseButton as Close } from "../../../../assets";
import { ModalProps } from '../../types/modalProps.types';

function ModalPremium({ modal, isOpenModal }: ModalProps) {

    return (
        <ContenedorModal>
            <TarjetaModal>
                <CloseButton onClick={() => isOpenModal(null)}>
                    <img src={Close} alt="close-button" />
                </CloseButton>
                <ImagenModal src={SuscribeImage} alt="mr-burns-excelent" />
                <CotenedorTexto>
                    <TituloModal>Suscríbete a nuestro Newsletter</TituloModal>
                    <DescripcionModal>
                        Suscríbete a nuestro newsletter y recibe noticias de
                        nuestros personajes favoritos.
                    </DescripcionModal>
                    <BotonSuscribir
                        onClick={() =>
                            setTimeout(() => {
                                alert("Suscripto!");
                                isOpenModal(null);
                            }, 1000)
                        }>
                        Suscríbete
                    </BotonSuscribir>
                </CotenedorTexto>
            </TarjetaModal>
        </ContenedorModal>
    )
};

export default ModalPremium