import React from 'react';
import {Container, Grid, List, ListItem, ListItemText} from "@material-ui/core";

const Admin = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={3}>
          <List component="li">
            <ListItem button>
              <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Drafts" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Drafts" />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={9}></Grid>
      </Grid>
    </Container>
  );
};

export default Admin;
