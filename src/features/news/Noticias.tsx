import { useEffect, useState } from "react";
import { SuscribeImage, CloseButton as Close } from "../../assets";
import { INoticiasNormalizadas } from './types/news.types'
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
} from "./styled";
import { useNews } from "./hooks/useNews";
import useModal from "./hooks/useModal";
import Modal from "./modal/Modal";
import ModalPremium from "./modal/ModalNotPremium";
import ModalNotPremium from "./modal/ModalNotPremium";

const Noticias = () => {

  const noticias = useNews()
  const { modal, isOpenModal } = useModal();

  return (
    <ContenedorNoticias>
      <TituloNoticias>Noticias de los Simpsons</TituloNoticias>
      <ListaNoticias>
        {noticias?.map((n: INoticiasNormalizadas) => (
          <TarjetaNoticia>
            <ImagenTarjetaNoticia src={n.imagen} />
            <TituloTarjetaNoticia>{n.titulo}</TituloTarjetaNoticia>
            <FechaTarjetaNoticia>{n.fecha}</FechaTarjetaNoticia>
            <DescripcionTarjetaNoticia>
              {n.descripcionCorta}
            </DescripcionTarjetaNoticia>
            <BotonLectura onClick={() => isOpenModal(n)}>Ver más</BotonLectura>
          </TarjetaNoticia>
        ))}
        {modal && <Modal isOpenModal={isOpenModal} modal={modal} />}
      </ListaNoticias>
    </ContenedorNoticias>
  );
};

export default Noticias;
