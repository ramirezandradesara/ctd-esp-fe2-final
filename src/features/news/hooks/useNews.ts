import { useEffect, useState } from "react";
import { obtenerNoticias } from "../fakeRest";
import { eachWordToUppercase } from "../helpers/eachWordToUppercase";
import { formatedData } from "../helpers/formatedData";
import { minutesElapsed } from "../helpers/minutesElapsed";
import { INoticiasNormalizadas } from "../types/news.types";

export  function useNews() {
    const [noticias, setNoticias] = useState<INoticiasNormalizadas[]>([]);
    
    useEffect(() => {
        formatedData().then((data) => setNoticias(data))
    }, [])

    return noticias
};
