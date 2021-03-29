import React, {useState} from 'react';
import {Button, Grid, Modal, TextField} from "@material-ui/core";
import {useStyles} from "./modals.styles";

const CreateType = ({open, handleCloseModal}) => {
  const classes = useStyles();

  const [type, setType] = useState('');

  const onInputChange = (e) => {
    setType(e.target.value)
  };

  const modalBody = (
    <div className={classes.modal}>
      <Grid>
        <form>
          <TextField value={type} onChange={onInputChange} variant="outlined" label="Введите название нового типа" className={classes.input}/>
        </form>
      </Grid>
      <Grid container justify="space-between" className={classes.btnContainer}>
        <Button variant='outlined'>Добавить тип</Button>
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

export default CreateType;
