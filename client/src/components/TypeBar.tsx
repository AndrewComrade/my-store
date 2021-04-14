import React from 'react';
import {List, ListItem, ListItemText, Typography} from '@material-ui/core';
import {setSelectedType} from '../redux/actions/deviceActions';
import {makeStyles} from '@material-ui/core/styles';
import {useAppDispatch, useAppSelector} from '../types/hooks';
import {IOptions} from '../types/devices';

const TypeBar = () => {
  const useStyles = makeStyles((theme) => ({
    text: {
      textAlign: 'center',
      textTransform: 'uppercase',
    },
  }));

  const classes = useStyles();

  const dispatch = useAppDispatch();
  const {types, selectedType} = useAppSelector(({devices}) => devices);

  const onTypeClick = (type: IOptions | null) => {
    dispatch(setSelectedType(type));
  };

  return (
    <List component="ul">
      <Typography>Types:</Typography>
      <ListItem
        button
        className={classes.text}
        onClick={() => onTypeClick(null)}
        selected={!selectedType}
      >
        <ListItemText primary='ALL'/>
      </ListItem>
      {types && types.map((type) =>
        <ListItem
          button
          className={classes.text}
          key={type.id}
          onClick={() => onTypeClick(type)}
          selected={!!selectedType && type.id === selectedType.id}
        >
          <ListItemText primary={type.name}/>
        </ListItem>,
      )}
    </List>
  );
};

export default TypeBar;
