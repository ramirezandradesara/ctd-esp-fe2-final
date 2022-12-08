import { INoticiasNormalizadas } from './types/news.types'
import {
  ContenedorNoticias,
  ListaNoticias,
  TituloNoticias,
} from "./styled";
import { useNews } from "./hooks/useNews";
import useModal from "./hooks/useModal";
import ModalNotPremium from './components/modal/ModalNotPremium';
import ModalPremium from './components/modal/ModalPremium';
import NoticiaCard from './components/noticiaCard/NoticiaCard';

const Noticias = () => {
  const noticias = useNews()
  const { modal, isOpenModal } = useModal();

  return (
    <ContenedorNoticias>
      <TituloNoticias>Noticias de los Simpsons</TituloNoticias>
      <ListaNoticias>
        {noticias?.map((noticia: INoticiasNormalizadas) => (
          <NoticiaCard noticia={noticia} isOpenModal={isOpenModal} />
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