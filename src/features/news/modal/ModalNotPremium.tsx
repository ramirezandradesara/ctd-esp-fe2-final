import React from 'react'
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
import { SuscribeImage, CloseButton as Close } from "../../../assets";
import { INoticiasNormalizadas } from '../types/news.types';

export interface ModalProps {
    data: INoticiasNormalizadas;
    toggle(): void;
};

function ModalNotPremium({ data, toggle }: ModalProps) {
    console.log(data);
    
    return (
        <ContenedorModal>
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
}

export default ModalNotPremium