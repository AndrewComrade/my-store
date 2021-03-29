import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 600,
    outline: 'none',
    border: '1px solid grey',
    borderRadius: 15,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(3),
    transform: 'translate(-50%, -50%)'
  },
  input: {
    width: '100%',
    marginBottom: 20
  },
  select: {
    marginBottom: 20
  },
  btnContainer: {
    marginTop: 20
  }
}));
