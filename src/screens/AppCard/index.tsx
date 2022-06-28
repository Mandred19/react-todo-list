import React, { FC, ReactElement, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchTodoItemById } from '../../store/actions/todoLIstActions';
import { Card, CardActions, CardContent, CardHeader, Collapse, IconButton, IconButtonProps, Stack, Tooltip, Typography } from '@mui/material';
import { makeStyles, styled } from '@mui/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const ExpandMore = styled((props: IExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  // transition: theme.transitions.create('transform', {
  //   duration: theme.transitions.duration.shortest,
  // }),
}));

const useStyles = makeStyles(() => ({
  todoListCard: {
    minWidth: 360,
    maxWidth: 500,
  },
}));

const AppCard: FC = (): ReactElement => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { id: paramsId = '' } = useParams();
  const dispatch = useAppDispatch();
  const [expanded, setExpanded] = React.useState(false);
  const { pending, currentItem } = useAppSelector((state) => state.todoListSlice);

  useEffect(() => {
    dispatch(fetchTodoItemById(paramsId));
  }, [paramsId]);

  return (
    <Stack alignItems={'center'} justifyContent={'center'} height={'100%'}>
      {
        currentItem
          ?
          <Card raised className={classes.todoListCard} sx={{width: 360}}>
            <CardHeader
              avatar={
                <Tooltip title={'Back'}>
                  <span>
                    <IconButton
                      onClick={() => navigate('list')}
                      color={'default'}
                      disabled={pending}
                      aria-label={'Back'}>
                      <ArrowBackIcon />
                    </IconButton>
                  </span>
                </Tooltip>
              }
              title={
              <Typography variant={'h6'} noWrap>
                {currentItem.title}
              </Typography>
              } />

            <CardContent>
              <Stack direction={'row'} alignItems={'flex-start'} justifyContent={'flex-start'} width={'100%'}>
                <Typography variant={'caption'}>
                  Created date:&nbsp;
                </Typography>

                <Typography variant={'caption'}>
                  {currentItem.createdAt}
                </Typography>
              </Stack>

              <Stack direction={'row'} alignItems={'flex-start'} justifyContent={'flex-start'} width={'100%'}>
                <Typography variant={'caption'}>
                  Updated date:&nbsp;
                </Typography>

                <Typography variant={'caption'}>
                  {currentItem.updatedAt}
                </Typography>
              </Stack>
            </CardContent>

            <CardActions>
              <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} spacing={2} width={'100%'}>
                <Tooltip title={expanded ? 'Hide description' : 'Show description'}>
                  <span>
                    <ExpandMore
                      expand={expanded}
                      onClick={() => setExpanded(!expanded)}
                      aria-expanded={expanded}
                      aria-label={expanded ? 'Hide description' : 'Show description'}>
                      {
                        expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />
                      }
                    </ExpandMore>
                  </span>
                </Tooltip>

                <Stack direction={'row'} spacing={2}>
                  <Tooltip title={currentItem.isComplete ? 'Completed item is not editable' : 'Edit'}>
                    <span>
                      <IconButton
                        color={'default'}
                        disabled={pending || currentItem.isComplete}
                        aria-label={currentItem.isComplete ? 'Completed item is not editable' : 'Edit'}>
                        <EditIcon />
                      </IconButton>
                    </span>
                  </Tooltip>

                  <Tooltip title={'Set as completed'}>
                    <span>
                      <IconButton
                        color={currentItem.isComplete ? 'info' : 'default'}
                        disabled={pending}
                        aria-label={'Set as completed'}>
                        <CheckCircleIcon />
                      </IconButton>
                    </span>
                  </Tooltip>

                  <Tooltip title={'Set as favorite'}>
                    <span>
                      <IconButton
                        color={currentItem.isFavorite ? 'warning' : 'default'}
                        disabled={pending}
                        aria-label={'Set as favorite'}>
                        <StarIcon />
                      </IconButton>
                    </span>
                  </Tooltip>

                  <Tooltip title={'Delete'}>
                    <span>
                      <IconButton
                        color={'error'}
                        disabled={pending}
                        aria-label={'Delete'}>
                        <DeleteIcon />
                      </IconButton>
                    </span>
                  </Tooltip>
                </Stack>
              </Stack>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography variant={'body1'} paragraph>
                  {currentItem.description ? currentItem.description : 'Description is empty'}
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          :
          <Card>
            <CardContent>
              <Typography variant="h6">
                Item by id: <strong>{paramsId}</strong> is not found
              </Typography>
            </CardContent>
          </Card>
      }
    </Stack>
  );
};

export default AppCard;

interface IExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
