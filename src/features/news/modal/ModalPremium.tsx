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

function ModalPremium({data, toggle }: ModalProps) {
    return (
        <ContenedorModal>
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
        </ContenedorModal>
  )
}

export default ModalPremium