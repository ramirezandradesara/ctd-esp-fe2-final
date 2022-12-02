import { useEffect, useState } from "react";
import { obtenerNoticias } from "../fakeRest";
import { eachWordToUppercase } from "../helpers/eachWordToUppercase";
import { formatedData } from "../helpers/formatedData";
import { minutesElapsed } from "../helpers/minutesElapsed";
import { INoticiasNormalizadas } from "../types/news.types";

export async function useNews(): Promise<INoticiasNormalizadas[]> {

    // const [noticias, setNoticias] = useState<INoticiasNormalizadas[]>([]);

    //     const respuesta = await obtenerNoticias();

    //     const data = respuesta.map((n) => {
    //         return {
    //             id: n.id,
    //             titulo: eachWordToUppercase(n.titulo),
    //             descripcion: n.descripcion,
    //             fecha: `Hace ${minutesElapsed(n.fecha)} minutos`,
    //             esPremium: n.esPremium,
    //             imagen: n.imagen,
    //             descripcionCorta: n.descripcion.substring(0, 100),
    //         };
    //     });

    // return noticias;

    const [noticias, setNoticias] = useState<INoticiasNormalizadas[]>([]);
    
    useEffect(() => {
        formatedData().then((data) => setNoticias(data))
    }, [])

    return noticias
};
