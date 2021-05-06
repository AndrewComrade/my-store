import React from 'react';
import { IDevice } from '~/types/devices';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    styled,
    Typography,
} from '@material-ui/core';
import { useSelector } from '~/hooks/useTypedSelector';
import { useHistory } from 'react-router';
import { Routes } from '~/routes';
import { IOption } from '~/types/brands';

interface DeviceItemProps {
    device: IDevice;
}

const DeviceImage = styled(CardMedia)({
    height: 200,
});

const DeviceItem: React.FC<DeviceItemProps> = ({ device }) => {
    const history = useHistory();
    const { brands } = useSelector((state) => state.brands);
    const { types } = useSelector((state) => state.types);

    const deviceType: IOption | undefined = types.find(
        (type: IOption) => device.typeId === type.id
    );

    const deviceBrand: IOption | undefined = brands.find(
        (brand: IOption) => device.brandId === brand.id
    );

    const onMoreBtnClick = () => {
        history.push(Routes.DEVICE_ROUTE + '/' + device.id);
    };

    return (
        <Card>
            <DeviceImage
                image={process.env.REACT_APP_API_URL + device.img}
                title="Contemplative Reptile"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {device.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Type: {deviceType?.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Brand: {deviceBrand?.name}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" onClick={onMoreBtnClick}>
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
};

export default DeviceItem;
