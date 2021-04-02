import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router';
import {
  Button,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from '@material-ui/core';
import {fetchDevice} from '../http/deviceAPI';

const DevicePage = () => {
  const [device, setDevice] = useState({info: []});
  const {id} = useParams();

  useEffect(() => {
    fetchDevice(id).then((data) => setDevice(data));
  }, []);

  return (
    <Container>
      <Grid container spacing={2} style={{marginTop: 20, marginBottom: 20}}>
        <Grid item xs={6}>
          <img src={process.env.REACT_APP_API_URL + device.img} alt=""/>
        </Grid>
        <Grid item xs={3}>
          <Typography>
            RATING: 5
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>
            {device.price} р.
          </Typography>
          <Button variant='outlined'>Добавить в корзину</Button>
        </Grid>
      </Grid>
      <h4>Характеристики:</h4>
      <List>
        {device && device.info.map((info) =>
          <ListItem key={info.id}>{info.title}: {info.description}</ListItem>,
        )}
      </List>
    </Container>
  );
};

export default DevicePage;
