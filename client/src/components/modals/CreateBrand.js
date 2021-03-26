import React from 'react';
import {Button, Grid, makeStyles, Modal, TextField} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 400,
    outline: 'none',
    border: '1px solid grey',
    borderRadius: 15,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    transform: 'translate(-50%, -50%)'
  },
  input: {
    width: '100%',
    marginBottom: 20
  }
}));

const CreateBrand = ({open, handleCloseModal}) => {
  const classes = useStyles();

  const modalBody = (
    <div className={classes.modal}>
      <Grid>
        <form>
          <TextField variant="outlined" label="Введите название нового бренда" className={classes.input}/>
        </form>
      </Grid>
      <Grid container justify="space-between">
        <Button variant='outlined'>Добавить бренд</Button>
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

