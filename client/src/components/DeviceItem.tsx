import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import {useHistory} from 'react-router';
import {Routes} from '../routes';
import {IDevice} from '../types/devices';

const DeviceItem: React.FC<IDevice> = ({id, img, name, price, rating}) => {
  const useStyles = makeStyles((theme) => ({
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
  }));

  const classes = useStyles();
  const history = useHistory();

  const onCardClick = () => {
    history.push(Routes.DEVICE_ROUTE + '/' + id);
  };

  return (
    <Grid item xs={4} style={{marginTop: 20}}>
      <Card variant="outlined" onClick={onCardClick}>
        <CardMedia
          className={classes.media}
          image={process.env.REACT_APP_API_URL + img}
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Name: {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Price: {price}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Rating: {rating}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default DeviceItem;
