import React from 'react';
import {Button, Container, Grid, List, ListItem, Typography} from "@material-ui/core";
import {useSelector} from "react-redux";

const DevicePage = () => {
  const devices = useSelector(({devices}) => devices)
  const description = [
    {id: 1, title: 'Оперативная память', description: '5 гб'},
    {id: 2, title: 'Камера', description: '12 мп'},
    {id: 3, title: 'Процессор', description: 'Пентиум 3'},
    {id: 4, title: 'Кол-во ядер', description: '2'},
    {id: 5, title: 'Аккумулятор', description: '4000'},
  ]

  return (
    <Container>
      <Grid container spacing={2} style={{marginTop: 20, marginBottom: 20}}>
        <Grid item xs={4}>
          <img src="" alt=""/>
          Image
        </Grid>
        <Grid item xs={4}>
          <Typography>
            RATING: 5
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>
            PRICE: 10 000
          </Typography>
          <Button variant='outlined'>Добавить в корзину</Button>
        </Grid>
      </Grid>
      <h4>Характеристики:</h4>
      <List>
        {description && description.map(info =>
          <ListItem key={info.id}>{info.title}: {info.description}</ListItem>
        )}
      </List>
    </Container>
  );
};

export default DevicePage;
