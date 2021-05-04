import React, { useEffect } from 'react';
import {
    CardMedia,
    Grid,
    GridProps,
    List,
    ListItem,
    styled,
    Typography,
} from '@material-ui/core';
import { useParams } from 'react-router';
import { useActions } from '~/hooks/useActions';
import { useSelector } from '~/hooks/useTypedSelector';

interface ParamTypes {
    id: string;
}

const DevicePageWrapper = styled((props: GridProps) => <Grid {...props} />)({
    paddingTop: 50,
});

const DevicePage: React.FC = () => {
    const { fetchDevice } = useActions();
    const { id } = useParams<ParamTypes>();
    const { device, error } = useSelector((state) => state.devices);

    useEffect(() => {
        fetchDevice(id);
    }, []);

    if (!device) {
        return <Grid>{error}</Grid>;
    }

    return (
        <DevicePageWrapper container spacing={2}>
            <Grid item xs={6}>
                <CardMedia
                    src={process.env.REACT_APP_API_URL + device.img}
                    component="img"
                />
            </Grid>
            <Grid item xs={6}>
                <List>
                    <ListItem>
                        <Typography variant="h6">Name:</Typography>
                        <Typography variant="h6">{device.name}</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant="h6">Rating:</Typography>
                        <Typography variant="h6">{device.rating}</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant="h6">Price:</Typography>
                        <Typography variant="h6">{device.price}</Typography>
                    </ListItem>
                </List>
            </Grid>
        </DevicePageWrapper>
    );
};

export default DevicePage;
