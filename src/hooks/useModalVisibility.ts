import { Dispatch, SetStateAction, useState } from 'react';

export interface IUseModalVisibility {
  modalVisibility: boolean,
  setModalVisibility: Dispatch<SetStateAction<boolean>>,
}

export const useModalVisibility = (): IUseModalVisibility => {
  const [modalVisibility, setModalVisibility] = useState<boolean>(false);

  return {
    modalVisibility,
    setModalVisibility,
  };
};
