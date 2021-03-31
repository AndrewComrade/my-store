import React, {useState} from 'react';
import {
  Box,
  Button, FormControl,
  Grid, InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';
import {useSelector} from 'react-redux';
import {useStyles} from './modals.styles';

const CreateDevice = ({open, handleCloseModal}) => {
  const classes = useStyles();

  const {brands, types} = useSelector(({devices}) => devices);

  const [type, setType] = useState('');
  const [brand, setBrand] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  const [info, setInfo] = useState([]);

  const addInfo = () => {
    setInfo([...info, {title: '', description: '', number: Date.now()}]);
  };

  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleBrandChange = (e) => {
    setBrand(e.target.value);
  };

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onPriceChange = (e) => {
    setPrice(e.target.value);
  };

  const priceInputProps = {
    type: 'number',
    min: 0,
    step: 500,
  };

  const modalBody = (
    <div className={classes.modal}>
      <form>
        <Grid container direction="column">
          <FormControl>
            <InputLabel>Device type</InputLabel>
            <Select
              className={classes.select}
              onChange={handleTypeChange}
              value={type}
            >
              {types && types.map((type) =>
                <MenuItem
                  key={type.id}
                  value={type.name}
                >
                  {type.name}
                </MenuItem>,
              )}
            </Select>
          </FormControl>

          <FormControl>
            <InputLabel>Device brand</InputLabel>
            <Select
              className={classes.select}
              onChange={handleBrandChange}
              value={brand}
            >
              {brands && brands.map((brand) =>
                <MenuItem
                  key={brand.id}
                  value={brand.name}
                >
                  {brand.name}
                </MenuItem>,
              )}
            </Select>
          </FormControl>
        </Grid>
        <Grid container direction="column">
          <TextField
            value={name}
            onChange={onNameChange}
            variant="outlined"
            label="Введите название нового устройства"
            className={classes.input}
          />
          <TextField
            value={price}
            onChange={onPriceChange}
            inputProps={priceInputProps}
            variant="outlined"
            label="Введите стоимость устройства"
            className={classes.input}
          />
          <Typography component="h4">Характеристики:</Typography>
        </Grid>
        <Grid container direction="column">
          <Button
            variant="outlined"
            onClick={addInfo}
          >
            Добавить свойство
          </Button>
          {info && info.map((i) =>
            <Box mt={2} key={i.number}>
              <Grid
                container
                item xs={12}
                spacing={2}
                justify="space-between"
                alignItems="center">
                <Grid item xs={4}>
                  <TextField variant="outlined" label="Название свойства"/>
                </Grid>
                <Grid item xs={4}>
                  <TextField variant="outlined" label="Описание свойства"/>
                </Grid>
                <Grid container item xs={4}>
                  <Button onClick={() => removeInfo(i.number)}>Удалить</Button>
                </Grid>
              </Grid>
            </Box>,
          )}
        </Grid>
      </form>
      <Grid container justify="space-between" className={classes.btnContainer}>
        <Button variant='outlined'>Добавить устройство</Button>
        <Button variant='outlined' onClick={handleCloseModal}>Отмена</Button>
      </Grid>
    </div>
  );

  return (
    <Modal
      open={open}
      onClose={handleCloseModal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {modalBody}
    </Modal>
  );
};

export default CreateDevice;
