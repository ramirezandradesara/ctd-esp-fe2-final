// Custom Hook
import { useState } from "react";
import { INoticiasNormalizadas } from "../types/news.types";

const useModal = () => {
  const [modal, setModal] = useState<INoticiasNormalizadas | null>(null);

  const isOpenModal = (data: INoticiasNormalizadas | null): void => {
    setModal(data);
  };

  return {
    modal,
    isOpenModal
  };

};

export default useModal;
