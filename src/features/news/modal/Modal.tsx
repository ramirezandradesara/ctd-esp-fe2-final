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
    data: INoticiasNormalizadas;
    toggle(): void;
};

function Modal({data, toggle }: ModalProps) {

    return (
        <div>
            {data ? (
                data.esPremium
                    ? (<ContenedorModal>
                        <TarjetaModal>
                            <CloseButton onClick={() => toggle()}>
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
                                            toggle();
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
                            <CloseButton onClick={() => toggle()}>
                                <img src={Close} alt="close-button" />
                            </CloseButton>
                            <ImagenModal src={data.imagen} alt="news-image" />
                            <CotenedorTexto>
                                <TituloModal>{data.titulo}</TituloModal>
                                <DescripcionModal>{data.descripcion}</DescripcionModal>
                            </CotenedorTexto>
                        </TarjetaModal>
                    </ContenedorModal>
                    )
            ) : null}
        </div>
    )
}

export default Modal