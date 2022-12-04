import React, { useState } from 'react'
import {
    CloseButton,
    TarjetaModal,
    ContenedorModal,
    DescripcionModal,
    ImagenModal,
    TituloModal,
    TarjetaNoticia,
    FechaTarjetaNoticia,
    DescripcionTarjetaNoticia,
    ImagenTarjetaNoticia,
    TituloTarjetaNoticia,
    ContenedorNoticias,
    ListaNoticias,
    TituloNoticias,
    BotonLectura,
    BotonSuscribir,
    CotenedorTexto,
} from "../styled";
import { INoticiasNormalizadas } from '../types/news.types';
import { SuscribeImage, CloseButton as Close } from "../../../assets";

export interface ModalProps {
    modal: INoticiasNormalizadas | null;
    isOpenModal: (INoticiasNormalizadas | null) => void 
};

function Modal({modal, isOpenModal }: ModalProps) {

    return (
        <div>
            {modal ? (
                modal.esPremium
                    ? (<ContenedorModal>
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
                    </ContenedorModal>)
                    :
                    (<ContenedorModal>
                        <TarjetaModal>
                            <CloseButton onClick={() => isOpenModal(null)}>
                                <img src={Close} alt="close-button" />
                            </CloseButton>
                            <ImagenModal src={modal.imagen} alt="news-image" />
                            <CotenedorTexto>
                                <TituloModal>{modal.titulo}</TituloModal>
                                <DescripcionModal>{modal.descripcion}</DescripcionModal>
                            </CotenedorTexto>
                        </TarjetaModal>
                    </ContenedorModal>
                    )
            ) : null}
        </div>
    )
}

export default Modal