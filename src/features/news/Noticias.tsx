import { INoticiasNormalizadas } from './types/news.types'
import {
  TarjetaNoticia,
  FechaTarjetaNoticia,
  DescripcionTarjetaNoticia,
  ImagenTarjetaNoticia,
  TituloTarjetaNoticia,
  ContenedorNoticias,
  ListaNoticias,
  TituloNoticias,
  BotonLectura,
} from "./styled";
import { useNews } from "./hooks/useNews";
import useModal from "./hooks/useModal";
import ModalNotPremium from './modal/ModalNotPremium';
import ModalPremium from './modal/ModalPremium';

const Noticias = () => {
  const noticias = useNews()
  const { modal, isOpenModal } = useModal();

  return (
    <ContenedorNoticias>
      <TituloNoticias>Noticias de los Simpsons</TituloNoticias>
      <ListaNoticias>
        {noticias?.map((noticia: INoticiasNormalizadas) => (
          <TarjetaNoticia>
            <ImagenTarjetaNoticia src={noticia.imagen} />
            <TituloTarjetaNoticia>{noticia.titulo}</TituloTarjetaNoticia>
            <FechaTarjetaNoticia>{noticia.fecha}</FechaTarjetaNoticia>
            <DescripcionTarjetaNoticia>
              {noticia.descripcionCorta}
            </DescripcionTarjetaNoticia>
            <BotonLectura onClick={() => isOpenModal(noticia)}>Ver más</BotonLectura>
          </TarjetaNoticia>
        ))}
        {modal ?
                (
                    modal.esPremium
                        ? (<ModalPremium isOpenModal={isOpenModal} modal={modal} />)
                        : (<ModalNotPremium isOpenModal={isOpenModal} modal={modal} />)
                )
                : null}
      </ListaNoticias>
    </ContenedorNoticias>
  );
};

export default Noticias;
