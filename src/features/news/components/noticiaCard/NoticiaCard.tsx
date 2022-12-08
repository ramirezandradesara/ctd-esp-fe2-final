import {
    BotonLectura,
    DescripcionTarjetaNoticia,
    FechaTarjetaNoticia,
    ImagenTarjetaNoticia,
    TarjetaNoticia,
    TituloTarjetaNoticia
} from '../../styled'
import { NoticiaProps } from '../../types/noticia.props';

function NoticiaCard({ noticia, isOpenModal }: NoticiaProps) {
    return (
        <div>
            <TarjetaNoticia>
                <ImagenTarjetaNoticia src={noticia.imagen} />
                <TituloTarjetaNoticia>{noticia.titulo}</TituloTarjetaNoticia>
                <FechaTarjetaNoticia>{noticia.fecha}</FechaTarjetaNoticia>
                <DescripcionTarjetaNoticia>
                    {noticia.descripcionCorta}
                </DescripcionTarjetaNoticia>
                <BotonLectura onClick={() => isOpenModal(noticia)}>Ver más</BotonLectura>
            </TarjetaNoticia>
        </div>
    )
}

export default NoticiaCard