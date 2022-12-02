import { useEffect, useState } from "react";
import { formatedData } from "../helpers/formatedData";
import { INoticiasNormalizadas } from "../types/news.types";

export  function useNews() {
    const [noticias, setNoticias] = useState<INoticiasNormalizadas[]>([]);
    
    useEffect(() => {
        formatedData().then((data) => setNoticias(data))
    }, [])

    return noticias
};
