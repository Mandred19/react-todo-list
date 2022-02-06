import React, {FC, ReactElement} from 'react';
import TablePagination from '@mui/material/TablePagination';
import Tooltip from '@mui/material/Tooltip';
import { Button, Stack } from '@mui/material';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { IChangePageHandlerProps } from './index';

const AppContentTableFooter: FC<IChangePageHandlerProps> = (props: IChangePageHandlerProps): ReactElement => {
  const {rows, page, rowsPerPage, onSetPage, onSetRowsPerPage} = props;

  return (
    <Stack direction={'row'} spacing={2} alignItems={'center'} justifyContent={'space-between'}>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={onSetPage}
        onRowsPerPageChange={onSetRowsPerPage}/>

      <Tooltip title="Delete all todos">
        <Button
          variant={'outlined'}
          color={'error'}
          startIcon={<DeleteForeverOutlinedIcon />}>
          Delete all todos
        </Button>
      </Tooltip>
    </Stack>
  );
};

export default AppContentTableFooter;
