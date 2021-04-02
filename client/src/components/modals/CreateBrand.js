import React, {useState} from 'react';
import {Button, Grid, Modal, TextField} from '@material-ui/core';
import {useStyles} from './modals.styles';
import {createBrand} from '../../http/deviceAPI';

const CreateBrand = ({open, handleCloseModal}) => {
  const classes = useStyles();

  const [brand, setBrand] = useState('');

  const addBrand = () => {
    createBrand({name: brand}).then((data) => {
      setBrand('');
      handleCloseModal();
    });
  };

  const onInputChange = (e) => {
    setBrand(e.target.value);
  };

  const modalBody = (
    <div className={classes.modal}>
      <Grid>
        <form>
          <TextField
            value={brand}
            onChange={onInputChange}
            variant="outlined"
            label="Введите название нового бренда"
            className={classes.input}/>
        </form>
      </Grid>
      <Grid container justify="space-between" className={classes.btnContainer}>
        <Button variant='outlined' onClick={addBrand}>Добавить бренд</Button>
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

export default CreateBrand;

