import React, {useState} from 'react';
import {Container, List, ListItem, ListItemText} from '@material-ui/core';
import CreateType from '../components/modals/CreateType';
import CreateDevice from '../components/modals/CreateDevice';
import CreateBrand from '../components/modals/CreateBrand';

const Admin = () => {
  const [openTypeModal, setOpenTypeModal] = useState(false);
  const [openBrandModal, setOpenBrandModal] = useState(false);
  const [openDeviceModal, setOpenDeviceModal] = useState(false);

  const handleOpenModal = (modalType) => {
    switch (modalType) {
      case 'type':
        setOpenTypeModal(true);
        break;
      case 'brand':
        setOpenBrandModal(true);
        break;
      case 'device':
        setOpenDeviceModal(true);
        break;
      default:
        break;
    }
  };

  const handleCloseModal = (modalType) => {
    switch (modalType) {
      case 'type':
        setOpenTypeModal(false);
        break;
      case 'brand':
        setOpenBrandModal(false);
        break;
      case 'device':
        setOpenDeviceModal(false);
        break;
      default:
        break;
    }
  };

  return (
    <Container>
      <List component="ul" style={{display: 'flex'}}>
        <ListItem button onClick={() => handleOpenModal('type')}>
          <ListItemText style={{textAlign: 'center'}}>
            Добавить тип
          </ListItemText>
        </ListItem>
        <ListItem button onClick={() => handleOpenModal('brand')}>
          <ListItemText style={{textAlign: 'center'}}>
            Добавить бренд
          </ListItemText>
        </ListItem>
        <ListItem button onClick={() => handleOpenModal('device')}>
          <ListItemText style={{textAlign: 'center'}}>
            Добавить устройство
          </ListItemText>
        </ListItem>
      </List>
      <CreateType open={openTypeModal} handleCloseModal={() => handleCloseModal('type')}/>
      <CreateBrand open={openBrandModal} handleCloseModal={() => handleCloseModal('brand')}/>
      <CreateDevice open={openDeviceModal} handleCloseModal={() => handleCloseModal('device')}/>
    </Container>
  );
};

export default Admin;
