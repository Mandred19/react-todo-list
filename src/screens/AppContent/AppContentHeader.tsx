import React, { FC, ReactElement, useState } from 'react';
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack } from '@mui/material';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { inputChangeEventType, inputChangeHandler } from '../../utils/inputChangeHandler';

const AppContentHeader: FC = (): ReactElement => {
  const [searchValue, setSearchValue] = useState<string>('');

  return (
    <Stack direction={'row'} spacing={2}>
      <FormControl variant="outlined" fullWidth>
        <InputLabel htmlFor="search-input">
          Search
        </InputLabel>

        <OutlinedInput
          id="search-input"
          type={'text'}
          value={searchValue}
          onChange={(e: inputChangeEventType) => inputChangeHandler(e, setSearchValue)}
          fullWidth
          autoFocus
          startAdornment={<SearchOutlinedIcon />}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="clear search text field"
                onClick={() => setSearchValue('')}
                edge="end">
                {<ClearOutlinedIcon />}
              </IconButton>
            </InputAdornment>
          }
          label={'Search'}/>
      </FormControl>

      <Button
        variant={'outlined'}
        title={'Add new item'}
        color={'primary'}
        startIcon={<AddOutlinedIcon />}>
        Add
      </Button>
    </Stack>
  );
};

export default AppContentHeader;
