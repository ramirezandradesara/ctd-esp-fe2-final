import { INoticiasNormalizadas } from "./news.types";

export interface NoticiaProps {
    noticia: INoticiasNormalizadas;
    isOpenModal: (data:INoticiasNormalizadas | null) => void; 
};