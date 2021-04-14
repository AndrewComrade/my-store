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
import {IDevice} from '../types/devices';

interface ParamTypes {
  id?: string;
}

const DevicePage: React.FC = () => {
  const [device, setDevice] = useState<IDevice | null>(null);
  const {id} = useParams<ParamTypes>();

  useEffect(() => {
    fetchDevice(id).then((data) => setDevice(data));
  }, []);

  return (
    <Container>
      <Grid container spacing={2} style={{marginTop: 20, marginBottom: 20}}>
        <Grid item xs={6}>
          {device && <img src={process.env.REACT_APP_API_URL + device.img} alt=""/>}
        </Grid>
        <Grid item xs={3}>
          <Typography>
            RATING: 5
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>
            {device && device.price} р.
          </Typography>
          <Button variant='outlined'>Добавить в корзину</Button>
        </Grid>
      </Grid>
      <h4>Характеристики:</h4>
      <List>
        {device && device.info && device.info.map((info) =>
          <ListItem key={info.id}>{info.title}: {info.description}</ListItem>,
        )}
      </List>
    </Container>
  );
};

export default DevicePage;
