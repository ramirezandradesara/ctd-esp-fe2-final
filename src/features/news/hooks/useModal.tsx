// Custom Hook
import { useState } from "react";
import { INoticiasNormalizadas } from "../types/news.types";

const useModal = () => {
    const [isShowing, setIsShowing] = useState(false);
    const [modal, setModal] = useState<INoticiasNormalizadas | null>(null)
  
    const toggle = () => {
      setIsShowing(!isShowing);
    }

    const isOpenModal = (data: INoticiasNormalizadas | null):void => {
      setModal(data);
    }
  
    return {
      isShowing,
      toggle,
      setModal,
      modal,
      isOpenModal
    };

};

export default useModal;
