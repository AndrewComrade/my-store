import React from 'react';
import {List, ListItem, ListItemText} from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import {setSelectedType} from '../redux/actions/deviceActions';
import {makeStyles} from '@material-ui/core/styles';

const TypeBar = () => {
  const useStyles = makeStyles((theme) => ({
    text: {
      textAlign: 'center',
      textTransform: 'uppercase',
    },
  }));

  const classes = useStyles();

  const dispatch = useDispatch();
  const {types, selectedType} = useSelector(({devices}) => devices);
  const onTypeClick = (type) => {
    dispatch(setSelectedType(type));
  };

  return (
    <List component="ul">
      {types && types.map((type) =>
        <ListItem
          button
          className={classes.text}
          key={type.id}
          divider={true}
          onClick={() => onTypeClick(type)}
          selected={type.id === selectedType.id}
        >
          <ListItemText primary={type.name}/>
        </ListItem>,
      )}
    </List>
  );
};

export default TypeBar;
