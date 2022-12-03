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
    dataModal: INoticiasNormalizadas;
    setModal(): void;
}
  
function Modal({ dataModal, setModal }: ModalProps) {
    return (
        <div>
            {dataModal ? (
                dataModal.esPremium
                    ? (<ContenedorModal>
                        <TarjetaModal>
                            <CloseButton onClick={() => setModal(null)}>
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
                                            setModal(null);
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
                            <CloseButton onClick={() => setModal(null)}>
                                <img src={Close} alt="close-button" />
                            </CloseButton>
                            <ImagenModal src={dataModal.imagen} alt="news-image" />
                            <CotenedorTexto>
                                <TituloModal>{dataModal.titulo}</TituloModal>
                                <DescripcionModal>{dataModal.descripcion}</DescripcionModal>
                            </CotenedorTexto>
                        </TarjetaModal>
                    </ContenedorModal>
                    )
            ) : null}
        </div>
    )
}

export default Modal