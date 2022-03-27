import { Dispatch, SetStateAction, useState } from 'react';

const useModalVisibility = (): IUseModalVisibility => {
  const [modalVisibility, setModalVisibility] = useState<boolean>(false);

  return {
    modalVisibility,
    setModalVisibility,
  };
};

export interface IUseModalVisibility {
  modalVisibility: boolean,
  setModalVisibility: Dispatch<SetStateAction<boolean>>,
}

export default useModalVisibility;
