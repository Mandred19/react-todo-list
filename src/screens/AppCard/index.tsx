import React, { FC, ReactElement, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchTodoItemById } from '../../store/actions/todoLIstActions';

const AppCard: FC = (): ReactElement => {
  const { id = '' } = useParams();
  const dispatch = useAppDispatch();
  const { currentItem } = useAppSelector((state) => state.todoListSlice);

  useEffect(() => {
    dispatch(fetchTodoItemById(id));
  }, [id]);

  return (
    <>
      {
        currentItem
          ?
          <div className={'AppCard'}>
            {currentItem.id}
          </div>
          :
          'Item not found'
      }
    </>
  );
};

export default AppCard;
