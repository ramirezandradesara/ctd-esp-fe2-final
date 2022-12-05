import { INoticiasNormalizadas } from "./news.types";

export interface ModalProps {
    modal: INoticiasNormalizadas | null;
    isOpenModal: (data:INoticiasNormalizadas | null) => void; 
};