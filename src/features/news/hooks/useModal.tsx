// Custom Hook
import { useState } from "react";
import { INoticiasNormalizadas } from "../types/news.types";

const useModal = () => {

  const [modal, setModal] = useState<INoticiasNormalizadas | null>(null);

  return {
    modal,
    setModal
  };
};

export default useModal;
