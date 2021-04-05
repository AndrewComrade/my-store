import React, {useEffect, useState} from 'react';
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
import {useDispatch, useSelector} from 'react-redux';
import {useStyles} from './modals.styles';
import {createDevice, fetchBrands, fetchTypes} from '../../http/deviceAPI';
import {setBrands, setSelectedBrand, setSelectedType, setTypes} from '../../redux/actions/deviceActions';

const CreateDevice = ({open, handleCloseModal}) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  useEffect(() => {
    fetchTypes().then((data) => dispatch(setTypes(data)));
    fetchBrands().then((data) => dispatch(setBrands(data)));
  }, []);

  const {brands, types, selectedType, selectedBrand} = useSelector(({devices}) => devices);

  const [name, setName] = useState('');
  const [file, setFile] = useState(null);
  const [price, setPrice] = useState(0);
  const [info, setInfo] = useState([]);

  const addInfo = () => {
    setInfo([...info, {title: '', description: '', number: Date.now()}]);
  };

  const changeInfo = (key, value, number) => {
    setInfo(info.map((i) => i.number === number ? {...i, [key]: value} : i));
  };

  const addDevice = () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', `${price}`);
    formData.append('img', file);
    formData.append('typeId', selectedType.id);
    formData.append('brandId', selectedBrand.id);
    formData.append('info', JSON.stringify(info));
    createDevice(formData).then((data) => {
      handleCloseModal();
      dispatch(setSelectedType({}));
      dispatch(setSelectedBrand({}));
    });
  };

  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };

  const onTypeChange = (type) => {
    dispatch(setSelectedType(type));
  };

  const onBrandChange = (brand) => {
    dispatch(setSelectedBrand(brand));
  };

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
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
            <Select className={classes.select}>
              {types && types.map((type) =>
                <MenuItem
                  onClick={() => onTypeChange(type)}
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
            <Select className={classes.select}>
              {brands && brands.map((brand) =>
                <MenuItem
                  onClick={() => onBrandChange(brand)}
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
          <Button variant="contained" component="label">
            {file ? file.name : 'Upload File'}
            <input type="file" hidden onChange={onFileChange}/>
          </Button>
        </Grid>
        <Grid container direction="column">
          {info && info.map((i) =>
            <Box mt={2} key={i.number}>
              <Grid
                container
                item xs={12}
                spacing={2}
                justify="space-between"
                alignItems="center">
                <Grid item xs={4}>
                  <TextField
                    value={i.title}
                    variant="outlined"
                    label="Название свойства"
                    onChange={(e) => changeInfo('title', e.target.value, i.number)}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    value={i.description}
                    variant="outlined"
                    label="Описание свойства"
                    onChange={(e) => changeInfo('description', e.target.value, i.number)}
                  />
                </Grid>
                <Grid container item xs={4}>
                  <Button onClick={() => removeInfo(i.number)}>Удалить</Button>
                </Grid>
              </Grid>
            </Box>,
          )}
          <Button variant="outlined" onClick={addInfo}>
            Добавить свойство
          </Button>
        </Grid>
      </form>
      <Grid container justify="space-between" className={classes.btnContainer}>
        <Button variant='outlined' onClick={addDevice}>Добавить устройство</Button>
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
