import { useState } from "react";
import { NombresSimpsons, INFO_SIMPSONS } from "./constants";
import {
  BotonBio,
  BioContainer,
  BioImagen,
  ContenedorBotones,
  BioNombre, BioDescripcion
} from "./styled";

const Bio = () => {
  const [bioActiva, setBioActiva] = useState(
    INFO_SIMPSONS[NombresSimpsons.BART]
  );

  const onClick: (nombre: NombresSimpsons) => void = (nombre) =>
    setBioActiva(INFO_SIMPSONS[nombre]);

  /**
   * Función que renderiza los botones son los nombres de los personajes y 
   * permite cambiar los estilos del botón del personaje seleccionado.
   * @returns {HTMLElement}
   */
  const crearBotones = () => {
    return Object.keys(INFO_SIMPSONS).map((nombre: string) => (
      <BotonBio
        key={nombre as string}
        onClick={() => onClick(nombre as NombresSimpsons)}
        active={bioActiva.id === nombre}
      >
        {nombre}
      </BotonBio>
    ));
  };

  return (
    <BioContainer>
      <ContenedorBotones>{crearBotones()}</ContenedorBotones>
      <div>
        <div>
          <BioImagen
            src={bioActiva.image}
            alt={bioActiva.nombre}
          />
        </div>
        <div>
          <BioNombre>{bioActiva.nombre}</BioNombre>
          <BioDescripcion>{bioActiva.descripcion}</BioDescripcion>
        </div>
      </div>
    </BioContainer>
  );
};

export default Bio;
