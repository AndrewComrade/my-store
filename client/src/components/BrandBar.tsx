import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {setSelectedBrand} from '../redux/actions/deviceActions';
import {List, ListItem, ListItemText, Typography} from '@material-ui/core';
import {useAppDispatch, useAppSelector} from '../types/hooks';
import {IOptions} from '../types/devices';

const BrandBar = () => {
  const useStyles = makeStyles((theme) => ({
    list: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    text: {
      textAlign: 'center',
      textTransform: 'uppercase',
    },
  }));

  const classes = useStyles();

  const dispatch = useAppDispatch();
  const {brands, selectedBrand} = useAppSelector(({devices}) => devices);
  const onBrandClick = (brand: IOptions | null) => {
    dispatch(setSelectedBrand(brand));
  };

  return (
    <List component="ul" className={classes.list}>
      <Typography>Brands:</Typography>
      <ListItem
        button
        className={classes.text}
        onClick={() => onBrandClick(null)}
        selected={!selectedBrand}
      >
        <ListItemText primary='ALL'/>
      </ListItem>
      {brands && brands.map((brand) =>
        <ListItem
          button
          className={classes.text}
          key={brand.id}
          onClick={() => onBrandClick(brand)}
          selected={!!selectedBrand && brand.id === selectedBrand.id}
        >
          <ListItemText primary={brand.name}/>
        </ListItem>,
      )}
    </List>
  );
};

export default BrandBar;
