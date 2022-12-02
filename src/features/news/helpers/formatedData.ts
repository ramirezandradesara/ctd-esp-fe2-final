import { obtenerNoticias } from "../fakeRest";
import { eachWordToUppercase } from "./eachWordToUppercase";
import { minutesElapsed } from "./minutesElapsed";

export async function formatedData() {
    const respuesta = await obtenerNoticias();

    const data = respuesta.map((n) => {
        return {
            id: n.id,
            titulo: eachWordToUppercase(n.titulo),
            descripcion: n.descripcion,
            fecha: `Hace ${minutesElapsed(n.fecha)} minutos`,
            esPremium: n.esPremium,
            imagen: n.imagen,
            descripcionCorta: n.descripcion.substring(0, 100),
        };
    })

    return data
}