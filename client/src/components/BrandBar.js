import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch, useSelector} from "react-redux";
import {setSelectedBrand} from "../redux/actions/deviceActions";
import {List, ListItem, ListItemText} from "@material-ui/core";

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

  const dispatch = useDispatch();
  const {brands, selectedBrand} = useSelector(({devices}) => devices);
  const onBrandClick = (brand) => {
    dispatch(setSelectedBrand(brand))
  }

  return (
    <List component="ul" className={classes.list}>
      {brands && brands.map(brand =>
        <ListItem
          button
          className={classes.text}
          key={brand.id}
          onClick={() => onBrandClick(brand)}
          selected={brand.id === selectedBrand.id}
        >
          <ListItemText primary={brand.name}/>
        </ListItem>
      )}
    </List>
  );
};

export default BrandBar;
